/*vue-router 안쓰고 vue로만 직접 라우팅 하기*/

import Vue from 'vue' /*var express = require('express');*/
import App from './App.vue'

const Login = { template: '<div>Login Page(direct)</div>' }
const NotFound = { template: '<div>Page not found</div>' }

const Login = { template: '<div>Login Page</div>' }

const routes = { 
    '/': App,
    '/login': Login
}

new Vue({
    el: '#app',    
    computed: {
        VueComponent(){
            return routes[window.location.pathname] ||  // or은 만약 앞에께 안되면 뒤에께 실행된다.
                {template: '<div>Page not found</div>'}
        }
    },
    render(h) {
        return h(this.Vuecomponent)
    }
        
})