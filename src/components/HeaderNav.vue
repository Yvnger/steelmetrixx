<template>
  <nav class="header__nav nav-header">
    <ul class="nav-header__items">
      <HeaderNavItem
        :route="item"
        v-for="item in navItems"
        :key="item.anchor"
      />
    </ul>

    <button class="nav-header__hamburger">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </nav>
</template>

<script>
import HeaderNavItem from '@/components/HeaderNavItem.vue'
import { mapGetters } from 'vuex'

export default {
  components: { HeaderNavItem },
  computed: {
    ...mapGetters({
      navItems: 'getNavItems',
    }),
  },
}
</script>
