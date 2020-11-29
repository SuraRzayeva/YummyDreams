<template>
  <div class="container" v-show="$store.state.showMore">
    <div class="button">
      <img v-on:click="$emit('load-more')" src="../../assets/downArrow.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowMoreButton',
  emits: ['load-more'],
}
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.button {
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  width: 40%;
  transition: 0.2s ease all;
}

img:hover {
  cursor: pointer;
  opacity: 0.7;
  transform: scale(0.9);
}
</style>
