<template>
    <div>

    </div>
</template>

<script>
export default {
    name:'pay',
    created(){
        //使用状态管理改变  是否显示底部导航&路由
        this.$store.commit('changeNavOnoff',false);//是否显示底部路由
    }
}
</script>

<style scoped>

</style>

