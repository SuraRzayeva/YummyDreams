<template>
  <div class="container">
    <div class="title">
      <h1>{{ label }}</h1>
    </div>
    <div class="photo">
      <img :src="image" alt="" />
    </div>
    <div class="ingredients">
      <ul>
        <li v-for="ingredient in ingredients" :key="ingredient">{{ ingredient }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheRecipe',

  data() {
    return {
      name: this.$route.params.recipeName,
      image: '',
      label: '',
      ingredients: [],
    }
  },
  mounted() {
    console.log(this.name)
    const selectedRecipe = this.$store.state.recipes.filter((recipe) => recipe.recipe.label === this.name)
    const recipe = selectedRecipe[0].recipe
    console.log(recipe.label)
    this.label = recipe.label
    this.image = recipe.image
    this.ingredients = recipe.ingredientLines
  },
}
</script>

<style scoped>
.container {
  width: 100%;
  padding: 0 150px;
}

.container .photo {
  margin: 30px 0;
}
</style>
