<template>
    <div class="detail-page">
        <h2>{{device.DeviceName}}</h2>
        
        <v-tag class='tag' v-for="(tag, index) in tags" :key="tag" :color='color(index)'>{{tag}}</v-tag>
        <br>
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
    props: ['device'],
    computed:{
        tags(){
            let outcome = [];
            for (let key in this.device){
                if (this.device[key] === 'Yes'){
                    outcome.push(key.replace(/_/g, ' ').trim());
                }
            }
            
            return outcome;
        },
        attributes(){
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


