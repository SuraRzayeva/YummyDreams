<template>
  <div class="credit">
    <p>&copy; Designed and built by <a href="https://www.surarzayeva.com">Sura Rzayeva</a> | {{ new Date().getFullYear() }}</p>
  </div>
</template>

<style scoped>
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
</style>
