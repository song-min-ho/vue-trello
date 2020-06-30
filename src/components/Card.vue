<template>
    <div>
        Card
        <div>cid: {{cid}}</div>
    </div>
</template>

<script>
export default{
    data() {
        return{
            cid: 0
        }
    },
    watch:{ /*카드 바꿨을때 자동으로 화면갱신 원래는 주소만 바뀜*/
        '$route'(){
            this.cid = this.$route.params.cid
        }
    },
    created(){
        this.cid = this.$route.params.cid /*카드 정수값 갱신*/
    }    
}
</script>

<style>

</style>