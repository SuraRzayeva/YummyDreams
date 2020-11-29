<template>
  <the-navbar />
  <div class="circle circle-yellow"></div>
  <div class="circle circle-black"></div>
  <div class="circle circle-green"></div>
  <router-view />
</template>

<script>
import TheNavbar from './components/bodies/TheNavbar.vue'
import { gsap } from 'gsap'

export default {
  name: 'App',
  components: {
    TheNavbar,
  },
  methods: {
    startAnimations() {
      console.log('animations started')
      gsap.to('.circle-black', { duration: 1, opacity: 0.6, x: 0, ease: 'circ', delay: 2 })
      gsap.to('.circle-yellow', { duration: 1, opacity: 0.6, x: 0, ease: 'circ', delay: 2 })
      gsap.to('.circle-green', { duration: 1, opacity: 0.6, x: 0, ease: 'circ', delay: 2 })
    },
  },
  mounted() {
    this.startAnimations()
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Raleway', sans-serif;
}
body {
  font-family: 'Raleway', sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  overflow: hidden;
  max-width: 1620px;
  margin: auto;
}

.credit {
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.credit a {
  font-weight: 600;
  color: #222;
  text-decoration: none;
}
.circle {
  border-radius: 50%;
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.circle-yellow {
  width: 550px;
  height: 550px;
  left: -5%;
  top: 35%;
  background: yellow;
  transform: translateX(-100%);
}

.circle-black {
  background: black;
  width: 250px;
  height: 250px;
  right: 2%;
  top: 32%;
  transform: translateX(100%);
}

.circle-green {
  background: #3baa00;
  width: 700px;
  height: 700px;
  right: -10%;
  bottom: -10%;
  transform: translateX(100%);
}
</style>
