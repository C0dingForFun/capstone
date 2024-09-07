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
      let [data] = axios.get('http://localhost:8080/users')
    },
    async getUsers({commit},id){
      let [data] = axios.get('http://localhost:8080/users',id)
    },
    async getUsers({commit}){
      let [data] = axios.get('http://localhost:8080/rooms')
    },
  },
  modules: {
  }
})
