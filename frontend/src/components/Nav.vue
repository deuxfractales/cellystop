<template>
  <div class="navbar">
    <router-link to="/"><img src="@/assets/logo.svg" height="40vw"></router-link>
    <router-link to="/phones" class="link navLink"><h3>Phones</h3></router-link> 
    <router-link to="/plans" class="link navLink"><h3>Plans</h3></router-link>
    <router-link to="" class="link navLink"><h3>Accessories</h3></router-link>
    <router-link to="" class="link navLink"><h3>How it works</h3></router-link>
    <router-link to="" class="link navLink"><h3>Partners</h3></router-link>
    <router-link to="" class="link navLink"><h3>Blog</h3></router-link>
    <router-link to="" class="link navLink"><h3>About</h3></router-link>
    <router-link to="" class="link navLink"><h3>Contact</h3></router-link>
    <router-link to="" class="link navLink"><h3>Login</h3></router-link>
    <router-link to="" class="link navLink"><h3><img src="@/assets/search-icon.svg" height="20vw"></h3></router-link>
  </div>
</template>
<style lang="scss">
.navbar{
  padding-left: 2%;
  padding-right: 2%;
  width: 90%;
  height: 100px;
  border-radius: 0px 0px 10px 10px;
  box-shadow: 0px 0px 7px 2px rgba(0,0,0,0.75);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
.navLink{
  margin: 20px;
  font-size: 0.9vw;
}

</style>
<script>
export default {
  name: "Nav",
};
</script>
