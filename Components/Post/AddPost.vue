<template>
  <div class="card mt-3">
    <div class="card-title" style="margin-left: 10px; margin-top: 3px">
      <h4>{{ heading }}</h4>
      <router-link :to="{ name: 'home' }" class="btn btn-success btn-sm">
        View Post</router-link
      >
    </div>
    <div class="card-body">
      <form @submit.prevent="submit">
        <div class="form-group">
          <label for="name">Title</label>
          <input
            type="text"
            nmae="title"
            v-model="title"
            class="form-control"
            placeholder="Title"
          />
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Body</label>
          <textarea class="form-control" v-model="body" placeholder="Body"></textarea>
        </div>

        <div class="form-group">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>

        
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heading: "Add Post Component",
        userId: Math.floor(Math.random() * 10),
        title: '',
        body: ''
    }
  },

  methods:{
    async submit(){
       await axios.post('https://jsonplaceholder.typicode.com/posts/', {
                method: "POST",
                body: JSON.stringify({
                    title: this.title,
                    body: this.body,
                    userId: this.userId
                }),
            })
            .then((response) =>
                console.log(response.data),
                this.$router.push({ name: 'home' }),
            )
            .catch((error) =>
                console.log(error)
            )
    }
  }
};
</script>
