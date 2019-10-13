<template>
    <div class="map">
        <div class="google-map" id="map"></div>
    </div>
</template>

<script>
import firebase from "firebase";

export default {
    name: "GoogleMap",
    data() {
        return {
            lat: 50,
            lng: 17
        };
    },
    methods: {
        renderMap() {
            const map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: this.lat, lng: this.lng },
                zoom: 5,
                maxZoom: 15,
                minZoom: 3,
                streetViewControl: false
            });
        }
    },
    mounted() {
        console.log(firebase.auth().currentUser);
        this.renderMap();
    }
};
</script>

<style scoped>
.google-map {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: #fff;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}
</style>