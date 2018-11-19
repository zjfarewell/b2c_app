<template>
    <div>
       <div class="banner">
            <swiper :options="swiperOption">
                <swiper-slide><img src="../../assets/img/banner1.png" alt=""/></swiper-slide>
                <swiper-slide><img src="../../assets/img/banner2.png" alt=""/></swiper-slide>
                <swiper-slide><img src="../../assets/img/banner3.png" alt=""/></swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div> 
        <div>
            {{obj}}
        </div>
        <ul class="list-hot">
            <li v-for="(item,index) in arr" :key="index" @click="getHashDetails">
            <img :src="item.img"/>
            <div>{{item.name}}</div>
            <div>{{item.price}}</div>
        </li>
        </ul>
    </div>    
</template>
<script>
//引入轮播图插件
import Vue from 'vue';
import Swiper from 'vue-awesome-swiper';
Vue.use(Swiper);
import 'swiper/dist/css/swiper.css';


export default {
    name:'home',
    data(){
        return{
            swiperOption:{
                direction:'horizontal',
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true
                },
                loop:true,
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                effect : 'coverflow',
            },
            obj:{},
            arr:[{
                id:1,
                img:'./static/img/hot1.png',
                name:'胡佳佳',
                price:250
            },{id:2,
                img:'./static/img/hot2.png',
                name:'胡佳佳',
                price:250
            },{id:3,
                img:'./static/img/hot3.png',
                name:'胡佳佳',
                price:250
            },{id:4,
                img:'./static/img/hot4.png',
                name:'胡佳佳',
                price:250
            },{id:5,
                img:'./static/img/hot5.png',
                name:'胡佳佳',
                price:250
            },]
        }
    },
    methods:{
        getHashDetails(){
            this.$router.push("/pro_details");
        }
    },
    created(){ 
        this.$store.commit('changeNavOnoff',true);//是否显示底部路由

        //该函数下拿ajax数据
        this.$axios('./static/php/home.php').then(res=>{
            //console.log(res.data)
            //var str = res.data;
            //console.log(str);
            //this.arr = JSON.parse(str);
            //console.log(this.arr);
		})
    }
}
</script>
<style scoped>
    @import '../../assets/css/home.css';
</style>
