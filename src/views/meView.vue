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
            <v-card>
              <v-row class="mt-8">
                <v-col :cols="4">
                  <v-text-field rounded outlined dense label="真实姓名"></v-text-field>
                </v-col>
                <v-col :cols="2">
                  <v-select rounded outlined dense label="性别" :items="gender"></v-select>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>

          <v-tab-item :value="'tab-2'">
            <v-card>
              <v-row class="mt-8">
                <v-spacer></v-spacer>
                <v-col>
                  <v-text-field rounded outlined dense label="旧密码"></v-text-field>
                  <v-text-field rounded outlined dense label="新密码"></v-text-field>
                  <v-text-field rounded outlined dense label="重复密码"></v-text-field>
                  <div class="d-flex justify-center">
                    <v-btn class="primary mb-8">修改密码</v-btn>
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
            gender: ['男','女']
        }
    }
}
</script>