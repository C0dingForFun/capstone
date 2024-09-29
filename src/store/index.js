import { createStore } from 'vuex';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import "vue3-toastify/dist/index.css";
import {useCookies} from 'vue-cookies';
import router from '@/router';

const coastalURL  = 'https://capstone-2xa4.onrender.com/'

axios.defaults.withCredentials = true;
axios.defaults.headers = $cookies.get('token');

export default createStore({
  state: {
    users:null,
    user:null,
    rooms:null,
    room:null,
    categories:null
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
    },
    setCategory(state,payload){
      state.categories=payload
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
        toast("User fetched successfully", {
          "theme": "dark",
          "type": "success",
          "dangerouslyHTMLString": true
        })
      }
      catch (error) {
        toast("There has been an error", {
          "theme": "dark",
          "type": "error",
          "dangerouslyHTMLString": true
        })
      }
    },
    async addUser(context, payload) {
      try {
        console.log(payload);
        const { msg } = await (
          await axios.post(`${coastalURL}users/insertUser`, payload)
        ).data;
        if (msg) {
          context.dispatch("getUsers");
          toast.success(`User added successfully`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
        location.reload();
      }
    },
    async updateUser(user_id){
      try {
        let {data} = await axios.patch(`${coastalURL}users/${user_id}`);        
        commit('setUser',data)
        toast("User has been updated  successfully", {
          "theme": "dark",
          "type": "error",
          "dangerouslyHTMLString": true,
           autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        })
      }
      catch (error) {
        toast("There has been an error", {
          "theme": "dark",
          "type": "error",
          "dangerouslyHTMLString": true,
           autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        })
      }
    },
    // async deleteUser(user_id){
    //   try {
    //     let {data} = await axios.delete(`${coastalURL}users/${user_id}`); 
    //     commit('setUser',data)
    //     toast("User is has been deleted successfully", {
    //       "theme": "dark",
    //       "type": "success",
    //       "dangerouslyHTMLString": true
    //     })
    //   }
    //   catch (error) {
    //     toast("There has been an error", {
    //       "theme": "dark",
    //       "type": "error",
    //       "dangerouslyHTMLString": true
    //     })
    //   }
    // },
    async deleteUser(context, id) {
      try {
        const { msg, err } = await (
          await axios.delete(`${coastalURL}users/${id}`)
        ).data;
        if (msg) {
          context.dispatch("getUsers");
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
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
          "dangerouslyHTMLString": true,
           autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
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
          "dangerouslyHTMLString": true,
           autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        })
      }
    },
    async addRoom({commit}){
      let {data} = await axios.post(`${coastalURL}rooms/insertRoom`,info);
      console.log(data);
      
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
          "dangerouslyHTMLString": true,
           autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
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
          "dangerouslyHTMLString": true,
           autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        })
      }
    },
    async fetchCategories(){
        try {
          let {data} = await axios.get(`${coastalURL}rooms/categories`)
          console.log(data);
          commit('setCategory',data)
          toast("Fetched successfullly",{
            "theme": "dark",
            "type": "default",
            "position": "top-center",
            "transition": "zoom",
            "dangerouslyHTMLString": true,
             autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          })
      } catch (error) {
        toast("There has been an error", {
          "theme": "dark",
          "type": "error",
          "dangerouslyHTMLString": true,
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        })
      }
    },
    async loginUser({commit},info){
      let {data} =  await axios.post(`${coastalURL}users/login`,info);
      $cookies.set('token', data.token)
      $cookies.set('userRole', data.userRole)
      $cookies.set('user_id', data.user_id)
      if(data.userRole == 'admin'){
        router.push('/admin')
      }
      else{
        router.push('/profile')
      }
      if(data.message){
        toast("Login is successful",{
          "theme": "dark",
          "type": "default",
          "position": "top-center",
          "transition": "zoom",
          "dangerouslyHTMLString": true,
           autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        })
      }else{
        toast("Your password is incorrect", {
          "theme": "auto",
          "type": "error",
          "position": "top-center",
          "dangerouslyHTMLString": true,
           autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        })
      }
    },
    async bookRoom({commit},{room_id,check_in, check_out}){
      let user = $cookies.get('user_id')
      let {data} = await axios.post(`${coastalURL}booked/manageRoom`,{user_id:user,room_id,check_in, check_out});
      console.log(data);
      toast("Room has been booked", {
        "theme": "auto",
        "type": "success",
        "position": "top-center",
        "dangerouslyHTMLString": true,
         autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER,
      })
    },
  },
  
  modules: {
  }
})
