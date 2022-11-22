<template>
  <v-navigation-drawer
    app
    floating
    width="260"
    class="app-navigation-menu"
  >
    <!-- Navigation Header -->
    <div class="vertical-nav-header d-flex items-center ps-6 pe-5 pt-5 pb-2">
      <router-link
        to="/"
        class="d-flex align-center text-decoration-none"
      >
        <v-img
          src="../../img/logo.png"
          max-height="30px"
          max-width="30px"
          alt="logo"
          contain
          eager
          class="app-logo me-3"
        ></v-img>
        <v-slide-x-transition>
          <h2 class="app-title">
            BLINK 
          </h2>
        </v-slide-x-transition>
      </router-link>
    </div>

    <!-- Navigation Items -->
    <v-list
      expand
      shaped
      class="vertical-nav-menu-items pr-5"
    >
      <nav-menu-link
        title="新闻资讯"
        :to="{ name: 'home' }"
        :icon="icons.mdiHomeOutline"
      ></nav-menu-link>
      <nav-menu-link
        title="岗位信息"
        :to="{ name: 'job'}"
        :icon="icons.mdiAccountCogOutline"
      ></nav-menu-link>
      <!-- <nav-menu-section-title title="USER INTERFACE"></nav-menu-section-title> -->
      <nav-menu-link
        title="发现朋友"
        :to="{ name: 'find' }"
        :icon="icons.mdiAlphaTBoxOutline"
      ></nav-menu-link>
      <nav-menu-link
        title="消息通知"
        :to="{ name: 'message' }"
        :icon="icons.mdiEyeOutline"
      ></nav-menu-link>
      <nav-menu-link
        title="畅所欲言"
        :to="{ name: 'talk' }"
        :icon="icons.mdiCreditCardOutline"
      ></nav-menu-link>
      <nav-menu-link
        title="后台数据"
        :to="{ name: 'stat' }"
        :icon="icons.mdiTable"
      ></nav-menu-link>
      <nav-menu-link
        title="个人中心"
        :to="{ name: 'me' }"
        :icon="icons.mdiFormSelect"
      ></nav-menu-link>
    </v-list>
    <v-img
      src="../../img/img3.png"
      transition="scale-transition"
      class="upgrade-banner mx-auto"
      max-width="230"
    ></v-img>
  </v-navigation-drawer>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import {
  mdiHomeOutline,
  mdiAlphaTBoxOutline,
  mdiEyeOutline,
  mdiCreditCardOutline,
  mdiTable,
  mdiFileOutline,
  mdiFormSelect,
  mdiAccountCogOutline,
} from '@mdi/js'
// import NavMenuSectionTitle from './components/NavMenuSectionTitle.vue'
// import NavMenuGroup from './components/NavMenuGroup.vue'
import NavMenuLink from './NavMenuLink.vue'

export default {
  components: {
    // NavMenuSectionTitle,
    // NavMenuGroup,
    NavMenuLink,
  },
  data() {
    return {
      icons: {
        mdiHomeOutline,
        mdiAlphaTBoxOutline,
        mdiEyeOutline,
        mdiCreditCardOutline,
        mdiTable,
        mdiFileOutline,
        mdiFormSelect,
        mdiAccountCogOutline,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.app-title {
  font-size: 1.25rem;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.3px;
  color: rgba(94, 86, 105, 0.87);
}

// ? Adjust this `translateX` value to keep logo in center when vertical nav menu is collapsed (Value depends on your logo)
.app-logo {
  transition: all 0.18s ease-in-out;
  .v-navigation-drawer--mini-variant & {
    transform: translateX(-4px);
  }
}

.app-navigation-menu {
  background-color: #f4f5fa;
  .v-list-item {
    &.vertical-nav-menu-link {
      ::v-deep .v-list-item__icon {
        .v-icon {
          transition: none !important;
        }
      }
    }
  }
}

// You can remove below style
// Upgrade Banner
.app-navigation-menu {
  .upgrade-banner {
    position: absolute;
    bottom: 13px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
