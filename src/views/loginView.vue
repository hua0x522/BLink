<template>
  <v-app class="overflow-hidden">
    <v-container class="fill-height">
      <v-row no-gutters class="mt-n16">
        <v-col :cols="7">
          <v-img src="../../img/login.png"></v-img>
        </v-col>
        <v-col :cols="5">
          <div class="text-h3 ml-4 accent--text">{{ title }}</div>
          <v-divider class="mb-4"></v-divider> 
          <!-- 登陆表单 -->
          <v-row no-gutters class="justify-center">
            <v-col cols="11">
              <v-form ref="form" v-model="valid" class="px-12" lazy-validation @keyup.enter.native="submit">
                <v-text-field
                  v-model="id"
                  :rules="nameRules"
                  label="用户名"
                  append-icon="mdi-account"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  :rules="pwdRules"
                  label="密码"
                  @click:append="showPwd = !showPwd"
                  :append-icon="showPwd ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPwd ? 'text' : 'password'"
                  required
                ></v-text-field>
                <v-row>
                  <v-col>
                    <v-btn :disabled="!valid" color="accent" rounded class="mt-8" @click="login" block
                    style="color:white">登录</v-btn>
                  </v-col>
                  <v-col>
                    <v-btn :disabled="!valid" color="white" rounded class="mt-8" 
                    @click="submit" block to="/register">注册</v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>



<script>

export default {
    data: function () {
        return {
            title: 'Welcome to BLink :)',
            valid: true,
            showPwd: false,
            id: '',
            password: '',
            nameRules: [(v) => !!v || '请输入用户名'],
            pwdRules: [(v) => !!v || '请输入密码'],
        }
    },
    methods: {
      login: function () {
      if (this.id === "" || this.password === "") {
        alert("用户名和密码不能为空！");
        return;
      }
      let formData = {};
      formData["username"] = this.id;
      formData["password"] = this.password;
      this.$axios({
        method: "get" /* 指明请求方式，可以是 get 或 post */,
        url: "/Login/" /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */,
        params: formData,
      })
        .then((res) => {
          console.log(res);
          // res.header("Access-Control-Allow-Origin", "*");
          /* res 是 response 的缩写 */
          if (res.data['success']==2) {
            alert("等待管理员审核");
          } else if(res.data['success']==1){
            alert("登录成功！");
            this.$store.state.user.real_name=res.data['real_name'];
            this.$store.state.user.username=res.data['username'];
            this.$store.state.user.islogin=true;
            this.$store.state.user.password=res.data['password'];
            this.$store.state.user.sex=res.data['sex'];
            this.$store.state.user.status=res.data['status'];
            this.$store.state.user.type=res.data['type'];
            if(res.data['type']=="0"){
              this.$store.state.user.student.school_name=res.data['school_name'];
              this.$store.state.user.student.grade=res.data['grade'];
              this.$store.state.user.student.major=res.data['major'];              
            }else if(res.data['type']=="1"){
              this.$store.state.user.teacher.profession_title=res.data['profession_title'];
              this.$store.state.user.teacher.research_direction=res.data['research_direction'];
              this.$store.state.user.teacher.lab_belonging=res.data['lab_belonging_id'];
            }else{
              this.$store.state.user.alumni.school_name=res.data['school_name'];
              this.$store.state.user.alumni.work_field=res.data['work_field'];
              this.$store.state.user.alumni.enterprise_belonging=res.data['enterprise_belonging_id'];
            }
            localStorage.clear();
              // // this.$store.state.url="http://43.138.76.79"+res.data.post.url;
              // this.$message.success("登录成功！");
              // this.$store.commit('login');//这个函数会修改islogin全局变量的值，当然也可以直接修改
              // /* 将后端返回的 user 信息使用 vuex 存储起来 */
              // /* 从 localStorage 中读取 preRoute 键对应的值 */
              // //const history_pth = localStorage.getItem('preRoute');
              // /* 若保存的路由为空或为注册路由，则跳转首页；否则跳转前路由（setTimeout表示1000ms后执行） */
            localStorage.setItem('storeState',JSON.stringify(this.$store.state));
              // this.$router.push("/home");
            console.log(res);
            this.$store.commit('login');
            this.$router.push("/home");
          } else{
            // this.$message.success("登录成功");
            alert("用户名或密码错误！");
          }
        })
        // .catch((err) => {
        //   console.log(err); /* 若出现异常则在终端输出相关信息 */
        // });
    },
    
    },
    created(){

    }
}

</script>

<style></style>