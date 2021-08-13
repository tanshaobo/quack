<template>
  <section class="ts-sub-menu">
    <section class="ts-sub-menu__breadcrumb">
      <el-breadcrumb separator=">>">
        <template v-for="(item, index) in breadcrumbData">
          <el-breadcrumb-item
            :key="index"
            v-if="index < breadcrumbData.length - 1"
            :to="{ path: item.path }"
          >
            {{ item.title }}
          </el-breadcrumb-item>
          <el-breadcrumb-item :key="index" v-else>
            {{ item.title }}
          </el-breadcrumb-item>
        </template>
      </el-breadcrumb>
    </section>
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
    breadcrumbData: {
      type: Array,
      default: () => [{ path: '/nature', title: '卦石' }]
    },
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
