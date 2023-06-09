<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <div class="card border-0 rounded shadow">
          <div class="card-body">
            <h4>TAMBAH MHS</h4>
            <hr />
            <form @submit.prevent="store">
              <div class="form-group">
                <label for="title" class="font-weight-bold">NAMA</label>

                <input
                  type="text"
                  class="form-control"
                  v-model="post.title"
                  placeholder="Masukkan Nama MHS"
                />
                <!-- Validate -->
                <div v-if="validation.title" class="alert alert-danger mt-2">
                  {{ validation.title[0] }}>
                </div>
              </div>
              <div class="form-group">
                <label for="content" class="font-weight-bold">ALASAN</label>

                <textarea
                  class="form-control"
                  rows="4"
                  v-model="post.content"
                  placeholder="Masukkan Alasan Masuk PCR"
                ></textarea>
                <!-- Validate -->
                <div v-if="validation.content" class="alert alert-danger mt-2">
                  {{ validation.content[0] }}</div>
              </div>
              <button type="submit" class="btn btn-primary">SIMPAN</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

export default {
  setup() {
    const post = reactive({
      title: '',
      content: ''
    })
    const validation = ref([])

    const router = useRouter()

    function store() {
      let title = post.title
      let content = post.content

      axios
        .post('http://localhost:8000/api/post', { title: title, content: content })
        .then(() => {
          router.push({ name: 'post.index' })
        })
        .catch((error) => {
          validation.value = error.response.data
        })
      }
      return {
        post,
        validation,
        router,
        store
      }
  }
}
</script>

<style>
body {
  background: lightgray;
}
</style>
