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
                    <v-btn :disabled="!valid" color="accent" rounded class="mt-8" @click="submit" block
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
        submit() {
          
        }
    }
}

</script>

<style></style>