<template>
  <v-container>
    <v-row>
      <v-col :cols="2"></v-col>
      <v-col>
        <v-card>
          <v-img height="500" src="../../img/img6.jpg"></v-img>
          <v-expansion-panels>
            <v-expansion-panel v-for="(item, i) in items" :key="i">
              <v-expansion-panel-header>{{item.username}}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row>
                  <v-col :cols="6">
                    <div>
                      <h3>姓名: {{item.real_name}}</h3>
                      <h3>性别: {{item.sex}}</h3>
                      <h3>身份: {{trans(item.type)}}</h3>
                    </div>
                    
                    <div v-if="item.type=='学生'">
                      <h3>学校名称：{{ item.school_name }}</h3>
                      <h3>年级：{{ item.grade }}</h3>
                      <h3>专业：{{ item.major }}</h3>
                    </div>

                    <div v-if="item.type=='教师'">
                      <h3>工作实验室名称：{{ item.lab_belonging_id }}</h3>
                      <h3>职称：{{ item.profession_title }}</h3>
                      <h3>研究方向：{{ item.research_direction }}</h3>
                    </div>

                    <div v-if="item.type=='校友'">
                      <h3>学校名称：{{ item.school_name }}</h3>
                      <h3>工作领域：{{ item.work_field }}</h3>
                      <h3>工作企业名称：{{ item.enterprise_belonging_id }}</h3>
                    </div>  
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col>
                    <v-btn class="primary" @click="pass(i)">通过</v-btn>
                    <v-btn class="error" @click="del(i)">不通过</v-btn>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
      <v-col :cols="3"></v-col>
    </v-row>
  </v-container>
</template>

<script>
// const it = {
//     username: "wxz",
//     real_name: "wxz",
//     sex: "男",
//     type: "学生"
// }


export default {
    data() {
        return {
            items: [],
        }
    },
    methods: {
      showInfo() {
        this.$axios({
          method: "get" /* 指明请求方式，可以是 get 或 post */,
          url: "/LookRegisterInfo/" /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */,
          params: {},
        })
        .then((res) => {
          this.items=res.data;
        })
      },
      pass(i){
        let formData={};
        formData['username']=this.items[i]['username'];
        this.$axios({
          method: "get" /* 指明请求方式，可以是 get 或 post */,
          url: "/PassRegister/" /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */,
          params: formData,
        })
        .then((res) => {
          if(res.data['success']==true){
            alert("通过审核！");
            this.items.splice(i,1);
          }
        })
      },
      del(i){
        let formData={};
        formData['username']=this.items[i]['username'];
        this.$axios({
          method: "get" /* 指明请求方式，可以是 get 或 post */,
          url: "/DeleteRegister/" /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */,
          params: formData,
        })
        .then((res) => {
          if(res.data['success']==true){
            alert("不通过审核！");
            this.items.splice(i,1);
          }
        })
      },
      trans(i){
        if(i=='0'){
          return "学生"
        }else if(i=='1'){
          return "老师"
        }else if(i=='2'){
          return "校友"
        }
      }
    },
    mounted(){
      this.showInfo();
      console.log();
    }
}
</script>