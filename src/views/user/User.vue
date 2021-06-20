<template>
  <h1>User</h1>
  <div class="nav">
    <router-link
      v-for="{ name, path } in componentRoutes"
      :key="name"
      :to="path"
      >{{ name }}</router-link
    >
  </div>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { User } from "@/composbles/user";

export default defineComponent({
  setup() {
    const { componentRoutes } = User();

    return {
      componentRoutes,
    };
  },
});
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: center;
  grid-gap: 1rem;
}
</style>
