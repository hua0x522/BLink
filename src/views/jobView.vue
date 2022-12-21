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
              :items="subject"
              v-model="select[0]"
              label="行业"
            ></v-select>
          </v-col>

          <v-col :cols="2">
            <v-select
              rounded
              dense
              outlined
              :prepend-inner-icon="icon"
              :items="major"
              v-model="select[1]"
              v-show="select[0]"
            ></v-select>
          </v-col>

          <v-col :cols="2">
            <v-select
              rounded
              dense
              outlined
              :prepend-inner-icon="icon"
              :items="job"
              v-model="select[2]"
              v-show="select[1]"
            ></v-select>
          </v-col>

          <v-spacer></v-spacer>

          <v-col :cols="2">
            <v-select
              rounded
              dense
              outlined
              :prepend-inner-icon="icon"
              :items="city"
              label="城市"
            ></v-select>
          </v-col>

          <v-col :cols="2">
            <v-select
              rounded
              dense
              outlined
              :prepend-inner-icon="icon"
              :items="salary"
              label="薪酬"
            ></v-select>
          </v-col>

          <v-col :cols="2">
            <v-btn class="accent" @click="submit">查询</v-btn>
          </v-col>
        </v-row>
        
        <v-row>
          <v-col :cols="4">
            <v-card>
              <v-card-title>
                <p>算法工程师</p>
              </v-card-title>
              <v-card-text>
                <p>工作职责：1、负责智慧医疗相关诊断和治疗算法的开发和维护；2、利用机器学习、深度学习相关算法进行模型训练和参数优化；3、前沿论文进展追踪，相关算法实现</p>
              </v-card-text>
              <v-card-actions class="d-flex justify-center">
                <v-btn class="primary">查看详情</v-btn>
                <v-btn class="ml-12 mr-6 primary">投递简历</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>   
  </v-app>
</template>

<script>
import { mdiMagnify } from '@mdi/js'
export default {
    data: function() {
        return {
          icon: mdiMagnify,
          subject: ['IT科技','文化传媒','金融财务'],
          major: ['计算机','电子信息','网络安全'],
          job: ['软件工程师','算法工程师'],
          select: ["", "", ""],
          city: ["北京市","上海市"],
          salary: ["3k以下", "3k-5k", "5k-8k", "8k-10k", "10k以上"],
        }
    },
    methods: {
      submit() {
        
      }
    }
}
</script>

<style scoped></style>