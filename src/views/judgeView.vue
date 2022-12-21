<template>
  <v-container>
    <v-row>
      <v-col :cols="2"></v-col>
      <v-col>
        <v-expansion-panels>
          <v-expansion-panel v-for="(item, i) in items" :key="i">
            <v-expansion-panel-header>{{item.username}}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <v-col :cols="6">
                  <h3>姓名: {{item.real_name}}</h3>
                  <h3>性别: {{item.sex}}</h3>
                  <h3>身份: {{item.type}}</h3>
                </v-col>
                <v-spacer></v-spacer>
                <v-col>
                  <v-btn class="primary">通过</v-btn>
                  <v-btn class="error">不通过</v-btn>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col :cols="3"></v-col>
    </v-row>
  </v-container>
</template>

<script>
const it = {
    username: "wxz",
    real_name: "wxz",
    sex: "男",
    type: "学生"
}

export default {
    data() {
        return {
            items: [it, it, it],
        }
    }
}
</script>