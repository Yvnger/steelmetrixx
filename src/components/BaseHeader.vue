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

      <HeaderNav />

      <a href="tel:88003027479" class="header__phone">8 800 302 74 79</a>
    </div>
  </header>
</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue'

export default {
  components: { HeaderNav },
}
</script>
