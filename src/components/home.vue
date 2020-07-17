<template>
    <div>
        Home
        <div>
            Board List:
            <div v-if="loading">Loading...</div>
            <div v-else>Api result: 
				<pre>{{boards}}</pre>				         
            </div>
            <ul>
                <li>
                    <router-link to="/b/1">Board 1</router-link>
                </li>
                <li>
                    <router-link to="/b/2">Board 2</router-link>
                </li>
            </ul>
        </div>
    </div>    
</template>

<script>
import axios from 'axios'	

export default{
    data() {
		return { /*상태변수*/
			loading: false,
			boards: [],
		}
	},
	created() {
		this.fetchData()
	},
	methods: {
		fetchData() { /*데이터를 불러오면 ~*/
			this.loading = true
			/*axios는 http 라이브러리*/
			axios.get('http://localhost:3000/boards')
			.then(res => {
				this.boards = res.data
			})
			.catch(res => {
				this.$router.replace('/login') /*router의 replace함수로 경로 로그인 화면으로 이동시키기 (redirect)*/
			})
			.finally(() => {
				this.loading = false
			})			
		}
	}
}
</script>

<style>

</style>