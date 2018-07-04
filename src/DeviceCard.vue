<template>
        <v-card class="device-card" :title="device.DeviceName">
            <span>Brand: {{device.Brand}}</span>
            <span>Technology: {{device.technology}}</span>
            <span>Weight: {{device.weight}}</span>
            <span>Resolution: {{device.resolution}}</span>
        </v-card>

</template>

<script>
export default {
    data () {
        return{
        }
    },
    //accept device as props
    props:['device']
}
</script>
<style>
    .device-card {
        width: 27.5%;
        display: inline-block;
        margin: 10px;
        height: 150px;
        min-width: 300px;
        cursor: pointer;
    }
    
    .device-card span{
        display: block;
        margin: 0px;
    }

    .device-card .ant-card-body{
        margin: 5px;
        padding: 5px;
        text-align: left;
        font-weight: bold;
        font-size: 10px;
    }
</style>



