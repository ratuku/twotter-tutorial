import { createStore } from 'vuex';
import {UserModules} from './User';

export default createStore({
  state: {
    user: null
  },

  // Mutatuibs are functions that change the state
  mutations: {
  },

  // Functions that u call throught your application that call mutations
  // Run actions in your components
  actions: {
  },

  //
  modules: {
    User: UserModules
  }
})
