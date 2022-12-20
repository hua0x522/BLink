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
          <v-dialog v-model="lookInfo" max-width="500px">
            <v-card>
              <v-card-text>
                <h3>{{(lookInfo > 0) ? contents[lookInfo-1].title: ""}}</h3>
                <p>{{(lookInfo > 0) ? contents[lookInfo-1].text: ""}}</p>
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
        lookInfo: 0
      }
    },
    methods: {
      submit() {
        this.writeInfo = !this.writeInfo;
        let clone = Object.assign({}, this.content);
        this.contents.push(clone);
        this.content.text = "";
        this.content.title = "";  
      },
      look(i) {
        this.lookInfo = i + 1
      },
      close() {
        this.lookInfo = 0
      },
      remove(i) {
        this.contents.splice(i, 1)
      },
      submit_serve() {
        //TODO
      },
      remove_serve(i) {
        i;
        //TODO
      },
      getIssue() {
        //TODO
      }
    },
    mounted() {
      this.getIssue()
    }
  }
  </script>