import { createStore } from 'vuex'

export default createStore({
  state: {
    navItems: [
      {
        anchor: 'Главная',
        path: 'home',
      },
      {
        anchor: 'Компетенции',
        dropdown: [
          {
            anchor: 'Производственные технологии',
            path: 'tehnologies',
          },
          {
            anchor: 'Реализованные проекты',
            path: 'projects',
          },
        ],
      },
      {
        anchor: 'О компании',
        path: 'about',
      },
      {
        anchor: 'Контакты',
        path: 'contacts',
      },
    ],
  },
  getters: {
    getNavItems(state) {
      return state.navItems
    },
  },
  mutations: {},
  actions: {},
  modules: {},
})
