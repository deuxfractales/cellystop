<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
export default {
  components: { Nav },
};
</script>
<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

$font: "Poppins", sans-serif;

$primary: #e2002c;
h1 {
  font-family: $font;
  font-weight: 500;
}
h3 {
  font-family: $font;
  font-weight: 200;
}

.link {
  text-decoration: none;
  color: black;
}
.link:visited {
  text-decoration: none;
  color: black;
}
.link:hover {
  text-decoration: none;
  color: $primary;
}
.link:active {
  text-decortation: none;
  color: $primary;
}
</style>
