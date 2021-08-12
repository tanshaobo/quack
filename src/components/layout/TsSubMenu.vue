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
      <ul>
        <li v-for="(item, index) in submenuData" :key="index">
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
    return {}
  },
  props: {
    breadcrumbData: {
      type: Array,
      default: () => {}
    },
    submenuData: {
      type: Array,
      default: () => {}
    }
  }
}
</script>
