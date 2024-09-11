import { createStore } from 'vuex';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import "vue3-toastify/dist/index.css";

const coastalURL  = 'https://capstone-2xa4.onrender.com/'

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
    },
    setRoom(state,payload){
      state.room=payload
    }
  },
  actions: {
    async getUsers({commit}){
      try {
        let {data} = await axios.get(`${coastalURL}users`)
          commit('setUsers',data)
      }
      catch (error) {
        toast("There has been an error", {
          "theme": "dark",
          "type": "error",
          "dangerouslyHTMLString": true
        })
      }
    },
    async getUser({commit},id){
      try {
        let {data} = await axios.get(`${coastalURL}users/${user_id}`);        
        commit('setUser',data)
      }
      catch (error) {
        toast("There has been an error", {
          "theme": "dark",
          "type": "error",
          "dangerouslyHTMLString": true
        })
      }
    },
    async getRooms({commit}){
      try {
        let {data} = await axios.get(`${coastalURL}rooms`)
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
    async getRoom ({commit},room_id) {
      try {
        let {data} = await axios.get(`${coastalURL}rooms/${room_id}`);        
        commit('setRoom',data)
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
