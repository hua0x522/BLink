<template>
    <v-app class="overflow-hidden">
      <v-container class="fill-height">
        <v-row>
          <v-spacer></v-spacer>
          <v-col>
            <v-card class="white pt-6 pb-6">
              <div class="text-h4 text-center accent--text">SIGN UP</div>
              <v-form class="px-12" v-show="(step === 0)">
                <v-text-field label="真实姓名" v-model="info.real_name"></v-text-field>
                <v-text-field label="用户名" v-model="info.username"></v-text-field>
                <v-text-field label="密码" v-model="info.password"></v-text-field>
                <v-select :items="gender" label="性别" v-model="info.sex"></v-select>
                <v-select :items="roles" label="选择身份" v-model="info.type"></v-select>
              </v-form>
              <v-row class="mt-4 mb-4" v-show="(step === 0)">
                <v-spacer></v-spacer>
                <v-btn class="accent" @click="nextStep">下一步</v-btn>
                <v-spacer></v-spacer>
              </v-row> 
              
              <!-- 学生特有属性 -->
              <v-form class="px-12" v-show="(step === 1)">
                <v-text-field label="学校名称" v-model="student_info.school_name"></v-text-field>
                <v-text-field label="年级" v-model="student_info.grade"></v-text-field>
                <v-text-field label="专业" v-model="student_info.major"></v-text-field>
              </v-form>
              
              <!-- 校友特有属性 -->
              <v-form class="px-12" v-show="(step === 2)">
                <v-text-field label="学校名称" v-model="alumni_info.school_name"></v-text-field>
                <v-text-field label="工作领域" v-model="alumni_info.work_field"></v-text-field>
                <v-text-field label="工作企业名称" v-model="alumni_info.enterprise_belonging_id"></v-text-field>
              </v-form>

              <!-- 教师特有属性 -->
              <v-form class="px-12" v-show="(step === 3)">
                <v-text-field label="工作实验室名称" v-model="teacher_info.lab_belonging_id"></v-text-field>
                <v-text-field label="职称" v-model="teacher_info.profession_title"></v-text-field>
                <v-text-field label="研究方向" v-model="teacher_info.research_direction"></v-text-field>
              </v-form>

              <v-row class="mt-4 mb-4" v-show="(step != 0)">
                <v-spacer></v-spacer>
                <v-btn class="accent" @click="submit">注册</v-btn>
                <v-spacer></v-spacer>
              </v-row> 
            </v-card>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </v-container>
    </v-app>
  </template>
  
  
  
  <script>
  
  export default {
      data: function () {
          return {
              gender: ["男", "女"],
              roles: ["学生", "校友", "教师"],
              step: 0,
              info: {
                real_name: "",
                username: "",
                password: "",
                sex: "",
                type: ""
              },
              student_info: {
                school_name: "",
                grade: "",
                major: ""
              },
              teacher_info: {
                profession_title:"",
                research_direction:"",
                lab_belonging_id:""
              },
              alumni_info: {
                school_name:"",
                work_field:"",
                enterprise_belonging_id:""
              }
          }
      },
      methods: {
          nextStep() {
            if (this.role === "学生") this.step = 1;
            else if (this.role === "校友") this.step = 2;
            else if (this.role === "教师") this.step = 3;
            else this.step = 0;
          },
          submit:function() {
            if (this.info.username === "") {
              alert("用户名不能为空！");
              return;
            }if (this.info.password === "") {
              alert("密码不能为空！");
              return;
            }if (this.info.sex === "") {
              alert("性别不能为空！");
              return;
            }if (this.info.type === "") {
              alert("身份类别不能为空！");
              return;
            }
            let formData = {};
            formData["real_name"] = this.info.real_name;
            formData["username"] = this.info.username;
            formData["password"] = this.info.password;
            formData["sex"] = this.info.sex;
            formData["type"] = this.info.type;
            if(formData["type"]==="学生"){
              formData["school_name"] = this.student_info.school_name;
              formData["grade"] = this.student_info.grade;
              formData["major"] = this.student_info.major;
            }else if(formData["type"]==="老师"){
              formData["profession_title"] = this.teacher_info.profession_title;
              formData["research_direction"] = this.teacher_info.research_direction;
              formData["lab_belonging_id"] = this.teacher_info.lab_belonging_id;
            }else{
              formData["school_name"] = this.alumni_info.school_name;
              formData["work_field"] = this.alumni_info.work_field;
              formData["enterprise_belonging_id"] = this.alumni_info.enterprise_belonging_id;
            }
            this.$axios({
            method: "get" ,
            url: "/Register/",
            params: formData,
            }).then((res) => {
              // res.header("Access-Control-Allow-Origin", "*");
              alert("注册成功，等待管理员审核！");
                  // // this.$store.state.url="http://43.138.76.79"+res.data.post.url;
                  // this.$message.success("登录成功！");
                  // this.$store.commit('login');//这个函数会修改islogin全局变量的值，当然也可以直接修改
                  // /* 将后端返回的 user 信息使用 vuex 存储起来 */
                  // /* 从 localStorage 中读取 preRoute 键对应的值 */
                  // //const history_pth = localStorage.getItem('preRoute');
                  // /* 若保存的路由为空或为注册路由，则跳转首页；否则跳转前路由（setTimeout表示1000ms后执行） */
                // localStorage.setItem('storeState',JSON.stringify(this.$store.state));
                console.log(res);
                this.$router.push("/login");
            })
          }
      }
  }
  
  </script>
  
<style></style>