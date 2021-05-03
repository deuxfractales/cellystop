<template>
  <div class="hero">
    <div class="top">
      <div class="leftCol">
        <h1 class="heroTitle">
          Compare <span class="redHead">prices & plans </span>from every carrier
          in Canada with one click
        </h1>
        <p class="heroPara">
          Shopping for telecom services? We know it can be a stressful
          experience. Answer a few of the questions below and we’ll do the heavy
          lifting! All you need to do is sit back and save.
        </p>
        <button><p>Get Started</p></button>
      </div>
      <img src="@/assets/girl.svg" class="heroPic" alt="" />
    </div>
  </div>
</template>
<style scoped lang="scss">
$primary: #e2002c;
$font: "Poppins", sans-serif;

.hero {
  margin: 20px;
  height: 520px;
  width: 80%;
  display: flex;
  flex-direction: column;
}
.top {
  display: flex;
  flex-direction: row;
}
.leftCol {
  width: 60%;
}
.heroTitle {
  width: 90%;
}
.heroPara {
  margin-top: 30px;
}
h1 {
  font-size: 42px;
}
p {
  font-family: $font;
  font-weight: 400;
  font-size: 14;
}
button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: white;
  margin-top: 30px;
  border: 3px solid black;
  border-radius: 5px;
}
.heroPic {
}
.redHead {
  color: $primary;
}
</style>
<script>
export default {
  name: "hero",
};
</script>
