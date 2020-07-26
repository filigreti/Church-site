import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/styles/index.css";
import * as firebase from "firebase";
import VueFirebase from "vue-firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBgeAZZwlmlrSgZKNdyf6KSnaQ9CEU69Yk",
    authDomain: "godscaremissions-846e0.firebaseapp.com",
    databaseURL: "https://godscaremissions-846e0.firebaseio.com",
    projectId: "godscaremissions-846e0",
    storageBucket: "godscaremissions-846e0.appspot.com",
    messagingSenderId: "119113693494",
    appId: "1:119113693494:web:9d3e8927af1a417d0f1b97",
    measurementId: "G-Q191L180L0",
};

Vue.use(VueFirebase, { firebase: firebase, config: firebaseConfig });

Vue.config.productionTip = false;

Vue.filter("convertDate", function(value) {
    if (!value) return "";
    value = value.split("-");
    return value[2];
});

Vue.filter("convertHour", function(value) {
    if (!value) return "";
    var ts = value;
    var H = +ts.substr(0, 2);
    var h = H % 12 || 12;
    h = h < 10 ? "0" + h : h;
    var ampm = H < 12 ? " AM" : " PM";
    ts = h + ts.substr(2, 3) + ampm;
    return ts;
});

Vue.filter("convertWeekend", function(value) {
    if (!value) return "";
    value = value.split("-");
    let weekend = new Date(value[0], value[1] - 1, value[2]).getDay();
    let week = ["Sunday", "Monday", "Tuesdat", "Wednesday", "Thursday", "Friday", "Saturday"];
    return week[weekend];
});

Vue.filter("convertMonth", function(value) {
    if (!value) return "";
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    value = value.split("-");
    let currentmonth = +value[1];
    return monthNames[currentmonth - 1];
});

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");