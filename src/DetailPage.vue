<template>
    <div class="detail-page">
        <!-- device name -->
        <h2>{{device.DeviceName}}</h2>

        <!-- display tags -->
        <v-tag class='tag' v-for="(tag, index) in tags" :key="tag" :color='color(index)'>{{tag}}</v-tag>
        <br>

        <!-- display non-boolean information about device -->
        <span v-for="(value, key) in attributes" :key=key>
            {{key}} :{{value}}
        </span>

    </div>
</template>

<script>
export default {
    data(){
        return{    
        }
    },

    //accept device info as props
    props: ['device'],

    computed:{
        tags(){
            // find all boolean information and display them in form of tags.
            let outcome = [];
            for (let key in this.device){
                if (this.device[key] === 'Yes'){
                    //trim "_"
                    outcome.push(key.replace(/_/g, ' ').trim());
                }
            }
            return outcome;
        },

        attributes(){
            //find all non-boolean information and display them in form of table.
            let outcome = {};
            for (let key in this.device){
                if(this.device[key] !== 'Yes' && this.device[key] !== 'No'){
                    outcome[key] = this.device[key];
                }
            }
            return outcome;
        }
    },
    methods:{
        color(index){
            //colorful tags
            let preset = ['red', 'blue', 'orange', 'pink', 'purple', 'cyan', 'green'];
            return preset[index % preset.length];
        }
    }
}
</script>

<style>
    .detail-page span{
        display: block;
        font-weight: bold;
    }

    .detail-page .tag{
        cursor: default;
        margin: 3px;
    }
    

</style>


