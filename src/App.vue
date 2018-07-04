<template>
  <div v-bind:class="{afterSearch : afterSearchFunction}" id="app">
    <h1> Mobile Devices Broswer</h1>
    <div class="searchBar">
      <v-input class="text-input" v-model="searchValue" size="large" icon="search" placeholder="PRESS ENTER TO SEARCH" @onPressEnter="search" @onPressIcon="search"/>
      <v-button size='large' class="search-button" type="primary" icon="search" @click.native="search" :loading="inSearching">Search</v-button>
    </div>
    <v-modal
      v-model="visible"
      title="Detail"
      :footer="null"
      @onCancel="onCancel">
        <DetailPage :device="devices[choosenIndex]"/>
    </v-modal>
    <div class="message">{{message}}</div>
    <DeviceCard v-for="(device, index) in devices" :key=index :device=device class="diviceCards" @click.native='showDetail(index)'/>
    <v-pagination :total="50" v-model="model" @onChange="onChange"></v-pagination>
  </div>
</template>

<script>
import fonoapi from 'fonoapi-nodejs';
import DeviceCard from './DeviceCard';
import DetailPage from './DetailPage';
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
    }
  },
  methods:{
    search() {
      this.inSearching = true;
      fonoapi.getDevices((queryString, data) => {
          this.inSearching = false;
          if(data.status === "error"){
            this.devices = [];
            this.afterSearch = false;
            this.message = "Can't find any record";
          }else{
            this.devices = data;
            this.afterSearch = true;
            this.message = "";
          }
        }, this.searchValue);
    },
    onCancel(){
      this.visible = false;
    },
    showDetail(index){
      console.log(index);
      this.choosenIndex = index;
      this.visible = true;
    }
  },
  computed:{
    afterSearchFunction(){
      if(this.searchValue == ""){
        this.devices = [];
        this.afterSearch = false;
      }
      if (this.afterSearch == false || this.searchValue == ""){
        return false;
      }
      return true;
    }
  },

  components:{
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
  height: 100%;
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

#app searchBar .search-button{
  width: 25%;
}

#app .message{
  font-size: 20px;
  color: red;
  font-weight: bold;
}



#app .omit{
  display: none;
}


</style>
