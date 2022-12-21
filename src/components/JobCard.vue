<template>
    <v-card>
      <v-card-title class="align-start">
        <v-avatar
          :color="color"
          size="38"
          class="elevation-3"
        >
          <v-img src="../../img/huawei.png"></v-img>
        </v-avatar>
        <v-spacer></v-spacer>
  
        <v-btn
          small
          icon
          class="me-n3 mt-n1"
        >
          <v-icon>
            {{ mdiDotsVertical }}
          </v-icon>
        </v-btn>
      </v-card-title>
  
      <v-card-text class="text--primary mt-n3">
        <p class="font-weight-semibold text-subtitle-1 mb-1">
          算法工程师
        </p>
        <p>
            负责计算机视觉在模式识别、多媒体内容分析等方向的应用研究和开发工作，如视频增强、内容理解、OCR、目标检测、多目标跟踪、场景识别、生成类算法等
        </p>    
      </v-card-text>
      
    </v-card>
  </template>
  
  <script>
  import { mdiDotsVertical } from '@mdi/js'
  
  export default {
    props: {
      statTitle: { type: String, default: '' },
      icon: { type: String, default: '' },
      color: { type: String, default: '' },
      subtitle: { type: String, default: '' },
      statistics: { type: String, default: '' },
      change: { type: String, default: '' },
    },
    setup() {
      const checkChange = value => {
        const firstChar = value.charAt(0)
        if (firstChar === '+') {
          return true
        }
  
        return false
      }
  
      return {
        mdiDotsVertical,
        checkChange,
      }
    },
  }
  </script>
  
  <style lang="scss" scoped>
  .percentage {
    top: -8px;
    position: relative;
  }
  </style>
  