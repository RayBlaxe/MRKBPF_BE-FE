<template>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-12">
          <div class="card border-0 rounded shadow">
            <div class="card-body">
              <h4>DATA MAHASISWA</h4>
              <hr />
              <router-link
                :to="{ name: 'post.create' }"
                class="btn btn-md btn-success"
                >TAMBAH MHS</router-link
              >
              <table class="table table-striped table-bordered mt-4">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">NAMA</th>
                    <th scope="col">ALASAN</th>
                    <th scope="col">OPTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(post, index) in posts" :key="index">
                    <td>{{ post.title }}</td>
                    <td>{{ post.content }}</td>
                    <td class="text-center">
                      <router-link
                        :to="{ name: 'post.edit', params: { id: post.id } }"
                        class="btn btn-sm btn-primary mr-1"
                        >EDIT</router-link
                      >
                      <button
                        @click.prevent="postDelete(post.id)"
                        class="btn btn-sm btn-danger ml-1"
                      >
                        DELETE
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import { onMounted, ref } from "vue";
  
  export default {
    setup() {
      let posts = ref([]);
  
      onMounted(() => {
        axios
          .get("http://127.0.0.1:8000/api/post")
          .then((response) => {
            posts.value = response.data.data;
          })
          .catch((error) => {
            console.log(error.response.data);
          });
      });
  
      function postDelete(id) {
        axios
          .delete(`http://127.0.0.1:8000/api/post/${id}`)
          .then(() => {
            posts.value.splice(posts.value.indexOf(id), 1);
          })
          .catch((error) => {
            console.log(error.response.data);
          });
      }
  
      return {
        posts,
        postDelete,
      };
    },
  };
  </script>
  
  <style>
  body {
    background-color: lightgray;
  }
  </style>
  