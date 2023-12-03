<template>
  <li
    class="nav-header__item"
    :class="{ 'nav-header__item--dropdown': route.dropdown }"
  >
    <HeaderNavSingleLink :route="route" v-if="!route.dropdown" />

    <HeaderNavDropdownLink :route="route" v-else />
  </li>
</template>

<script>
import HeaderNavSingleLink from '@/components/HeaderNavSingleLink.vue'
import HeaderNavDropdownLink from '@/components/HeaderNavDropdownLink.vue'

export default {
  props: ['route'],
  components: { HeaderNavSingleLink, HeaderNavDropdownLink },
}
</script>
