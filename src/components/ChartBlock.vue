<template>
    <v-row>
      <v-col :cols="12">
        <h1>用户数据统计</h1>
      </v-col>
      <v-col :cols="6">
        <div ref="chart1" style="width:400px; height:400px;"></div>
      </v-col>
      <v-col :cols="6">
          <div ref="chart2" style="width:400px; height:400px;"></div>
      </v-col>
      <v-col :cols="12">
        <h1>岗位数据统计</h1>
      </v-col>
      <v-col :cols="6">
          <div ref="chart3" style="width:400px; height:400px;"></div>
      </v-col>
      <v-col :cols="6">
          <div ref="chart4" style="width:400px; height:400px;"></div>
      </v-col>
    </v-row>
  </template>
    
    <script>
    import * as echarts from 'echarts'
    export default {
      data() {
        return {
          chart1: null,
          chart2: null,
          chart3: null,
          chart4: null,
          option1: {
            title: {},
            tooltip: {
              trigger: 'item'
            },
            legend: {
              orient: 'vertical',
              left: 'left'
            },
            series: [
              {
                name: '占比',
                type: 'pie',
                radius: '50%',
                data: [
                  { value: 1048, name: '学生' },
                  { value: 735, name: '教师' },
                  { value: 580, name: '校友' },
                ],
                emphasis: {
                  itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          },
          option2: {
            legend: {},
            tooltip: {},
            dataset: {
              source: [
                ['数量','学校', '企业', '实验室'],
                ["参与数量", 43.3, 85.8, 93.7]
              ]
            },
            xAxis: { type: 'category' },
            yAxis: {},
            series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
          },
          option3: {
            legend: {},
            tooltip: {},
            dataset: {
              source: [
                ['数量', '3k以下', '3k-5k', '5k-8k', '8k-10k', '10k以上'],
                ["参与数量", 43.3, 85.8, 93.7, 60.0, 15.2]
              ]
            },
            xAxis: { type: 'category' },
            yAxis: {},
            series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
          },
          option4: {
            title: {},
            tooltip: {
              trigger: 'item'
            },
            legend: {
              orient: 'vertical',
              left: 'left'
            },
            series: [
              {
                name: '占比',
                type: 'pie',
                radius: ['30%', '60%'],
                data: [
                  { value: 1048, name: 'IT科技' },
                  { value: 735, name: '文化传媒' },
                  { value: 580, name: '金融财务' },
                ],
                emphasis: {
                  itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          }
        }
      },
      methods: {
        initChart() {
          echarts.registerTheme("waldon", theme)
          this.chart1 = echarts.init(this.$refs.chart1, "waldon")
          this.chart1.setOption(this.option1)
          this.chart2 = echarts.init(this.$refs.chart2, "waldon")
          this.chart2.setOption(this.option2)
          this.chart3 = echarts.init(this.$refs.chart3, "waldon")
          this.chart3.setOption(this.option3)
          this.chart4 = echarts.init(this.$refs.chart4, "waldon")
          this.chart4.setOption(this.option4)
        },
        async showData(){
            this.$axios({
        method: "get" ,
        url: "/StatisticUserType/" ,
        params: {},
      })
        .then((res1) => {
            this.option1.series[0].data[0].value=res1.data['student_num'];
            this.option1.series[0].data[1].value=res1.data['teacher_num'];
            this.option1.series[0].data[2].value=res1.data['schoolmate_num'];
            this.$axios({
            method: "get" ,
            url: "/StatisticPlaceType/" ,
            params: {},
        })
        .then((res2) => {
            this.option2.dataset.source[1][1]=res2.data['school_num'];
            this.option2.dataset.source[1][2]=res2.data['enterprise_num'];
            this.option2.dataset.source[1][3]=res2.data['lab_num'];
            this.$axios({
            method: "get" ,
            url: "/StatisticSalaryType/" ,
            params: {},
        })
        .then((res3) => {
            this.option3.dataset.source[1][1]=res3.data['num1'];
            this.option3.dataset.source[1][2]=res3.data['num2'];
            this.option3.dataset.source[1][3]=res3.data['num3'];
            this.option3.dataset.source[1][4]=res3.data['num4'];
            this.option3.dataset.source[1][5]=res3.data['num5'];
            this.$axios({
            method: "get" ,
            url: "/StatisticLabel1Type/" ,
            params: {},
        })
        .then((res4) => {
            this.option4.series[0].data[0].value=res4.data['num1'];
            this.option4.series[0].data[1].value=res4.data['num2'];
            this.option4.series[0].data[2].value=res4.data['num3'];
            this.initChart();
        })
        });
        });
        });      
        }
      },
      mounted: function() {
        this.showData();        
      }
    }
  
    const theme = {
      "color": [
          "#3fb1e3",
          "#6be6c1",
          "#626c91",
          "#a0a7e6",
          "#c4ebad",
          "#96dee8"
      ],
      "backgroundColor": "rgba(252,252,252,0)",
      "textStyle": {},
      "title": {
          "textStyle": {
              "color": "#666666"
          },
          "subtextStyle": {
              "color": "#999999"
          }
      },
      "line": {
          "itemStyle": {
              "borderWidth": "2"
          },
          "lineStyle": {
              "width": "3"
          },
          "symbolSize": "8",
          "symbol": "emptyCircle",
          "smooth": false
      },
      "radar": {
          "itemStyle": {
              "borderWidth": "2"
          },
          "lineStyle": {
              "width": "3"
          },
          "symbolSize": "8",
          "symbol": "emptyCircle",
          "smooth": false
      },
      "bar": {
          "itemStyle": {
              "barBorderWidth": 0,
              "barBorderColor": "#ccc"
          }
      },
      "pie": {
          "itemStyle": {
              "borderWidth": 0,
              "borderColor": "#ccc"
          }
      },
      "scatter": {
          "itemStyle": {
              "borderWidth": 0,
              "borderColor": "#ccc"
          }
      },
      "boxplot": {
          "itemStyle": {
              "borderWidth": 0,
              "borderColor": "#ccc"
          }
      },
      "parallel": {
          "itemStyle": {
              "borderWidth": 0,
              "borderColor": "#ccc"
          }
      },
      "sankey": {
          "itemStyle": {
              "borderWidth": 0,
              "borderColor": "#ccc"
          }
      },
      "funnel": {
          "itemStyle": {
              "borderWidth": 0,
              "borderColor": "#ccc"
          }
      },
      "gauge": {
          "itemStyle": {
              "borderWidth": 0,
              "borderColor": "#ccc"
          }
      },
      "candlestick": {
          "itemStyle": {
              "color": "#e6a0d2",
              "color0": "transparent",
              "borderColor": "#e6a0d2",
              "borderColor0": "#3fb1e3",
              "borderWidth": "2"
          }
      },
      "graph": {
          "itemStyle": {
              "borderWidth": 0,
              "borderColor": "#ccc"
          },
          "lineStyle": {
              "width": "1",
              "color": "#cccccc"
          },
          "symbolSize": "8",
          "symbol": "emptyCircle",
          "smooth": false,
          "color": [
              "#3fb1e3",
              "#6be6c1",
              "#626c91",
              "#a0a7e6",
              "#c4ebad",
              "#96dee8"
          ],
          "label": {
              "color": "#ffffff"
          }
      },
      "map": {
          "itemStyle": {
              "areaColor": "#eeeeee",
              "borderColor": "#aaaaaa",
              "borderWidth": 0.5
          },
          "label": {
              "color": "#ffffff"
          },
          "emphasis": {
              "itemStyle": {
                  "areaColor": "rgba(63,177,227,0.25)",
                  "borderColor": "#3fb1e3",
                  "borderWidth": 1
              },
              "label": {
                  "color": "#3fb1e3"
              }
          }
      },
      "geo": {
          "itemStyle": {
              "areaColor": "#eeeeee",
              "borderColor": "#aaaaaa",
              "borderWidth": 0.5
          },
          "label": {
              "color": "#ffffff"
          },
          "emphasis": {
              "itemStyle": {
                  "areaColor": "rgba(63,177,227,0.25)",
                  "borderColor": "#3fb1e3",
                  "borderWidth": 1
              },
              "label": {
                  "color": "#3fb1e3"
              }
          }
      },
      "categoryAxis": {
          "axisLine": {
              "show": true,
              "lineStyle": {
                  "color": "#cccccc"
              }
          },
          "axisTick": {
              "show": false,
              "lineStyle": {
                  "color": "#333"
              }
          },
          "axisLabel": {
              "show": true,
              "color": "#999999"
          },
          "splitLine": {
              "show": true,
              "lineStyle": {
                  "color": [
                      "#eeeeee"
                  ]
              }
          },
          "splitArea": {
              "show": false,
              "areaStyle": {
                  "color": [
                      "rgba(250,250,250,0.05)",
                      "rgba(200,200,200,0.02)"
                  ]
              }
          }
      },
      "valueAxis": {
          "axisLine": {
              "show": true,
              "lineStyle": {
                  "color": "#cccccc"
              }
          },
          "axisTick": {
              "show": false,
              "lineStyle": {
                  "color": "#333"
              }
          },
          "axisLabel": {
              "show": true,
              "color": "#999999"
          },
          "splitLine": {
              "show": true,
              "lineStyle": {
                  "color": [
                      "#eeeeee"
                  ]
              }
          },
          "splitArea": {
              "show": false,
              "areaStyle": {
                  "color": [
                      "rgba(250,250,250,0.05)",
                      "rgba(200,200,200,0.02)"
                  ]
              }
          }
      },
      "logAxis": {
          "axisLine": {
              "show": true,
              "lineStyle": {
                  "color": "#cccccc"
              }
          },
          "axisTick": {
              "show": false,
              "lineStyle": {
                  "color": "#333"
              }
          },
          "axisLabel": {
              "show": true,
              "color": "#999999"
          },
          "splitLine": {
              "show": true,
              "lineStyle": {
                  "color": [
                      "#eeeeee"
                  ]
              }
          },
          "splitArea": {
              "show": false,
              "areaStyle": {
                  "color": [
                      "rgba(250,250,250,0.05)",
                      "rgba(200,200,200,0.02)"
                  ]
              }
          }
      },
      "timeAxis": {
          "axisLine": {
              "show": true,
              "lineStyle": {
                  "color": "#cccccc"
              }
          },
          "axisTick": {
              "show": false,
              "lineStyle": {
                  "color": "#333"
              }
          },
          "axisLabel": {
              "show": true,
              "color": "#999999"
          },
          "splitLine": {
              "show": true,
              "lineStyle": {
                  "color": [
                      "#eeeeee"
                  ]
              }
          },
          "splitArea": {
              "show": false,
              "areaStyle": {
                  "color": [
                      "rgba(250,250,250,0.05)",
                      "rgba(200,200,200,0.02)"
                  ]
              }
          }
      },
      "toolbox": {
          "iconStyle": {
              "borderColor": "#999999"
          },
          "emphasis": {
              "iconStyle": {
                  "borderColor": "#666666"
              }
          }
      },
      "legend": {
          "textStyle": {
              "color": "#999999"
          }
      },
      "tooltip": {
          "axisPointer": {
              "lineStyle": {
                  "color": "#cccccc",
                  "width": 1
              },
              "crossStyle": {
                  "color": "#cccccc",
                  "width": 1
              }
          }
      },
      "timeline": {
          "lineStyle": {
              "color": "#626c91",
              "width": 1
          },
          "itemStyle": {
              "color": "#626c91",
              "borderWidth": 1
          },
          "controlStyle": {
              "color": "#626c91",
              "borderColor": "#626c91",
              "borderWidth": 0.5
          },
          "checkpointStyle": {
              "color": "#3fb1e3",
              "borderColor": "#3fb1e3"
          },
          "label": {
              "color": "#626c91"
          },
          "emphasis": {
              "itemStyle": {
                  "color": "#626c91"
              },
              "controlStyle": {
                  "color": "#626c91",
                  "borderColor": "#626c91",
                  "borderWidth": 0.5
              },
              "label": {
                  "color": "#626c91"
              }
          }
      },
      "visualMap": {
          "color": [
              "#2a99c9",
              "#afe8ff"
          ]
      },
      "dataZoom": {
          "backgroundColor": "rgba(255,255,255,0)",
          "dataBackgroundColor": "rgba(222,222,222,1)",
          "fillerColor": "rgba(114,230,212,0.25)",
          "handleColor": "#cccccc",
          "handleSize": "100%",
          "textStyle": {
              "color": "#999999"
          }
      },
      "markPoint": {
          "label": {
              "color": "#ffffff"
          },
          "emphasis": {
              "label": {
                  "color": "#ffffff"
              }
          }
      }
  }
  
    </script>
