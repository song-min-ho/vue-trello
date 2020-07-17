<template>
    <div>
        Card
        <div v-if="loading">loading card ...</div>
        <div v-else>cid: {{cid}}</div>
    </div>
</template>

<script>
export default{
    data() {
        return{
            cid: 0,
            loading: false
        }
    },
    watch:{ /* 감시자 설정. 카드 바꿨을때 자동으로 화면갱신 원래는 주소만 바뀜*/
        '$route': {
            handler: 'fetchData',
            immediate: true
        }
    },    
    methods: {
        fetchData() {
            this.loading = true
            setTimeout(() => {
                this.cid = this.$route.params.cid /*카드 정수값 갱신*/
                this.loading = false
            }, 500)
        }
    }
}
</script>

<style>

</style>