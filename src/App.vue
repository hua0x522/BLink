<template>
  <v-app id="app">
    <router-view />
  </v-app>
</template>

<script>
export default {
  components: {

  },
  name:'app',
    //每个页面都要执行的
    created(){
      //在页面加载时读取localStorage里的状态信息
      if(localStorage.getItem('storeState')){
        //replaceState，替换store的根状态
        this.$store.replaceState(Object.assign({},this.$store.state,JSON.parse(localStorage.getItem('storeState'))))
      }
      //在页面刷新前将vuex里的信息保存到localStorage里（只有当登录时）
      window.addEventListener('beforeunload',()=>{
        if(this.$store.state.islogin)
          localStorage.setItem('storeState',JSON.stringify(this.$store.state));
      })
      console.log('storeState',localStorage.getItem('storeState'));
    },
    provide (){
      return {
        reload:this.reload
      }
    },
    data (){
      return{
        isRouterAlive:true
      }
    },
    methods :{
      reload(){
        this.isRouterAlive =false
        this.$nextTick(function(){
          this.isRouterAlive=true
        })
      }
    }
};
</script>
