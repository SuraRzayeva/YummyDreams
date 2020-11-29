import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    loading: false,
    ID: '67fc49cb',
    KEY: '4c7bb4d141e7770fa54fe1f60f3278bd',
    recipes: [],
    theme: 'french',
    number: 12,
    searchedTerm: null,
    newNumber: 34,
    showMore: true,
  },
  mutations: {
    setLoading(state, action) {
      if (action === true) {
        state.loading = true
      } else {
        state.loading = false
      }
    },
    setShowMore(state, action) {
      if (action === true) {
        state.showMore = true
      } else {
        state.showMore = false
      }
    },
  },
  actions: {
    async getData(context) {
      context.commit('setLoading', true)
      try {
        const results = await axios.get(`https://api.edamam.com/search?q=${context.state.theme}&app_id=${context.state.ID}&app_key=${context.state.KEY}&from=0&to=${context.state.number}`)
        const data = await results
        context.state.recipes = data.data.hits
        console.log(data.data.hits)
        context.commit('setLoading', false)
        console.log(data.data.more)
        context.commit('setShowMore', !data.data.more ? false : true)
      } catch (e) {
        console.log('the error is' + e)
      }
    },
    loadMoreRecipes(context) {
      const fetchMore = async () => {
        try {
          let newArray
          if (context.state.searchedTerm) {
            context.state.newNumber = context.state.newNumber + 34
            const results = await axios.get(`https://api.edamam.com/search?q=${context.state.searchedTerm}&app_id=${context.state.ID}&app_key=${context.state.KEY}&from=${context.state.number}&to=${context.state.newNumber}`)
            const data = await results
            newArray = data.data.hits
            console.log(data.data.more)
          } else {
            context.state.newNumber = context.state.newNumber + 34
            const results = await axios.get(`https://api.edamam.com/search?q=${context.state.theme}&app_id=${context.state.ID}&app_key=${context.state.KEY}&from=${context.state.number}&to=${context.state.newNumber}`)
            const data = await results
            newArray = data.data.hits
            console.log(data.data.more)
          }
          context.state.recipes = [...context.state.recipes, ...newArray]
        } catch (e) {
          console.log('the error is' + e)
        }
      }
      fetchMore()
    },
    fetchRecipes(context, input) {
      context.state.searchedTerm = input
      const getData = async () => {
        context.commit('setLoading', true)
        try {
          const results = await axios.get(`https://api.edamam.com/search?q=${input}&app_id=${context.state.ID}&app_key=${context.state.KEY}&from=0&to=${context.state.number}`)
          const data = await results
          context.state.recipes = data.data.hits
          context.commit('setLoading', false)
          console.log(data.data.more)
          context.commit('setShowMore', !data.data.more ? false : true)
        } catch (e) {
          console.log('the error is' + e)
        }
      }
      getData()
    },
  },
  modules: {},
})
