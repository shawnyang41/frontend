<template>
  <div v-bind:class="{afterSearch : afterSearchFunction}" id="app">
    <h1> Mobile Devices Broswer</h1>
    <div class="searchBar">
      <!-- Input Box -->
      <v-input class="text-input" v-model="searchValue" size="large" icon="search" placeholder="PRESS ENTER TO SEARCH" @onPressEnter="search" @onPressIcon="search"/>
      <!-- Search Button -->
      <v-button size='large' class="search-button" type="primary" icon="search" @click.native="search" :loading="inSearching">Search</v-button>
    </div>
    <!-- Detail Pages Container-->
    <v-modal
      v-model="visible"
      title="Detail"
      :footer="null"
      @onCancel="onCancel">

        <!-- DetailPage actul content in different module => DetailPage.vue for reusability-->
        <DetailPage :device="devices[choosenIndex]"/>
    </v-modal>

    <!-- Waring Message -->
    <div class="message">{{message}}</div>
    
    <!-- Device Display Cards in different module => DeviceCard.vue for reusability-->
    <DeviceCard v-for="(device, index) in currentPageDevices" :key=index :device=device class="diviceCards" @click.native='showDetail(index)'/>
    
    <!-- pagingnation -->
    <v-pagination simple class="pageination" v-bind:class="{afterSearch : afterSearchFunction}" :total="devices.length" :pageSize="pageSize" v-model="cpage" @onChange="onChange"></v-pagination>
  </div>
</template>

<script>
import fonoapi from 'fonoapi-nodejs';

// Device Card component
import DeviceCard from './DeviceCard';

// Detail Page component
import DetailPage from './DetailPage';

//set API token
fonoapi.token = "8ab6f92d7d6fb1d20a3f66b66e2ac1f45dcd7f197d5b3deb";

export default {
  name: 'app',
  data () {
    return {
      devices : [],
      afterSearch: false,
      searchValue : "",
      inSearching: false,
      message: "",
      visible: false,
      choosenIndex: 0,
      cpage: 1,
      pageSize: 9
    }
  },
  methods:{
    search() {
      // Start Searching and set search button to loading mode.
      // When finished, set search button to normal mode and display content card and warning message if needed.
      // If success move search bar and header to top.
      // If error display warning message.
      this.inSearching = true;
      fonoapi.getDevices((queryString, data) => {
          this.inSearching = false;
          if(data.status === "error"){
            //emtpy data model
            this.devices = [];

            //move everything down
            this.afterSearch = false;

            //set message
            this.message = "Can't find any record";
          }else{
            //load data to model
            this.devices = data;

            //Move UI to top of page
            this.afterSearch = true;

            //empty message
            this.message = "";
          }
        }, this.searchValue);
    },

    onCancel(){
      //visible controls if or not the detail page is displayed.
      //this function will fire when click X on detail page.
      this.visible = false;
    },

    showDetail(index){
      //when device card got clicked, this function will fire and detail page will be displayed.
      this.choosenIndex = index;
      this.visible = true;
    },

    onChange(page) {
        console.log(page)
    }
  },
  computed:{
    afterSearchFunction(){
      //this function controls where the header and search bar located.
      if(this.searchValue == ""){
        //if search value is "", move everything down.
        this.devices = [];
        this.afterSearch = false;
      }
      if (this.afterSearch == false){
        //if have not done any searching, move everything down.
        return false;
      }
      return true;
    },

    currentPageDevices(){
      //for pagination
      return this.devices.slice((this.cpage - 1) * this.pageSize, (this.cpage - 1) * this.pageSize + this.pageSize);
    }
  },

  components:{
    //imported components
    DeviceCard,
    DetailPage
  }
}
</script>

<style>
#app{
  width: 90%;
  margin: 0 auto;
  padding: 10% 0px;
  transition: padding 0.7s;
  text-align: center;
}

#app.afterSearch{
  padding: 0px;
  transition: padding 0.7s;
}

#app h1{
  text-align: center;
  font-weight: lighter;
  color: #000;
  font-size: 60px;
  transition: margin 0.7s;
}

#app .searchBar{
  width: 70%;
  margin: 40px auto 10px;
  display: block;
}

#app.afterSearch .search-bar{
  margin: 10px auto 10px;
  transition: margin 0.7s;
}

#app .searchBar .text-input{
  margin: 10px;
  display: inline-block;
  width: 75%;
}

#app .pageination{
  display: none;
  width: 136.84px;
  margin: auto;

}

#app.afterSearch .pageination{
  display: block;
}

#app .message{
  font-size: 20px;
  color: red;
  font-weight: bold;
}

#app .omit{
  display: none;
}



@media only screen and (max-width: 600px) {
  #app h1{
    font-size: 30px;
  }
} 


</style>
