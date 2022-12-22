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
              :items="industries"
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
              :items="occupations"
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
            <h1>{{ contents[lookInfo].name }}</h1>
            <h2>岗位描述</h2>
            <div>{{ contents[lookInfo].description }}</div>
            <h2>岗位要求</h2>
            <div>{{ contents[lookInfo].demanding }}</div>
            <h3>薪酬区间：{{ contents[lookInfo].salary }}</h3>
            <h3>工作地点：{{ contents[lookInfo].place }}</h3>
          </v-card>
        </v-dialog>
        <v-dialog v-model="showSend" max-width="500px">
          <v-card class="pa-4">
            <v-card-title class="d-flex justify-center">
              <h2>请选择要投递的简历</h2>
            </v-card-title>
            <div class="d-flex justify-center ma-4" v-for="(name, i) in $store.state.resume.names" :key="i">
              <v-btn max-width="100px" class="accent">{{ name }}</v-btn>
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
          industries: ['计算机','电子信息','网络安全'],
          occupations: ['软件工程师','算法工程师'],
          label: ["", "", ""],
          cities: ["北京市","上海市"],
          salaries: ["3k以下", "3k-5k", "5k-8k", "8k-10k", "10k以上"],
          city:"",
          salary:"",
          contents: [
            {
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

      },
      look(i) {
        this.lookInfo = i;
        this.showInfo = true;
      },
      send(i) {
        this.lookInfo = i;
        this.showSend = true;
      }
    }
}
</script>

<style scoped></style>