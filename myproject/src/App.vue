<template>
  <div id="app">
    <h1>{{title}}</h1>
    <bar />
    <Allfriends :friends="friends" @delete="deleteFriend" />
    <Onlinefriends :friends="friends" />
    <Blogs />
  </div>
</template>

<script>
import Navbar from './Navbar'
import Allfriends from './Allfriends'
import Onlinefriends from './Onlinefriends'
import Blogs from './Blog'

export default {
  name: 'app',
  components: {
    bar: Navbar,
    // Navbar --> if names is the same
    Allfriends,
    Onlinefriends,
    Blogs
  },
  data () {
    return {
      title: 'My Vue.js App',
      friends: [
                { name: 'Aaaa', online: true },
                { name: 'Bbbb', online: false },
                { name: 'Cccc', online: true },
                { name: 'Dddd', online: false },
      ]
    }
  },
  methods: {
    deleteFriend(payload){
      console.log(payload)
      this.friends = this.friends.filter(friend => {
        return friend.name !== payload.name
      })
    }
  }
}
</script>

<style>
h1 {
  color: #444;
  font-weight: normal;
  text-align: center;
}
</style>
