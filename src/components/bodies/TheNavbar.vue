<template>
  <div class="container">
    <div class="logo">
      <h1 class="logo">YUMMY<span>Dreams</span></h1>
    </div>
    <div class="burger-menu">
      <div class="icon">
        <div class="line line1"></div>
        <div class="line line2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  methods: {
    startAnimation() {
      gsap.to('.container', { opacity: 1, duration: 3, ease: 'cinc' })
    },
  },
  mounted() {
    this.startAnimation()
  },
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 150px;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  opacity: 0;
}

.logo {
  width: 50%;
}

.logo h1 {
  margin: 0;
  padding: 0;
  font-size: 18px;
  padding-left: 155px;
  color: #222;
}

.logo h1 span {
  font-weight: 300;
}

.burger-menu {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 150px;
}

.burger-menu .icon {
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.burger-menu .icon .line {
  height: 6px;
  width: 100%;
  margin: 2px 0;
  border-radius: 10px;
  background: #222;
}

.burger-menu .icon .line2 {
  width: 60%;
}

@media screen and (max-width: 1050px) {
  .logo h1 {
    padding-left: 15%;
  }

  .burger-menu {
    padding-right: 7%;
  }
}

@media screen and (max-width: 290px) {
  .container {
    height: 100px;
  }
  .logo h1 {
    font-size: 12px;
  }

  .burger-menu .icon {
    height: 15x;
    width: 20px;
  }

  .burger-menu .icon .line {
    height: 5px;
  }
}
</style>
