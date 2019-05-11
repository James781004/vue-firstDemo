<template>
    <div class="blogs">
        <input type="text" v-model="searchTerm">
        <h2>{{ blogTitle }}</h2>
        <div v-for="post in filteredPosts" :key="post.id">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body | snippet}}</p>
        </div>
        <button @click="changeTitle">changeTitle</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'Blogs',
    data(){
        return {
            blogTitle: 'Blogs',
            posts: [],
            searchTerm: ''
        }
    },
    methods: {
        changeTitle(){
            this.blogTitle = 'Hoooooo'
        },
    },
    computed: {
        filteredPosts(){
            return thie.posts.filter(post => {
                return post.title.match(this.searchTerm)
            })
        }
    },
    beforeCreate(){
        alert('before create hook')
    },
    created(){
        alert('created hook')
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            this.posts = response.data
        })
    },
    beforeUpdate(){
        alert('before update hook')
    }
}
</script>
