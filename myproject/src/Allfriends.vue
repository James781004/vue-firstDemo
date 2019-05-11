<template>
    <div id="all-friends">
        <h2>All Frends</h2>
        <div v-for="(friend, index) in friends" :key="index">
            <span @click="unfriend(friend.name)">{{ friend.name }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Allfriends',
    // using the property in App.vue
    props: ['friends'],
    data(){
        return{
            // friends: [
            //     { name: 'Aaaa', online: true },
            //     { name: 'Bbbb', online: false },
            //     { name: 'Cccc', online: true },
            //     { name: 'Dddd', online: false },
            // ]
        }
    },
    methods: {
        unfriend(name){
            this.$emit('delete', { name })
        }
    }
}
</script>

<style>

</style>
