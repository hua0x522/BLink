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
                    <v-select :items="industries[content.label[0]]" label="选择行业" v-model="content.label[1]" outlined></v-select>
                  </v-col>
                  <v-col>
                    <v-select :items="occupations[content.label[1]]" label="选择岗位" v-model="content.label[2]" outlined></v-select>
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
      <v-img height="400" src="../../img/img1.jpg"></v-img>
      <v-dialog v-model="showInfo" max-width="400px">
              <v-card>
                <v-card-text>
                  <h1>{{applicants.filter(item => item.position_id == contents[index_].id).length!=0?
                  applicants.filter(item => item.position_id == contents[index_].id)[lookInfo].name:""}}</h1>
                  <h2>教育背景</h2>
                  <p>{{applicants.filter(item => item.position_id == contents[index_].id).length!=0?
                  applicants.filter(item => item.position_id == contents[index_].id)[lookInfo].edu_background:""}}</p>
                  <h2>个人陈述</h2>
                  <p>{{applicants.filter(item => item.position_id == contents[index_].id).length!=0?
                  applicants.filter(item => item.position_id == contents[index_].id)[lookInfo].per_statement:""}}</p>
                  <h2>项目经历</h2>
                  <p>{{applicants.filter(item => item.position_id == contents[index_].id).length!=0?
                  applicants.filter(item => item.position_id == contents[index_].id)[lookInfo].experience:""}}</p>
                </v-card-text>
                <v-card-actions class="d-flex align-center justify-center">
                  <v-btn class="primary" @click="pass(applicants.filter(item => item.position_id == contents[index_].id))">通过</v-btn>
                  <v-btn class="error" @click="reject(applicants.filter(item => item.position_id == contents[index_].id))">不通过</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

      <v-expansion-panels>

        <v-expansion-panel v-for="(content, i) in contents" :key="i">
          <v-expansion-panel-header>
            <h2>{{ content.label[2] }}</h2>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <p>申请人：</p>
            <v-chip class="accent ml-4 white--text" v-for="(applicant, j) in applicants.filter(item => item.position_id == contents[i].id)" 
               :key="j" @click="look(i,j)"> {{ applicant.name }}
            </v-chip>
            <v-btn class="error" @click="del(i)">
              删除岗位
            </v-btn>

            

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
      showInfo:false,
      contents:[],
      content: {
        description:"",
        demanding:"",
        city:"",
        salary:"",
        label: ["","",""]
      },
      domains: ['IT科技','文化传媒','金融财务'],
          industries: {'IT科技':['计算机','电子信息','网络安全'],'文化传媒':['影视','新闻媒体','网络文化'],
          '金融财务':['期货','投行','券商']},
          occupations: {'计算机':['软件工程师','算法工程师'],'电子信息':['芯片工程师','架构师'],'网络安全':['网络安全工程师','算法工程师'],
          '影视':['文化总监','摄影师'],'新闻媒体':['总编辑','记者'],'网络文化':['网络作家','运营总监'],
          '期货':['风险管理','算法工程师'],'投行':['投资银行部','资产管理'],'券商':['量化交易员','技术总监'],
          },
      cities: ["北京市","上海市","深圳市","香港市"],
      salaries: ["3k以下", "3k-5k", "5k-8k", "8k-10k", "10k以上"],
      applicants:[],
      index_:0
    }
  },
  methods: {
    submit() {
      this.writeInfo = !this.writeInfo;
      let clone = Object.assign({}, this.content);
      this.contents.push(clone);
      this.submit_serve(clone);
      this.content.city = ""; 
      this.content.demanding = ""; 
      this.content.description = ""; 
      this.content.label = ["","",""]; 
      this.content.salary = ""; 
    },
    look(i,j) {
      this.lookInfo = j;
      this.index_=i;
      this.showInfo=true;
    },
    del(i){
      let formData={};
      formData['id']=this.contents[i].id;
      this.$axios({
        method: "get" /* 指明请求方式，可以是 get 或 post */,
        url: "/DeletePosition/" /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */,
        params: formData,
      })
        .then((res) => {
          if(res.data['success']==true){
            this.contents.splice(i,1);
            alert("岗位删除成功！");
          }
        })
    },
    submit_serve(clone){
      let formData={};
      formData["id"]= this.$store.state.user.username.concat("-").concat(clone.label[2]);
      formData["name"]=clone.label[2];
      formData["posPublisher_id"]=this.$store.state.user.username;
      formData["description"]=clone.description;
      formData["demanding"]=clone.demanding;
      formData["salary"]=clone.salary;
      formData["place"]=clone.city;
      formData["label1"]=clone.label[0];
      formData["label2"]=clone.label[1];
      formData["label3"]=clone.label[2];
      console.log(formData)
      this.$axios({
        method: "get" /* 指明请求方式，可以是 get 或 post */,
        url: "/CreatePosition/" /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */,
        params: formData,
      })
        .then((res) => {
          console.log(res);
          alert("创建成功！");
        })
    },
    showPos(){
      let formData={};
      formData["posPublisher_id"]= this.$store.state.user.username;
      this.$axios({
        method: "get" /* 指明请求方式，可以是 get 或 post */,
        url: "/SearchMySendPosition/" /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */,
        params: formData,
      })
        .then((res1) => {
          this.contents=res1.data;
          this.showInfo=false;
          let f={};
          f['receiver']=this.$store.state.user.username;
          this.$axios({
          method: "get" /* 指明请求方式，可以是 get 或 post */,
          url: "/LookReceiveResume/" /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */,
          params: f,
        })
        .then((res2) => {
          this.applicants=res2.data.filter(x=> x['status']=="0");
          console.log(this.applicants);
        })
        })
    },
    pass(arr){
      console.log(arr);
      console.log(this.lookInfo);
      
      this.showInfo=false;
      let index=this.applicants.findIndex(x=>x.id==arr[this.lookInfo].id);
      console.log(this.applicants);
      console.log(index);
      let formData={};
          formData['status']="1";
          formData['id']=this.applicants[index].id;
          this.$axios({
          method: "get" /* 指明请求方式，可以是 get 或 post */,
          url: "/ChangeResumeStatus/" /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */,
          params: formData,
        })
        .then((res) => {
          this.applicants.splice(index,1);
          if(res.data['success']==true){
            alert("通过简历！");
          }
        })
    },
    reject(arr){
      this.showInfo=false;
      let index=this.applicants.findIndex(x=>x.id==arr[this.lookInfo].id);
      let formData={};
          formData['status']="2";
          formData['id']=this.applicants[index].id;
          this.$axios({
          method: "get" /* 指明请求方式，可以是 get 或 post */,
          url: "/ChangeResumeStatus/" /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */,
          params: formData,
        })
        .then((res) => {
          this.applicants.splice(index,1);
          if(res.data['success']==true){
            alert("拒绝简历！");
          }
        })
    }
  },
  mounted(){
    this.showPos();
  }
}
</script>

<style></style>
