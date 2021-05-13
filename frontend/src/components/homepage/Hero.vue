<template>
  <div class="hero">
    <!-- TOP PART -->
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
    <!--BOTTOM OF THE HERO -->
    <div class="bot">
      <h2 class="botTitle">
        Shopping & Stress don't go together. Save an average of 25% on your
        monthly bill
      </h2>
      <div class="botTilesHolder">
        <!--TILE 1-->
        <div class="tile">
          <img class="tileImg" src="@/assets/phone-icon.svg" width="124px" />
          <p class="imgCaption">Pick Your device</p>
        </div>
        <img src="@/assets/arrow-icon.svg" alt="arrow icon" />

        <!--TILE 2-->
        <div class="tile">
          <img class="tileImg" src="@/assets/cart-icon.svg" width="124px" />
          <p class="imgCaption">Shop The Best Deals In Your Area</p>
        </div>
        <img src="@/assets/arrow-icon.svg" alt="arrow icon" />

        <!--TILE 3-->
        <div class="tile">
          <img class="tileImg" src="@/assets/check-icon.png" width="124px" />
          <p class="imgCaption">Select your option</p>
        </div>
        <img src="@/assets/arrow-icon.svg" alt="arrow icon" />

        <!--TILE 4-->
        <div class="tile">
          <img class="tileImg" src="@/assets/money-icon.svg" width="124px" />
          <p class="imgCaption">Save On Your Bill</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
$primary: #e2002c;
$font: "Poppins", sans-serif;

.hero {
  margin: 3%;
  height: auto;
  width: 80%;
  display: flex;
  flex-direction: column;
}
.bot {
  background-color: $primary;
  height: 350px;
  width: 100%;
  margin-top: -15%;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.botTitle {
  margin-top: 0.3%;
  margin-bottom: 20px;
}
.botTilesHolder {
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.tile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: flex-start;
  width: 200px;
  padding-top: 2%;
}
.tileImg {
  padding: 40px;
  background: white;
  border-radius: 40px;
}
.imgCaption {
  font-family: $font;
  font-weight: 500;
  font-size: 16px;
  color: white;
  padding-top: 5%;
}
h2 {
  color: white;
  font-size: 20px;
}
.top {
  display: flex;
  flex-direction: row;
}
.leftCol {
  width: 60%;
}
.heroTitle {
  width: 100%;
  font-size: 3vw;
}
.heroPara {
  margin-top: 1%;
  font-weight: 200;
  width: 80%;
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
  margin-top: 5%;
  border: 3px solid black;
  border-radius: 5px;
}
.heroPic {
  height: 100%;
  padding-top:3%;
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
