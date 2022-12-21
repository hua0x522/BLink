<template>
  <v-app>
    <div class="wrap-home-resources">
    
      <!-- <script src="./home-resources.js" inline></script> -->
    
      <div class="home-resources-header title-gradient bg-gradient-primary">
        <h1>
          行业热点，实时预览
        </h1>
      </div>
      
      <div class="home-resources-content">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div id="carousel-home-resources" class="carousel-home-resources">
                <carousel-3d 
                             :perspective="30"
                             :border="0"
                             :width="500"
                             :height="820"
                             :controls-visible="true"
                             :space="500"
                             :clickable="true">
      
                  <slide :index="0">
                    <img src="../../img/news1.jpg" />
                  </slide>
      
                  <slide :index="1">
                    <img src="../../img/news2.jpg" />
                  </slide>
      
                  <slide :index="2">
                    <img src="../../img/news3.jpg" />
                  </slide>
      
                </carousel-3d>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import {Carousel3d, Slide} from 'vue-carousel-3d'
export default {
  data() {
    return {
      slides: 3
    }
  },
  components: {
    Carousel3d,
    Slide 
  }
}
</script>

<style lang="scss" scoped>

.carousel-home-resources {
  .left-1 {
    transform: translateX(-500px) translateZ(-400px) rotateY(-30deg) !important;
  }
  .right-1 {
    transform: translateX(500px) translateZ(-400px) rotateY(30deg) !important;
  }
}

.title-gradient {
  -webkit-background-clip: text;
  color: transparent;
  width: 300px;
}

</style>