import Vue from 'vue'
import Vuex from 'vuex'
import WooCommerceAPI from 'woocommerce-api'

const WooCommerce = new WooCommerceAPI({
  url: 'http://woocommerce.local',
  consumerKey: 'ck_6718c2870a3fc7145d3a050c9051d54c59b64800',
  consumerSecret: 'cs_2c98b892b382f047f51eef40a238596836c2e4ae',
  wpAPI: true,
  version: 'wc/v3'
})

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    products: []
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    }
  },
  actions: {
    async nuxtServerInit ({ commit }) {
      let products = await WooCommerce.getAsync('products')
      .then(function(result) {
        return JSON.parse(result.toJSON().body)
      })
  
      commit('setProducts', products)
    }
  }
})

export default store