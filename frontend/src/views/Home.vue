<template>
  <div class="home">
    <Hero />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/homepage/Hero.vue";
export default {
  name: "Home",
  components: { Hero },
};
</script>
<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
