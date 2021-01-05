import Vuex from 'vuex'
import httpService from '@/services/http'
// let httpService = new httpService(this.$axios)


const createStore = () => {


    return new Vuex.Store({
        state: () => ({
            images: [],
            loading: false
        }),

        mutations: {
            SET_IMAGES(state, payload) {
                state.images = payload
            },
            SET_LOADER(state, payload) {
                state.loading = payload
            }
        },

        actions: {
            async getImageResult({ commit }, query) {
                commit("SET_LOADER", true)
                try {
                    let response = await new httpService(this.$axios).photos(query);
                    console.log(response);
                    commit('SET_IMAGES', response.data.results)
                    commit("SET_LOADER", false)
                } catch (err) {
                    console.log(err);
                    commit("SET_LOADER", false)
                }
            }

        }
    })
}

export default createStore