import { createStore } from 'vuex';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import "vue3-toastify/dist/index.css";
import {usedCookies} from 'vue-cookies';
import router from '@/router';

const coastalURL  = 'https://capstone-2xa4.onrender.com/'

axios.defaults.withCredentials = true;
axios.defaults.headers = $cookies.get('token');

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
  async addUser({commit},info){
    let data = await axios.post(`${coastalURL}users/insertUser`,info);
    // console.log(data);
  },
  async loginUser({commit},info){
    let {data} =  await axios.post(`${coastalURL}users/login`,info);
    // console.log(data);
    $cookies.set('token', data.token)
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
    await router.push('/home');
    location.reload();
  },
  modules: {
  }
})
