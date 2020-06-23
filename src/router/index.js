/* VueRoute로 라우팅 */
import Vue from 'vue'
import VueRouter from 'vue-router' /*npm i vue-router --save*/
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Notfound from '../components/Notfound.vue'

Vue.use(VueRouter) /*미들웨어 (import하고 이거도 추가해줘야함)*/

/*
const Login = { template: '<div>Login Page</div>' }
const NotFound = { template: '<div>Page not found</div>' }
*/

const router = new VueRouter({
    mode: 'history', /*vue-router 사용하면 해시백 모드되는데 history 모드로 바꿔줌 한마디로 url에 # 안붙여도됨*/
    routes: [ /*행렬*/
        { path: '/', component: Home },
        { path: '/login', component: Login },
        { path: '*', component: Notfound } /* 위에 두 경로가 아니면 '*'이 열림 */
    ] 
})

export default router /*이러면 main.js에서 router import 가능*/