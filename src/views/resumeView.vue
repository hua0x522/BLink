<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn class="primary" @click="(writeInfo = !writeInfo)">创建新简历</v-btn>
        <v-dialog v-model="writeInfo" max-width="600px">
          <v-card>
            <v-row>
              <v-col class="ml-8 mr-8 mb-4 mt-4">
                <v-text-field label="简历名称" v-model="content.name" outlined></v-text-field>
                <v-textarea label="教育背景" outlined v-model="content.edu"></v-textarea>
                <v-textarea label="个人陈述" outlined v-model="content.state"></v-textarea>
                <v-textarea label="项目经历" outlined v-model="content.experience"></v-textarea>
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
        <v-card height="300px">
          <v-img max-height="180px" :src="getPhoto(i)" :contain="true"></v-img>
          <v-card-text class="d-flex align-center justify-center">
            <h1>{{content.name}}</h1>
          </v-card-text>
          <v-card-actions class="d-flex align-center justify-center">
            <v-btn class="accent" @click="look(i)">浏览</v-btn>
            <v-btn class="error" @click="remove(i)">删除</v-btn>
          </v-card-actions>
        </v-card>
        <v-dialog v-model="showInfo" max-width="500px">
          <v-card>
            <v-card-text>
              <h1>{{contents[lookInfo].name}}</h1>
              <h2>教育背景</h2>
              <p>{{contents[lookInfo].edu}}</p>
              <h2>个人陈述</h2>
              <p>{{contents[lookInfo].state}}</p>
              <h2>项目经历</h2>
              <p>{{contents[lookInfo].experience}}</p>
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
        name: "",
        edu: "",
        state: "",
        experience: "",
        status: 2
      },
      contents: [],
      lookInfo: 0,
      showInfo: false
    }
  },
  methods: {
    submit() {
      this.writeInfo = !this.writeInfo;
      let clone = Object.assign({}, this.content);
      this.contents.push(clone);
      this.submit_serve();
      this.content.name = "";
      this.content.experience = "";
      this.content.edu = "";
      this.content.state = "";    
    },
    getPhoto(i) {
      if (this.contents[i].status == 0) return require("../../img/reject.jpg");
      else if (this.contents[i].status == 1) return require("../../img/pass.jpg");
      else if (this.contents[i].status == 2) return require("../../img/waiting.jpg");
    },
    look(i) {
      this.lookInfo = i
      this.showInfo = true
    },
    close() {
      this.showInfo = false 
    },
    remove(i) {
      this.remove_serve(i);
      this.contents.splice(i, 1);
    },
    
    submit_serve() {
      //TODO
    },
    remove_serve(i) {
      i;
      //TODO
    },
    getMyResume() {
      //TODO
    }
  },
  mounted() {
    this.getMyResume();
  }
}
</script>