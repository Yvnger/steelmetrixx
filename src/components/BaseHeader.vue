<template>
  <header class="header">
    <div class="container">
      <router-link to="." class="header__logo-link">
        <img
          class="header__logo"
          src="@/assets/images/logo.svg"
          alt="Логотип"
        />
      </router-link>

      <BaseNavigation />

      <a href="tel:88003027479" class="header__phone">8 800 302 74 79</a>
    </div>
  </header>
</template>

<script>
import BaseNavigation from '@/components/BaseNavigation.vue'

export default {
  components: { BaseNavigation },
}
</script>
