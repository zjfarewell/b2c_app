<template>
    <div>
        支付失败页面
    </div>    
</template>
<script>
export default {
    name:'pay_failure',
    created(){
    this.$store.commit('changeNavOnoff',false);//是否显示底部路由
    console.log(this.$store.state.navOnoff)
    },

}
</script>
<style scoped>
    /*@import '../../assets/css/pro_list.css';*/
</style>