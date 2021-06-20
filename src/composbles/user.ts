import { ref } from "vue";
import { useRoute } from "vue-router";

export const User = () => {
  const route = useRoute();

  const routesToExclude = ref(["Non-Existent"]);
  const componentRoutes = route.matched[0].children.filter(
    (route) => !routesToExclude.value.includes(route.name)
  );

  return { componentRoutes };
};
