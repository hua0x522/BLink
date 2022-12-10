<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn class="primary" @click="(writeInfo = !writeInfo)">创建新简历</v-btn>
        <v-overlay :value="writeInfo">
          <v-card class="" width="800px">
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
        </v-overlay>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="(content, i) in contents" :key="i" cols="4">
        <v-card height="150px">
          <v-card-text class="d-flex align-center justify-center">
            <p class="text-h5 accent--text">{{content.name}}</p>
          </v-card-text>
          <v-card-actions class="d-flex align-center justify-center">
            <v-btn class="accent" @click="look(i)">浏览</v-btn>
            <v-btn class="error" @click="remove(i)">删除</v-btn>
          </v-card-actions>
        </v-card>
        <v-overlay :value="lookInfo">
          <v-card width="500px">
            <v-card-text>
              <h1>{{(lookInfo > 0) ? contents[lookInfo-1].name: ""}}</h1>
              <h2>教育背景</h2>
              <p>{{(lookInfo > 0) ? contents[lookInfo-1].edu: ""}}</p>
              <h2>个人陈述</h2>
              <p>{{(lookInfo > 0) ? contents[lookInfo-1].state: ""}}</p>
              <h2>项目经历</h2>
              <p>{{(lookInfo > 0) ? contents[lookInfo-1].experience: ""}}</p>
            </v-card-text>
            <v-card-actions class="d-flex align-center justify-center">
              <v-btn class="error" @click="close">关闭</v-btn>
            </v-card-actions>
          </v-card>
        </v-overlay>
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
        experience: ""
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
      this.content.name = "";
      this.content.experience = "";
      this.content.edu = "";
      this.content.state = "";    
    },
    look(i) {
      this.lookInfo = i + 1
    },
    close() {
      this.lookInfo = 0
    },
    remove(i) {
      this.contents.splice(i, 1)
    }
  }
}
</script>