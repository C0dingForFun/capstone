import { createStore } from 'vuex';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import "vue3-toastify/dist/index.css";
import {useCookies} from 'vue-cookies';
import router from '@/router';

const coastalURL  = 'https://capstone-2xa4.onrender.com/'

axios.defaults.withCredentials = true;
axios.defaults.headers = $cookies.get('token');
// const userInfo = cookies.get('VerifiedUser')

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
        let {data} = await axios.get(`${coastalURL}users/${id}`);        
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
    async addUser({commit},info){
      let data = await axios.post(`${coastalURL}users/insertUser`,info);
      // console.log(data);
    },
    async updateUser(id){
      try {
        let {data} = await axios.patch(`${coastalURL}users/${id}`);        
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
    async deleteUser(id){
      try {
        let {data} = await axios.delete(`${coastalURL}users/${id}`);        
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
    async addRoom({commit}){
      let data = await axios.post(`${coastalURL}rooms/insertRoom`,info);
      // console.log(data);
      
    },
    async updateRoom({commit},id){
      try {
        let {data} = await axios.patch(`${coastalURL}rooms/${id}`);        
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
    async deleteRoom(id){
      try {
        let {data} = await axios.delete(`${coastalURL}rooms/${id}`);        
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
    async loginUser({commit},info){
      let {data} =  await axios.post(`${coastalURL}users/login`,info);
      $cookies.set('token', data.token)
      $cookies.set('userRole', data.userRole)
      if(data.userRole == 'admin'){
        router.push('/admin')
      }
      else{
        router.push('/')
      }
      if(data.message){
        toast("Login is successful",{
          "theme": "dark",
          "type": "default",
          "position": "top-center",
          "transition": "zoom",
          "dangerouslyHTMLString": true
        })
      }else{
        toast("Your password is incorrect", {
          "theme": "auto",
          "type": "error",
          "position": "top-center",
          "dangerouslyHTMLString": true
        })
      }
    },
    async bookRoom({commit},room_id){
      let {data} = await axios.post(`${coastalURL}cart`,{id:room_id});
      console.log(data);
    },
  },
  
  modules: {
  }
})
