<template>
  <section class="ts-sub-menu">
    <section class="ts-sub-menu__wrapper">
      <ul class="ts-sub-menu__list">
        <li
          v-for="(item, index) in submenuData"
          :key="index"
          class="ts-sub-menu__item"
          :class="activeIndex == index ? 'ts-sub-menu__item--active' : ''"
          @click="subMenuClick"
        >
          {{ item.title }}
        </li>
      </ul>
    </section>
  </section>
</template>
<script>
export default {
  name: 'TsSubMenu',
  data() {
    return {
      activeIndex: ''
    }
  },
  props: {
    submenuData: {
      type: Array,
      default: () => {}
    }
  },
  methods: {
    subMenuClick() {
      console.log('submenuClick')
    }
  }
}
</script>
<style lang="stylus" scoped>
.ts-sub-menu
  .ts-sub-menu__wrapper
    width 100%
  .ts-sub-menu__list
    margin 0
    padding 0
    display flex
    justify-content center
    align-items center
    height 48px
    line-height 48px
    box-shadow 2px 0 4px 2px rgba(211, 211, 211, .8)
  .ts-sub-menu__item
    padding 0 20px
    list-style-type none
    cursor pointer
  .ts-sub-menu__item--active
    background rgba(25,134,231, .2)
</style>
