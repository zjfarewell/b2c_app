import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

//引入底部导航路由
import home from '../components/routerNav/home.vue';
import pro_list from '../components/routerNav/pro_list.vue';
import shop_cart from '../components/routerNav/shop_cart.vue';
import user from '../components/routerNav/user.vue';

//引入产品详情页 
import pro_details from '../components/pro_details.vue';

//支付相关页面
import pay from '../components/pay.vue';
import pay_sucess from '../components/pay_sucess.vue';
import pay_failure from '../components/pay_failure.vue';


var router = new VueRouter({
    routes:[{
    //底部导航&路由
        path:'/home',
        component:home
    },{
        path:'/pro_list',
        component:pro_list
    },{
        path:'/shop_cart',
        component:shop_cart
    },{
        path:'/user',
        component:user
    },{
        path:'*',
        redirect:'/home'
    },{
        //跳转到产品详情页
        path:'/pro_details',
        component:pro_details
    },{ 
            //跳转到支付成功页面
            path:'/pay_sucess',
            component:pay_sucess
    },{
        //支付相关页面
        path:'/pay',
        component:pay
    },{
       //支付失败页面
       path:'/pay_failure',
       component:pay_failure 
    }]
});

export default router;