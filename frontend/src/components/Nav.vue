<template>
  <div class="navbar">
    <router-link to="/"><img src="@/assets/logo.png" height="30"></router-link>
    <router-link to="/phones" class="link navLink"><h3>Phones</h3></router-link> 
    <router-link to="/plans" class="link navLink"><h3>Plans</h3></router-link>
    <router-link to="" class="link navLink"><h3>Accessories</h3></router-link>
    <router-link to="" class="link navLink"><h3>How it works</h3></router-link>
    <router-link to="" class="link navLink"><h3>Partners</h3></router-link>
    <router-link to="" class="link navLink"><h3>Blog</h3></router-link>
    <router-link to="" class="link navLink"><h3>About</h3></router-link>
    <router-link to="" class="link navLink"><h3>Contact</h3></router-link>
    <router-link to="" class="link navLink"><h3>Login</h3></router-link>
    <router-link to="" class="link navLink"><h3>S</h3></router-link>
  </div>
</template>
<style lang="scss">
.navbar{
  width: 80%;
  height: 100px;
  border-radius: 40px;
  box-shadow: 0px 0px 25px 4px rgba(0,0,0,0.75);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
.navLink{
  margin: 20px;
}

</style>
<script>
export default {
  name: "Nav",
};
</script>
