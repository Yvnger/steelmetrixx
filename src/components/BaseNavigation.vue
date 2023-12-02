<template>
  <nav class="header__nav nav-header">
    <ul class="nav-header__items">
      <li class="nav-header__item">
        <router-link class="nav-header__link" to="/"> Главная </router-link>
      </li>
      <li class="nav-header__item nav-header__item--dropdown">
        <a class="nav-header__link" href="#" @click.prevent>
          Компетенции
          <div class="nav-header__dropdown dropdown">
            <ul class="dropdown__items">
              <li class="dropdown__item">
                <router-link to="/technologies" class="dropdown__link">
                  Производственные технологии
                </router-link>
              </li>
              <li class="dropdown__item">
                <router-link to="/projects" class="dropdown__link">
                  Реализованные проекты
                </router-link>
              </li>
            </ul>
          </div>
        </a>
      </li>
      <li class="nav-header__item">
        <router-link class="nav-header__link" to="/about">
          О компании
        </router-link>
      </li>
      <li class="nav-header__item">
        <router-link class="nav-header__link" to="/contacts">
          Контакты</router-link
        >
      </li>
    </ul>

    <button class="nav-header__hamburger">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </nav>
</template>
