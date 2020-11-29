<template>
  <search-hero v-on:fetch-recipes="fetchRecipes"></search-hero>
  <the-loading v-if="$store.state.loading"></the-loading>
  <grid-section v-else>
    <recipe-box v-for="recipe in $store.state.recipes" :key="recipe.recipe.label" :label="recipe.recipe.label" :image="recipe.recipe.image" :url="recipe.recipe.url"></recipe-box>
  </grid-section>
  <show-more-button v-on:load-more="loadMoreRecipes"></show-more-button>
  <credit-line />
</template>

<script>
import SearchHero from '../components/bodies/SearchHero.vue'
import TheLoading from '../components/elements/TheLoading.vue'
import GridSection from '../components/templates/GridSection.vue'
import RecipeBox from '../components/elements/RecipeBox.vue'
import ShowMoreButton from '../components/elements/ShowMoreButton.vue'
import CreditLine from '../components/elements/CreditLine.vue'

export default {
  name: 'Frontpage',
  components: {
    SearchHero,
    TheLoading,
    GridSection,
    RecipeBox,
    ShowMoreButton,
    CreditLine,
  },
  methods: {
    fetchRecipes(input) {
      this.$store.dispatch('fetchRecipes', input)
    },
    loadMoreRecipes() {
      this.$store.dispatch('loadMoreRecipes')
    },
  },
  created() {
    this.$store.dispatch({
      type: 'getData',
    })
  },
}
</script>

<style scoped></style>
