<script setup>
import { ref, onBeforeMount } from 'vue'
import AboutUs from '../components/BaseAboutUs.vue';

const teams = ref([])

const getAboutUs = async() => {
  const res = await fetch("http://localhost:3001/aboutUs")
  if(res.status === 200){
    teams.value = await res.json()
    console.log(teams.value)
  } else console.log("can't get data")
}

onBeforeMount(async () => {
  await getAboutUs()
})

</script>

<template>
<div>
    <AboutUs :teams="teams"/>
</div>
</template>

<style>

</style>