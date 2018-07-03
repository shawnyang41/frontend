<template>
    <div class="detail-page">
        <h2>{{device.DeviceName}}</h2>
        <span v-for="(value, key) in device" :key=key>
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
    props: ['device']
}
</script>

<style>
    .detail-page span{
        display: block;
        font-weight: bold;
        
    }

</style>


