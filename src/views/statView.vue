<template>
  <v-container>
    <div>
      <v-sparkline
        :value="spark.value"
        :gradient="spark.gradient"
        :smooth="spark.radius || false"
        :padding="spark.padding"
        :line-width="spark.width"
        :stroke-linecap="spark.lineCap"
        :gradient-direction="spark.gradientDirection"
        :fill="spark.fill"
        :type="spark.type"
        :auto-line-width="spark.autoLineWidth"
        auto-draw
      >
      <template v-slot:label="item">
        ${{ item.value }}
      </template>
      </v-sparkline>
    </div>

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

const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea'],
]

export default {
    data() {
        return {
            items: [it, it, it],
            spark: {
                width: 2,
                radius: 10,
                padding: 8,
                lineCap: 'round',
                gradient: gradients[5],
                value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
                gradientDirection: 'top',
                gradients,
                fill: false,
                type: 'trend',
                autoLineWidth: false
            }
        }
    }
}
</script>