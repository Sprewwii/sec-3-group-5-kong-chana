<script setup>
import BaseLogin from '../components/BaseLogin.vue'
import { ref } from 'vue'
// import { useRouter } from "vue-router";

// const appRouter = useRouter();
const userLists = ref([])

const loginFunc = async(user) => {
    const res = await fetch('http://localhost:3001/users')
    if(res.status === 200){
        userLists.value = await res.json()
        if(userLists.some(e => e.username === user.username)){
            if(user.password === e.password){
                return true
            }else
            console.log("wrong password") 
            return false
        }else
        console.log("User not found")
        return false
    }else console.log("error, can't get data")
}

const register = async(newUser) => {
    const res = await fetch("http://localhost:3001/users",{
        method:'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(newUser)
    })
    if(res.status === 201){
        const addedUser = await res.json()
        userLists.value.push(addedUser)
        console.log("register success")
    }else console.log("Error, can't register")
}

const deleteAccount = async (deleteUserUsername) => {
  const res = await fetch(`http://localhost:3001/users/${deleteUserUsername}`, {
    method: 'DELETE'
  })
  if (res.status === 200) {
    userLists.value = userLists.value.filter((user) => user.username !== deleteUserUsername)
    console.log('deleted successfullly')
  } else console.log('error, cannot delete')
}
</script>
 
<template>
<div>
    <BaseLogin @doLogin="loginFunc"/>
</div>
</template>
 
<style>

</style>