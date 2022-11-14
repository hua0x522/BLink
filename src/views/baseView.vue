<template>
    <v-app>
      <v-app-bar
        absolute
        color="white"
      >  
      <v-img src="../../img/logo1.png" max-height="75" max-width="150"></v-img>
      
      <v-tabs right>
          <v-tab to="/home">首页</v-tab>
          <v-tab to="/job">岗位</v-tab>
          <v-tab to="/find">发现</v-tab>
          <v-tab to="/message">消息</v-tab>
          <v-tab to="/stat">后台数据</v-tab>
          <v-tab to="/me">个人中心</v-tab>
      </v-tabs>
      </v-app-bar>
      
      <router-view></router-view>
    </v-app>
      
  </template>
  
  <script>
  
  export default {
  
  }
  
  </script>