import Vue from 'vue' /*var express = require('express'); 기존 노드랑 조금 다름 */
import App from './App.vue'
import router from './router/index.js' /*index.js 생략가능*/

new Vue({
    el: '#app',     
    router,
    render: h => h({template: '<router-view></router-view>'})
})
