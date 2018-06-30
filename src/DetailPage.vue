<template>
    <div class="detail-page">
        <h2>{{device.DeviceName}}</h2>
        <span>Brand: {{device.Brand}}</span>
        <span>Technology: {{device.technology}}</span>
        <span>2G Bands: {{device._2g_bands}}</span>
        <span>edge: {{device.edge}}</span>
        <span>announced: {{device.announced}}</span>
        <span>dimensions: {{device.gprdimensionss}}</span>
        <span>weight: {{device.weight}}</span>
        <span>sim: {{device.sim}}</span>
        <span>type : {{device.type}}</span>
        <span>size: {{device.size}}</span>
        <span>resolution: {{device.resolution}}</span>
        <span>card_slot: {{device.card_slot}}</span>
        <span>phonebook: {{device.phonebook}}</span>
        <span>call_records: {{device.call_records}}</span>
        <span>camera_c: {{device.camera_c}}</span>
        <span>alert_types: {{device.alert_types}}</span>
        <span>loudspeaker_: {{device.loudspeaker_}}</span>
        <span>3_5mm_jack_: {{device._3_5mm_jack_}}</span>
        <span>wlan : {{device.wlan}}</span>
        <span>bluetooth: {{device.bluetooth}}</span>
        <span>gps: {{device.gps}}</span>
        <span>infrared_port: {{device.infrared_port}}</span>
        <span>radio: {{device.radio}}</span>
        <span>usb: {{device.usb}}</span>
        <span>messaging: {{device.messaging}}</span>
        <span>browser: {{device.alert_types}}</span>
        <span>clock: {{device.loudspeaker_}}</span>
        <span>alarm: {{device._3_5mm_jack_}}</span>
        <span>games : {{device.wlan}}</span>
        <span>languages: {{device.bluetooth}}</span>
        <span>java: {{device.gps}}</span>
        <span>features_c: {{device.infrared_port}}</span>
        <span>battery_c : {{device.radio}}</span>
        <span>stand_by : {{device.usb}}</span>
        <span>talk_time : {{device.messaging}}</span>
        <span>colors (available colors): {{device.messaging}}</span>
        <span>sensors: {{device.messaging}}</span>
        <span>cpu: {{device.messaging}}</span>
        <span>internal (memory + RAM): {{device.messaging}}</span>
        <span>os: {{device.messaging}}</span>
        <span>body_c (body features separated by "-"): {{device.messaging}}</span>
        <span>keyboard: {{device.messaging}}</span>
        <span>primary_ (primary camera): {{device.messaging}}</span>
        <span>video: {{device.messaging}}</span>
        <span>secondary (secondary camera): {{device.messaging}}</span>
        <span>3g_bands: {{device.messaging}}</span>
        <span>speed: {{device.messaging}}</span>
        <span>network_c: {{device.messaging}}</span>
        <span>chipset: {{device.messaging}}</span>
        <span>features (additional features separated by "-"): {{device.messaging}}</span>
        <span>music_play: {{device.messaging}}</span>
        <span>protection: {{device.messaging}}</span>
        <span>gpu: {{device.messaging}}</span>
        <span>multitouch: {{device.messaging}}</span>
        <span>loudspeaker: {{device.messaging}}</span>
        <span>audio_quality: {{device.messaging}}</span>
        <span>nfc: {{device.messaging}}</span>
        <span>camera: {{device.messaging}}</span>
        <span>display: {{device.messaging}}</span>
        <span>battery_life: {{device.messaging}}</span>
        <span>4g_bands: {{device.messaging}}</span>
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


