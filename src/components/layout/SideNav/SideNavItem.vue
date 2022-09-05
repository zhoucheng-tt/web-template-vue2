<template>
  <el-menu-item v-if="!hasChild(item.children)"
                :route="{ name: item.routeName }"
                :index="item.routeName">
    <span>{{ item.name }}</span>
  </el-menu-item>

  <el-submenu v-else
              :index="item.code"
              popper-append-to-body>

    <template slot="title">
      <span>{{ item.name }}</span>
    </template>

    <side-nav-item v-for="child in item.children"
                   :key="child.path"
                   :is-nest="true"
                   :item="child"
                   :route-name="item.routeName"
                   class="nest-menu" />
  </el-submenu>
</template>

<script>
export default {
  name: 'SideNavItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    routeName: {
      type: String,
      default: ''
    }
  },
  methods: {
    hasChild (itemChildren) {
      if (itemChildren !== undefined && itemChildren.length !== 0) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
</style>