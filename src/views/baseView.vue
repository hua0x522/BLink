<template>
  <v-app class="app">
    <vertical-nav-menu></vertical-nav-menu>

    <v-app-bar app flat absolute color="transparent">
      <div class="boxed-container w-full">
        <div class="d-flex align-center mx-6">
          <!-- Left Content -->
          <v-app-bar-nav-icon
            class="d-block d-lg-none me-2"
          ></v-app-bar-nav-icon>
          

          <v-spacer></v-spacer>

          <!-- Right Content -->
          <a
            href="https://github.com/themeselection/materio-vuetify-vuejs-admin-template-free"
            target="_blank"
            rel="nofollow"
          >
            <v-icon class="ms-6 me-4">
              {{ icons.mdiGithub }}
            </v-icon>
          </a>
          <v-btn icon small class="ms-3">
            <v-icon>
              {{ icons.mdiBellOutline }}
            </v-icon>
          </v-btn>
        </div>
      </div>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mdiMagnify, mdiBellOutline, mdiGithub } from '@mdi/js'
import VerticalNavMenu from '../components/VerticalNavMenu'

export default {
  components: {
    VerticalNavMenu
  },
  data() {
    return {
      icons: {
        mdiMagnify,
        mdiBellOutline,
        mdiGithub
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.app {
  background-color: #f4f5fa;
}

.v-app-bar ::v-deep {
  .v-toolbar__content {
    padding: 0;

    .app-bar-search {
      .v-input__slot {
        padding-left: 18px;
      }
    }
  }
}

.boxed-container {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}
</style>
