 //相当于<script src="vue.js"></script>
//引入状态管理
import Vue from 'vue'; 
import Vuex from 'vuex';
Vue.use(Vuex);


var store = new Vuex.Store({
    state:{//存值,所有组件都可以改变这里的值
        navOnoff:true, //该状态控制是否显示底部导航&路由
    },
    mutations:{ //修改储存的值
        changeNavOnoff(state,bool){ //bool只能传布尔值
            state.navOnoff = bool;//bool=true显示底部导航 bool=false隐藏底部导航
        },
        
        

    }
});

export default store;
