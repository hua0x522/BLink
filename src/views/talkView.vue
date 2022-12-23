<template>
    <v-container>
      <v-row>
        <v-col>
          <v-btn class="primary" @click="(writeInfo = !writeInfo)">发布帖子</v-btn>
          <v-dialog v-model="writeInfo" max-width="600px">
            <v-card>
              <v-row>
                <v-col class="ml-8 mr-8 mb-4 mt-4">
                  <v-text-field label="标题" v-model="content.title" outlined></v-text-field>
                  <v-textarea label="内容" outlined v-model="content.text" height="400px"></v-textarea>
                  <v-row>
                    <v-spacer></v-spacer>
                    <v-btn class="primary" @click="submit">提交</v-btn>
                    <v-spacer></v-spacer>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
  
      <v-row>
        <v-col v-for="(content, i) in contents" :key="i" cols="4">
          <v-card height="150px">
            <v-card-text class="d-flex align-center justify-center">
              <p class="text-h5 accent--text">{{content.title}}</p>
            </v-card-text>
            <v-card-actions class="d-flex align-center justify-center">
              <v-btn class="accent" @click="look(i)">浏览</v-btn>
              <v-btn class="error" @click="remove(i)">删除</v-btn>
            </v-card-actions>
          </v-card>
          <v-dialog v-model="showInfo" max-width="500px">
            <v-card>
              <v-card-text>
                <h3>{{ contents[lookInfo].title }}</h3>
                <p>{{ contents[lookInfo].text }}</p>
              </v-card-text>
              <v-card-actions class="d-flex align-center justify-center">
                <v-btn class="error" @click="close">关闭</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        writeInfo: false,
        content: {
          title: "",
          text: ""
        },
        contents: [],
        lookInfo: 0,
        showInfo:false
      }
    },
    methods: {
      submit() {
        if(this.content.title==""){
            alert("帖子标题不能为空！");
            return;
          }
        this.writeInfo = !this.writeInfo;
        let clone = Object.assign({}, this.content);
        this.submit_serve(clone);
        this.content.text = "";
        this.content.title = "";  
      },
      look(i) {
        this.lookInfo = i;
        this.showInfo = true;
      },
      close() {
        this.showInfo = false
      },
      remove(i) {
        if (this.$store.state.user.type=="3") {
          let formData={};
          formData["id"]= this.contents[i].title;
          this.contents.splice(i, 1);
          this.$axios({
            method: "get" /* 指明请求方式，可以是 get 或 post */,
            url: "/DeletePost/" /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */,
            params: formData,
          })
          .then((res) => {
            if(res.data['success']==true){
              alert("帖子删除成功！");
          }})
        }else{
          alert("您没有删除权限！");
        }     
      },
      submit_serve(clone){
        let formData={};
          formData["id"]=clone.title;
          formData["title"]=clone.title;
          formData['content']=clone.text;
          this.$axios({
            method: "get" /* 指明请求方式，可以是 get 或 post */,
            url: "/SendPost/" /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */,
            params: formData,
          })
          .then((res) => {
            console.log(res);
            if(res.data['success']==1){
              this.contents.push(clone);
              alert("帖子发布成功！");
            }else{
              alert("标题已存在！");
            }
          })
        //TODO
      },
      getIssue() {
        this.$axios({
            method: "get" /* 指明请求方式，可以是 get 或 post */,
            url: "/LookPost/" /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */,
            params: {},
          })
          .then((res) => {
            this.contents=res.data;
          })
        //TODO
      }
    },
    mounted() {
      this.getIssue()
    }
  }
  </script>