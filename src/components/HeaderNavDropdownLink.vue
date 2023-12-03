<template>
  <a
    class="nav-header__link"
    :class="{ 'nav-header__link--active': opened }"
    href="#"
    @click.prevent="toggle"
  >
    Компетенции
    <div
      class="nav-header__dropdown dropdown"
      :class="{ 'dropdown--opened': opened }"
    >
      <ul class="nav-header__items">
        <li class="nav-header__item">
          <router-link :to="{ name: 'technologies' }" class="nav-header__link">
            Производственные технологии
          </router-link>
        </li>
        <li class="nav-header__item">
          <router-link :to="{ name: 'projects' }" class="nav-header__link">
            Реализованные проекты
          </router-link>
        </li>
      </ul>
    </div>
  </a>
</template>

<script>
export default {
  data() {
    return {
      opened: false,
    }
  },
  props: ['route'],
  methods: {
    toggle() {
      this.opened = !this.opened
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.opened = !this.opened
      }
    },
  },
  mounted() {
    document.addEventListener('mousedown', this.handleClickOutside)
  },
  beforeUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  },
}
</script>
