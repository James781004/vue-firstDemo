<template>
    <div id="online-friends">
        <h2>Online Frends</h2>
        <div v-for="(friend, index) in friends" :key="index">
            <span v-if="friend.online">{{ friend.name }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Onlinefriends',
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
    }
}
</script>

<style>

</style>