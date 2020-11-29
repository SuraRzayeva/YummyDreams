<template>
  <div class="container">
    <div class="dots">
      <div class="dot dot1"></div>
      <div class="dot dot2"></div>
      <div class="dot dot3"></div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
}

.dots {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dot {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  margin: 10px;
  background: transparent;
  animation-name: dotAnimate;
  animation-duration: 0.6s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  opacity: 1;
}

.dot1 {
  animation-delay: 0s;
}

.dot2 {
  animation-delay: 0.3s;
}

.dot3 {
  animation-delay: 0.5s;
}

@keyframes dotAnimate {
  from {
    background: transparent;
  }
  to {
    background: #3baa00;
    opacity: 1;
  }
}
</style>
