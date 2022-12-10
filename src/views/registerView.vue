<template>
    <v-app class="overflow-hidden">
      <v-container class="fill-height">
        <v-row>
          <v-spacer></v-spacer>
          <v-col>
            <v-card class="white pt-6 pb-6">
              <div class="text-h4 text-center accent--text">SIGN UP</div>
              <v-form class="px-12" v-show="(step === 0)">
                <v-text-field label="真实姓名"></v-text-field>
                <v-text-field label="用户名"></v-text-field>
                <v-text-field label="密码"></v-text-field>
                <v-select :items="gender" label="性别"></v-select>
                <v-select :items="roles" label="选择身份" v-model="role"></v-select>
              </v-form>
              <v-row class="mt-4 mb-4" v-show="(step === 0)">
                <v-spacer></v-spacer>
                <v-btn class="accent" @click="nextStep">下一步</v-btn>
                <v-spacer></v-spacer>
              </v-row> 
              
              <!-- 学生特有属性 -->
              <v-form class="px-12" v-show="(step === 1)">
                <v-text-field label="学校名称"></v-text-field>
                <v-text-field label="年级"></v-text-field>
                <v-text-field label="专业"></v-text-field>
              </v-form>
              
              <!-- 校友特有属性 -->
              <v-form class="px-12" v-show="(step === 2)">
                <v-text-field label="学校名称"></v-text-field>
                <v-text-field label="工作领域"></v-text-field>
                <v-text-field label="工作企业名称"></v-text-field>
              </v-form>

              <!-- 教师特有属性 -->
              <v-form class="px-12" v-show="(step === 3)">
                <v-text-field label="工作实验室名称"></v-text-field>
                <v-text-field label="职称"></v-text-field>
                <v-text-field label="研究方向"></v-text-field>
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
              role: "",
              step: 0
          }
      },
      methods: {
          nextStep() {
            if (this.role === "学生") this.step = 1;
            else if (this.role === "校友") this.step = 2;
            else if (this.role === "教师") this.step = 3;
            else this.step = 0;
          },
          submit() {

          }
      }
  }
  
  </script>
  
<style></style>