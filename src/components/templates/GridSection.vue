<template>
  <div class="container">
    <div class="grid">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
export default {
  methods: {
    startAnimation() {
      gsap.to('.grid', { duration: 3, ease: 'expo', opacity: 1 })
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
}

.container .grid {
  width: 78%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  overflow: hidden;
  opacity: 0;
}

@media screen and (max-width: 1050px) {
  .container {
    padding: 30px 10%;
  }
}

@media screen and (max-width: 550px) {
  .container .grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
