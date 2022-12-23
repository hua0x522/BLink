<template>
  <v-row>
    <v-col :cols="1"></v-col>
    <v-col>
      <v-card class="mt-8">
        <v-tabs v-model="tab">
          <v-tabs-slider></v-tabs-slider>
          <v-tab class="ml-8" href="#tab-1">
            <v-icon>{{icons.account}}</v-icon>
            <h3 class="ml-2">账户信息</h3>
          </v-tab>
          <v-tab class="ml-8" href="#tab-2">
            <v-icon>{{icons.lock}}</v-icon>
            <h3 class="ml-2">安全设置</h3>
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item :value="'tab-1'">
            <v-card class="pa-8">
              <v-row>
                <v-col :cols="4">
                  <h3>身份：{{ trans(user.type )}}</h3>
                </v-col>
                <v-col :cols="8"></v-col>

                <v-col :cols="4">
                  <v-text-field rounded outlined dense label="真实姓名" v-model="user.real_name">
                  </v-text-field>
                </v-col>
                <v-col :cols="2">
                  <v-select rounded outlined dense label="性别" :items="gender" v-model="user.sex">
                  </v-select>
                </v-col>
                <v-col :cols="6"></v-col>

                <v-row v-if="user.type == '0'">
                  <v-col :cols="4">
                    <v-text-field rounded outlined dense label="学校名称" v-model="user.student.school_name"></v-text-field>
                  </v-col>
                  <v-col :cols="4">
                    <v-text-field rounded outlined dense label="年级" v-model="user.student.grade"></v-text-field>
                  </v-col>
                  <v-col :cols="4">
                    <v-text-field rounded outlined dense label="专业" v-model="user.student.major"></v-text-field>
                  </v-col>
                </v-row>

                <v-row v-if="user.type == '1'">
                  <v-col :cols="4">
                    <v-text-field rounded outlined dense label="工作实验室名称" v-model="user.teacher.lab_belonging"></v-text-field>
                  </v-col>
                  <v-col :cols="4">
                    <v-text-field rounded outlined dense label="职称" v-model="user.teacher.profession_title"></v-text-field>
                  </v-col>
                  <v-col :cols="4">
                    <v-text-field rounded outlined dense label="研究方向" v-model="user.teacher.research_direction"></v-text-field>
                  </v-col>
                </v-row>

                <v-row v-if="user.type == '2'">
                  <v-col :cols="4">
                    <v-text-field rounded outlined dense label="学校名称"  v-model="user.alumni.school_name"></v-text-field>
                  </v-col>
                  <v-col :cols="4">
                    <v-text-field rounded outlined dense label="工作领域" v-model="user.alumni.work_field"></v-text-field>
                  </v-col>
                  <v-col :cols="4">
                    <v-text-field rounded outlined dense label="工作企业名称" v-model="user.alumni.enterprise_belonging"></v-text-field>
                  </v-col>
                </v-row>

                <v-col :cols="4">
                  <v-btn class="accent" @click="submit">修改信息</v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>

          <v-tab-item :value="'tab-2'">
            <v-card>
              <v-row class="mt-8">
                <v-spacer></v-spacer>
                <v-col>
                  <v-text-field rounded outlined dense label="旧密码" v-model="oldPwd" 
                  @click:append="showPwd1 = !showPwd1" 
                  :append-icon="showPwd1 ? 'mdi-eye' : 'mdi-eye-off'" 
                  :type="showPwd1 ? 'text' : 'password'"></v-text-field>

                  <v-text-field rounded outlined dense label="新密码" v-model="newPwd" 
                  :append-icon="showPwd2 ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPwd2 = !showPwd2" 
                  :type="showPwd2 ? 'text' : 'password'"></v-text-field>

                  <v-text-field rounded outlined dense label="重复密码" v-model="repeatPwd" 
                  :append-icon="showPwd3 ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPwd3 = !showPwd3" 
                  :type="showPwd3 ? 'text' : 'password'"></v-text-field>

                  <div class="d-flex justify-center">
                    <v-btn class="primary mb-8" @click="changePwd">修改密码</v-btn>
                  </div>
                </v-col>
                <v-spacer></v-spacer>
              </v-row>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-col>
    <v-col :cols="2"></v-col>
  </v-row>
</template>

<script>
import { mdiAccountOutline, mdiLockOpenOutline } from '@mdi/js'
export default {
    data() {
      return {
          icons: {
              account: mdiAccountOutline,
              lock: mdiLockOpenOutline
          },
          tab: 0,
          gender: ['男','女'],
          user: {},
          oldPwd:"",
          newPwd:"",
          repeatPwd:"",
          showPwd1: false,
          showPwd2: false,
          showPwd3: false
      }
    },
    methods: {
      submit() {
        this.$store.state.user = this.user;
        let formData={};
        formData['id']=this.user.username;
        formData['real_name']=this.user.real_name;
        formData['sex']=this.user.sex;
        if(this.user.type=="0"){
          formData['school_name']=this.user.student.school_name;
          formData['grade']=this.user.student.grade;
          formData['major']=this.user.student.major;
        }else if(this.user.type=="1"){
          formData['profession_title']=this.user.teacher.profession_title;
          formData['research_direction']=this.user.teacher.research_direction;
          formData['lab_belonging_id']=this.user.teacher.lab_belonging;
        }else{
          formData['school_name']=this.user.alumni.school_name;
          formData['work_field']=this.user.alumni.work_field;
          formData['enterprise_belonging_id']=this.user.alumni.enterprise_belonging;
        }
        this.$axios({
          method: "get" /* 指明请求方式，可以是 get 或 post */,
          url: "/UpdateInfo/" /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */,
          params: formData,
        })
          .then((res) => {
            if(res.data['success']==true){
              alert("修改成功！");
            }
          })
      },
      changePwd() {
        if (this.oldPwd != this.$store.state.user.password) {
          alert('旧密码输入错误！');
        }
        else if (this.oldPwd == this.newPwd) {
          alert('新密码不能与旧密码相同！');
        }
        else if (this.newPwd != this.repeatPwd) {
          alert('重复密码与新密码不一致！');
        }
        else {
          this.$store.state.user.password = this.newPwd;
          let formData={};
          formData['id']=this.user.username;
          formData['password']=this.newPwd;
          this.$axios({
          method: "get" /* 指明请求方式，可以是 get 或 post */,
          url: "/ChangePassword/" /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */,
          params: formData,
        })
          .then((res) => {
            if(res.data['success']==true){
              alert("密码修改成功！");
            }
          })
          //TODO
        }
      },
      trans(type){
        if(type=="0") return "学生";
        else if(type=="1") return "教师";
        else if(type=="2") return "校友";
        else return"管理员";
      }
      },
    mounted() {
      this.user = Object.assign({}, this.$store.state.user);
      console.log(this.user);
    }
}
</script>