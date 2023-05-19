import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: null,
  },
  mutations: {
    setData(state, data){
      state.data = data;
    }
  },
  actions: {
    fetchData({ commit }) {
      return axios.get('https://rickandmortyapi.com/api/character')
        .then((response) => {
          commit('setData', response.data);
          console.log('API Response',response.data)
          return response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  getters: {},
});
