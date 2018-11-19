<template>
    <div>
        产品详情页
    </div>    
</template>
<script>
export default {
    name:'pro_details',
    created(){
    this.$store.commit('changeNavOnoff',false);//是否显示底部路由
    //console.log(this.$store.state.navOnoff)
    }
}
</script>
<style scoped>
    /*@import '../../assets/css/pro_list.css';*/
</style>