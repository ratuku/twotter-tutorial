//import { createStore } from 'vuex';

export const UserModules = {
    namespaced: true,

    state: {
        user: null
    },

    // Mutatuibs are functions that change the state
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        }
    },

    // Functions that u call throught your application that call mutations
    // Run actions in your components
    actions: {
        setUser({commit}, user) {
            commit('SET_USER', user);
        }
    },

    //
    modules: {

    }
}