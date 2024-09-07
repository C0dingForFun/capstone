import { createStore } from 'vuex';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import "vue3-toastify/dist/index.css";

export default createStore({
  state: {
    users:null,
    user:null,
    rooms:null,
    room:null
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
    setRoom(state,payload){
      state.room=payload
    }
  },
  actions: {
    async getUsers({commit}){
      let [data] = await axios.get('http://localhost:8080/users')
    },
    async getUsers({commit},id){
      let [data] = await axios.get('http://localhost:8080/users',id)
    },
    async getRooms({commit}){
      try {
        let {data} = await axios.get('http://localhost:3005/rooms')
          commit('setRooms',data)
      }
      catch (error) {
        toast("There has been an error", {
          "theme": "dark",
          "type": "error",
          "dangerouslyHTMLString": true
        })
      }
    },
    async getRoom ({commit},id) {
      try {
        let {data} = await axios.get(`${apiURL}products/${id}`);        
        commit('setRoom',data}
      }
      catch (error) {
        toast("There has been an error", {
          "theme": "dark",
          "type": "error",
          "dangerouslyHTMLString": true
        })
      }
    },
  },
  modules: {
  }
})
