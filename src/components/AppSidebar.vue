<template>
  <CSidebar
    position="fixed"
    :unfoldable="sidebarUnfoldable"
    :visible="sidebarVisible"
    @visible-change="
      (event) =>
        $store.commit({
          type: 'updateSidebarVisible',
          value: event,
        })
    "
  >
    <CSidebarBrand>
      <CIcon
        custom-class-name="sidebar-brand-full"
        icon="cil-Money"
        :height="35"
      />
    </CSidebarBrand>
    <AppSidebarNav />
    <CSidebarToggler
      class="d-none d-lg-flex"
      @click="$store.commit('toggleUnfoldable')"
    />
  </CSidebar>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { AppSidebarNav } from './AppSidebarNav'
// import { logoNegative } from '@/assets/brand/logo-negative'
const store = useStore()
const sidebarUnfoldable = computed(() => store.state.sidebarUnfoldable)
const sidebarVisible = computed(() => store.state.sidebarVisible)
</script>
