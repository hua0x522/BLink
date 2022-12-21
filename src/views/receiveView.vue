<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn class="primary" @click="(writeInfo = !writeInfo)">发布岗位</v-btn>
        <v-dialog v-model="writeInfo" max-width="600px">
          <v-card>
            <v-row>
              <v-col class="ml-8 mr-8 mb-4 mt-4">
                <v-textarea label="岗位描述" outlined v-model="content.description"></v-textarea>
                <v-textarea label="岗位要求" outlined v-model="content.demanding"></v-textarea>

                <v-row>
                  <v-col>
                    <v-select :items="domains" label="选择领域" v-model="content.label[0]" outlined></v-select>
                  </v-col>
                  <v-col>
                    <v-select :items="industries" label="选择行业" v-model="content.label[1]" outlined></v-select>
                  </v-col>
                  <v-col>
                    <v-select :items="occupations" label="选择岗位" v-model="content.label[2]" outlined></v-select>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <v-select :items="cities" label="选择城市" v-model="content.city" outlined></v-select>
                  </v-col>
                  <v-col>
                    <v-select :items="salaries" label="选择薪资" v-model="content.salary" outlined></v-select>
                  </v-col>
                </v-row>

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

    <v-card class="mt-8">
      <v-img height="500" src="../../img/img1.jpg"></v-img>
      <v-expansion-panels>
        <v-expansion-panel v-for="(content, i) in contents" :key="i">
          <v-expansion-panel-header>
            <h2>{{ content.label[2] }}</h2>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <p>申请人：</p>
            <v-chip class="accent ml-4 white--text" v-for="(applicant, i) in applicants" :key="i" @click="look(i)">
              {{ applicant }}
            </v-chip>

            <v-dialog v-model="lookInfo" max-width="500px">
              <v-card>
                <v-card-text>
                </v-card-text>
                <v-card-actions class="d-flex align-center justify-center">
                  <v-btn class="error" @click="close">关闭</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      writeInfo: 0,
      lookInfo: 0,
      contents:[],
      content: {
        description:"",
        demanding:"",
        city:"",
        salary:"",
        label: ["","",""]
      },
      domains: ['IT科技','文化传媒','金融财务'],
      industries: ['计算机','电子信息','网络安全'],
      occupations: ['软件工程师','算法工程师'],
      cities: ["北京市","上海市"],
      salaries: ["3k以下", "3k-5k", "5k-8k", "8k-10k", "10k以上"],
      applicants:["Alice", "Bob", "wxz"]
    }
  },
  methods: {
    submit() {
      this.writeInfo = !this.writeInfo;
      let clone = Object.assign({}, this.content);
      this.contents.push(clone);
      // this.submit_serve();
      this.content.city = ""; 
      this.content.demanding = ""; 
      this.content.description = ""; 
      this.content.label = ["","",""]; 
      this.content.salary = ""; 
    },
    look(i) {
      this.lookInfo = i + 1
    },
    close() {
      this.lookInfo = 0
    }
  }
}
</script>

<style></style>