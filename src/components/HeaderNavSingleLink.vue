<template>
  <RouterLink
      class="nav-header__link"
      :to="{ name: route.path }"
      v-if="!route.dropdown"
  >
    {{ route.anchor }}
  </RouterLink>
</template>

<script>
export default {
  props: ['route']
}
</script>
