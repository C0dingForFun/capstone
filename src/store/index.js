import { createStore } from 'vuex';
import axios from 'axios'

export default createStore({
  state: {
    users:null,
    user:null,
    rooms:null
  },
  getters: {
  },
  mutations: {
    setUsers(state,payload){
      state.users=payload
    },
    setUser(state,payload){
      state.user=payload
    },
    setRooms(state,payload){
      state.rooms=payload
    }
  },
  actions: {
    async getUsers({commit}){
      let users = axios.get()
    },
    async getUsers({commit},id){
      let user = axios.get()
    },
    async getUsers({commit}){
      let users = axios.get()
    },
  },
  modules: {
  }
})
