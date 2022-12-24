<template>
  <v-app>
    <v-row>
      <v-col>
        <v-row>
          <v-col :cols="2">
            <v-select
              rounded
              dense
              outlined
              :prepend-inner-icon="icon"
              :items="domains"
              v-model="label[0]"
              label="领域"
            ></v-select>
          </v-col>

          <v-col :cols="2">
            <v-select
              rounded
              dense
              outlined
              :prepend-inner-icon="icon"
              :items="industries[label[0]]"
              v-model="label[1]"
              v-show="label[0]"
              label="行业"
            ></v-select>
          </v-col>

          <v-col :cols="2">
            <v-select
              rounded
              dense
              outlined
              :prepend-inner-icon="icon"
              :items="occupations[label[1]]"
              v-model="label[2]"
              v-show="label[1]"
              label="岗位"
            ></v-select>
          </v-col>

          <v-spacer></v-spacer>

          <v-col :cols="2">
            <v-select
              rounded
              dense
              outlined
              :prepend-inner-icon="icon"
              :items="cities"
              v-model="city"
              label="城市"
            ></v-select>
          </v-col>

          <v-col :cols="2">
            <v-select
              rounded
              dense
              outlined
              :prepend-inner-icon="icon"
              :items="salaries"
              v-model="salary"
              label="薪酬" 
            ></v-select>
          </v-col>

          <v-col :cols="2">
            <v-btn class="accent" @click="submit">查询</v-btn>
          </v-col>
        </v-row>
        
        <v-row>
          <v-col :cols="4" v-for="(content, i) in contents" :key="i">
            <v-card>
              <v-card-title>
                <p>{{ content.name }}</p>
              </v-card-title>
              <v-card-text>
                <p>{{ content.demanding }}</p>
              </v-card-text>
              <v-card-actions class="d-flex justify-center">
                <v-btn class="primary" @click="look(i)">查看详情</v-btn>
                <v-btn class="ml-12 mr-6 primary" @click="send(i)">投递简历</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-dialog v-model="showInfo" max-width="500px">
          <v-card class="pa-4">
            <h1>{{ contents.length==0?"":contents[lookInfo].name }}</h1>
            <h2>岗位描述</h2>
            <div>{{ contents.length==0?"":contents[lookInfo].description }}</div>
            <h2>岗位要求</h2>
            <div>{{ contents.length==0?"":contents[lookInfo].demanding }}</div>
            <h3>薪酬区间：{{ contents.length==0?"":contents[lookInfo].salary }}</h3>
            <h3>工作地点：{{ contents.length==0?"":contents[lookInfo].place }}</h3>
          </v-card>
        </v-dialog>
        <v-dialog v-model="showSend" max-width="500px">
          <v-card class="pa-4">
            <v-card-title class="d-flex justify-center">
              <h2>请选择要投递的简历</h2>
            </v-card-title>
            <div class="d-flex justify-center ma-4" v-for="(resume, i) in $store.state.resume.resumes" :key="i">
              <v-btn max-width="100px" class="accent" @click="sendResume(i)">{{ resume.name }}</v-btn>
            </div>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>   
  </v-app>
</template>

<script>
import { mdiMagnify } from '@mdi/js'
export default {
    data: function() {
        return {
          lookInfo:0,
          showInfo:false,
          showSend:false,
          icon: mdiMagnify,
          domains: ['IT科技','文化传媒','金融财务'],
          industries: {'IT科技':['计算机','电子信息','网络安全'],'文化传媒':['影视','新闻媒体','网络文化'],
          '金融财务':['期货','投行','券商']},
          occupations: {'计算机':['软件工程师','算法工程师'],'电子信息':['芯片工程师','架构师'],'网络安全':['网络安全工程师','算法工程师'],
          '影视':['文化总监','摄影师'],'新闻媒体':['总编辑','记者'],'网络文化':['软件工程师','算法工程师'],
          '期货':['风险管理','算法工程师'],'投行':['投资银行部','资产管理'],'券商':['量化交易员','技术总监'],
          },
          label: ["", "", ""],
          cities: ["北京市","上海市","深圳市","香港市"],
          salaries: ["3k以下", "3k-5k", "5k-8k", "8k-10k", "10k以上"],
          city:"",
          salary:"",
          contents: [
            {
              id:"",
              name:"算法工程师",
              description:"工作职责：1、负责智慧医疗相关诊断和治疗算法的开发和维护；2、利用机器学习、深度学习相关算法进行模型训练和参数优化；3、前沿论文进展追踪，相关算法实现",
              demanding:"工作职责：1、负责智慧医疗相关诊断和治疗算法的开发和维护；2、利用机器学习、深度学习相关算法进行模型训练和参数优化；3、前沿论文进展追踪，相关算法实现",
              salary:"8k-10k",
              place:"北京市",
              label:["","",""]
            }
          ]
        }
    },
    methods: {
      submit() {
        let formData={};
        formData["label1"]=this.label[0];
        formData["label2"]=this.label[1];
        formData["label3"]=this.label[2];
        formData["salary"]=this.salary;
        formData["place"]=this.city;
        this.$axios({
        method: "get" /* 指明请求方式，可以是 get 或 post */,
        url: "/SearchPosition/" /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */,
        params: formData,
      })
        .then((res) => {
          // console.log(res);
          this.contents=res.data;
          // this.$store.state.resume.resumes=res.data;
          // console.log(this.$store.state.resume.resumes);

        })
      },
      look(i) {
        this.lookInfo = i;
        this.showInfo = true;
      },
      send(i) {
        this.lookInfo = i;
        this.showSend = true;
      },
      sendResume(i){
          let formData={};
          formData["position_id"]=this.contents[this.lookInfo].id;
          formData["resume_id"]=this.$store.state.user.username.concat("-").concat(this.$store.state.resume.resumes[i].name);
          this.$axios({
          method: "get" /* 指明请求方式，可以是 get 或 post */,
          url: "/SendResume/" /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */,
          params: formData,
        })
          .then((res) => {
            console.log(res);
            if(res.data['success']==true){
              alert("简历发送成功！");
            }else{
              alert("发送失败，简历已被投递过");
            }
          })
          this.showSend = false;
      },
      getMyResume() {
      let formData={};
      formData['sender']=this.$store.state.user.username;
      this.$axios({
        method: "get" /* 指明请求方式，可以是 get 或 post */,
        url: "/LookMyResume/" /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */,
        params: formData,
      })
        .then((res) => {
          this.$store.state.resume.resumes=res.data;
        })
      //TODO
    }
    },
    mounted(){
      this.submit();//无任何条件，即全部显示
      this.getMyResume();
    }
}
</script>

<style scoped></style>
