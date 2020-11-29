<template>
  <div class="body">
    <div class="container" :style="backStyle">
      <a :href="url" target="_blank"> </a>
    </div>
    <div class="title">
      <p>{{ label }}</p>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'RecipeBox',
  props: ['image', 'label', 'url'],

  computed: {
    backStyle() {
      return {
        background: `url(${this.image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }
    },
  },
  methods: {
    startAnimation() {
      gsap.to('.container', { duration: 1, ease: 'expo', opacity: 1, y: 0 })
    },
  },
  mounted() {
    this.startAnimation()
  },
}
</script>

<style scoped>
.body {
  width: 1/3;
  height: 300px;
  position: relative;
  display: flex;
  justify-content: center;
}
.container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0;
  transform: translateY(80%);
  transition: 0.3s ease all;
  filter: contrast(0.9) saturate(0.9);
}

.container:hover {
  filter: contrast(1) saturate(1);
  height: 80%;
  width: 80%;
}

a {
  width: 100%;
  height: 100%;
  text-decoration: none;
}

.title {
  width: 100%;
  position: absolute;
  bottom: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
}

.title p {
  color: black;
  text-align: center;
}
</style>
