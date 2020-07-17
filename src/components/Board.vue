<template>
	<div>
		Board
		<div v-if="loading">loading board...</div>
		<div v-else>
			<div>bid: {{bid}}</div>
			<router-link :to="`/b/${bid}/c/1`">Card 1</router-link>
			<!--`은 자동으로 변수 구분해줌-->
			<router-link :to="`/b/${bid}/c/2`">Card 2</router-link>
			<!--`은 자동으로 변수 구분해줌-->
		</div><!--v-else-->
		<hr>
		<router-view></router-view>
		<!--Card.vue-->
	</div>
</template>

<script>
	export default {
		/*data훅 created훅*/
		data() {
			return {
				bid: 0,
			    loading: false
			}
		},
		created() {
			this.fetchData()
			 /*b/정수 값. index라우터에서 미들웨어 만들어줘서 가능*/
			/*동적라우트 매칭 4분50초*/
		},
		methods: {
			fetchData() {
				this.loading = true
				setTimeout(() => {
					this.bid = this.$route.params.bid
					this.loading = false
				}, 500)
			}
		}
	}

</script>

<style>

</style>
