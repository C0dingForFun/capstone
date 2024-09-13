<template>
    <button type="button" class="btn btn-success modalButton" data-bs-toggle="modal" :data-bs-target="'#updateUserModal'+user.userID">
      Edit
    </button>
    <!-- Modal -->
    <div class="modal fade" :id="'updateUserModal'+user.userID" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Update User</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateUser">
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="name" v-model="payload.firstName">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="surname" v-model="payload.surname">
              </div>
              <div class="mb-3">
                <input type="number" class="form-control w-50 mx-auto" placeholder="user age" v-model="payload.age">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="user role" v-model="payload.user_role">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="username" v-model="payload.username">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="user password" v-model="payload.password">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="user image" v-model="payload.image">
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-success" data-bs-dismiss="modal">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  import { toast } from 'vue3-toastify';
  import "vue3-toastify/dist/index.css";
  export default {
    name: 'UpdateUser',
    props: ['user'],
    data() {
      return {
        payload: {
          user_id: this.user.user_id,
          user_name: this.user.user_name,
          user_surename: this.user.user_surename,
          age: this.user.age,
          user_role: this.user.user_role,
          username:  this.user.username,
          password: this.user.password,
          image: this.user.image
        }
      }
    },
    methods: {
      updateUser() {
        this.$store.dispatch('updateUser', {id: this.payload.user_id, data: this.payload});
      }
    }
  }
  </script>
  <style scoped>
  </style>