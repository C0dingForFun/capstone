<template>
    <div class="admin">
      <!-- USERS TABLE -->
      <h2 class="mt-5">Users Table</h2>
      <addUser/>
      <div class="container table-responsive">
        <div class="col">
          </div>
        <table class="table users-table">
          <thead class="table-dark">
            <tr>
              <th>User ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>User Age</th>
              <th>User Role</th>
              <th>Username</th>
              <th>Password</th>
              <th>Image</th>
              <th></th>
            </tr>
          </thead>
          <tbody v-if="users()">
            <tr v-for="user in users()" :key="user.user_id">
              <td>{{ user.user_id }}</td>
              <td>{{ user.user_name }}</td>
              <td>{{ user.user_surname }}</td>
              <td>{{ user.age }}</td>
              <td>{{ user.user_role }}</td>
              <td>{{ user.username }}</td>
              <td>{{ user.password }}</td>
              <td>
                <a :href="user.image" target="_blank">
                  <img :src="user.image" alt="User Profile" width="50">
                </a>
              </td>
              <td>
                <updateUser :user="user" />
                <button class="btn btn-danger deleteButton" @click="deleteUser(user.user_id)">Delete</button>
              </td>
            </tr>
  </tbody>
        </table>
      </div>
      <!-- ROOMS TABLE -->
      <h2>Rooms Table</h2>
      <addProduct/>
      <div class="container table-responsive">
        <table class="table rooms-table">
          <thead class="table-dark">
            <tr>
              <th>Room ID</th>
              <th>Room Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Room URL</th>
              <th></th>
            </tr>
          </thead>
          <tbody v-if="rooms">
            <tr v-for="room in rooms()" :key="room.room_id">
              <td>{{ room.room_id }}</td>
              <td>{{ room.room_name }}</td>
              <td>{{ room.room_category }}</td>
              <td>R {{ room.price }}</td>
              <td>
                <a :href="room.image" target="_blank">
                  <img :src="room.image" alt="Room Image" width="50">
                </a>
              </td>
              <td>
                <updateProduct :room="room"/>
                <button class="btn btn-danger deleteButton" @click.prevent="deleteProduct(room.room_id)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  <script>
  import updateUser from '@/components/UpdateUser.vue';
  // import updateProduct from '@/components/UpdateProduct.vue';
  // import addProduct from '@/components/AddProduct.vue';
  // import addUser from '@/components/AddUser.vue';
  export default {
    components: {
      updateUser,
      // updateProduct,
      // addProduct,
      // addUser,
    },
    mounted() {
      this.$store.dispatch('getRooms');
      this.$store.dispatch('getUsers');
    },
    methods: {
      rooms(){
        return this.$store.state.rooms;
      },
      users(){
        return this.$store.state.users;
      },
      deleteUser(user_id) {
        this.$store.dispatch('deleteUser', user_id );
      },
      deleteRoom(room_id) {
        this.$store.dispatch('deleteRoom', room_id );
      },
      updateUser(user) {
        let editUser = {
          user_id: this.user.user_id,
          user_name: this.user.user_name,
          user_surename: this.user.user_surename,
          age: this.user.age,
          user_role: this.user.user_role,
          username:  this.user.username,
          password: this.user.password,
          image: this.user.image
        };
        this.$store.dispatch('updateUser', { id: user.user_id, data: editUser });
      },
      // updateProduct(product) {
      //   let editProduct = {
      //     productID: product.prodID,
      //     productName: product.prodName,
      //     quantity: product.quantity,
      //     amount: product.amount,
      //     category: product.category,
      //     prodURL: product.prodURL,
      //   };
      //   this.$store.dispatch('updateProduct', { id: product.prodID, data: editProduct });
      // }
    }
  }
  </script>
  <style scoped>
  h2{
    font-weight: bold;
  }
  .admin{
    margin-top:20vh;
  }
  /* Responsive Styles for Users Table */
  @media (max-width: 768px) {
    .users-table {
      width: 100%;
      border-collapse: collapse;
    }
    .users-table thead {
      display: none;
    }
    .users-table tr {
      display: block;
      margin-bottom: 10px;
      border: 1px solid #ddd;
    }
    .users-table td {
      display: block;
      text-align: right;
      font-size: 13px;
      border-bottom: 1px dotted #ccc;
      padding: 10px;
      position: relative;
    }
    .users-table td:before {
      content: attr(data-label);
      float: left;
      text-transform: uppercase;
      font-weight: bold;
    }
    .users-table td:last-child {
      border-bottom: 0;
    }
    .users-table td:nth-child(1):before {
      content: "Product ID";
    }
    .users-table td:nth-child(2):before {
      content: "Product Name";
    }
    .users-table td:nth-child(3):before {
      content: "Quantity";
    }
    .users-table td:nth-child(4):before {
      content: "Amount";
    }
    .users-table td:nth-child(5):before {
      content: "Category";
    }
    .users-table td:nth-child(6):before {
      content: "Product URL";
    }
    .users-table td:nth-child(7):before {
      content: "Action";
    }
  }
  /* Responsive Styles for Products Table */
  @media (max-width: 768px) {
    .rooms-table {
      width: 100%;
      border-collapse: collapse;
    }
    .rooms-table thead {
      display: none;
    }
    .rooms-table tr {
      display: block;
      margin-bottom: 10px;
      border: 1px solid #ddd;
    }
    .rooms-table td {
      display: block;
      text-align: right;
      font-size: 13px;
      border-bottom: 1px dotted #ccc;
      padding: 10px;
      position: relative;
    }
    .rooms-table td:before {
      content: attr(data-label);
      float: left;
      text-transform: uppercase;
      font-weight: bold;
    }
    .rooms-table td:last-child {
      border-bottom: 0;
    }
    .rooms-table td:nth-child(1):before {
      content: "Product ID";
    }
    .rooms-table td:nth-child(2):before {
      content: "Product Name";
    }
    .rooms-table td:nth-child(3):before {
      content: "Quantity";
    }
    .rooms-table td:nth-child(4):before {
      content: "Amount";
    }
    .rooms-table td:nth-child(5):before {
      content: "Category";
    }
    .rooms-table td:nth-child(6):before {
      content: "Product URL";
    }
    .rooms-table td:nth-child(7):before {
      content: "Action";
    }
  }
  </style>  