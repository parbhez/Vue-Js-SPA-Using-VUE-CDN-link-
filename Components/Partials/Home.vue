<template>
  <div class="card mt-3">
    <div class="card-title" style="margin-left: 10px; margin-top: 3px">
      <h4>{{ heading }} </h4>
      <router-link :to="{ name: 'addpost'}" class="btn btn-success btn-sm"> Add Post</router-link>
    </div>
    <div class="card-body">
      <table class="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, key) in posts" :key="row.id" v-if="posts.length">
            <td>{{row.id}}</td>
            <td>{{row.userId}}</td>
            <td>{{ row.title }}</td>
            <td>{{ row.body }}</td>
            <td>
              <router-link class="btn btn-success btn-sm" :to="'/home/edit/' + row.id">Edit</router-link>
            </td>
          </tr>
          <tr v-if="!posts.length">
             <td colspan="10" class="text-center ">Data not found</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      heading: "Home Component",
      posts:[],
    };
  },

  mounted(){
    this.get_all_posts();
  },

  methods:{
    async get_all_posts(){
        await axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            if(response.data){
                this.posts = response.data;
            }else{
                console.log('Data not found')
            }
            //console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
  }
};
</script>
