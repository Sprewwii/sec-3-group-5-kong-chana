<script setup>
defineProps({
    teams: {
        type: Array,
        required: true
    }
})
</script>
 
<template>
    <div class="h-screen">
        <div class="flex items-center justify-center pt-20 text-6xl font-bold text-white bg-red-500 pb-20">
            <h1 id="aboutUs">ทีมผู้พัฒนา</h1>
        </div>
        <!-- bg-gradient-to-br from-red-500 to-red-800 -->
        <div class="flex items-center justify-center justify-between pl-20 pr-20 pt-10">
            <div id="cards" class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs"
                v-for="team in teams" :key="team.id">
                <img class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" :src="team.imgPath">
                <h1 class="text-lg text-gray-700"> {{ team.name }} </h1>
                <h1 class="text-lg text-gray-700"> ({{ team.id }}) </h1>
                <h3 class="text-m text-gray-400"> {{ team.aka }} <br> is IT student in KMUTT </h3>
                <p class="text-s text-gray-400 mt-4"> {{ team.description }} </p>
                <div class=" flex items-center justify-center justify-between pl-20 pr-20 pt-5">
                    <img src="images/instagram.png" class="w-8 h-8 hover:opacity-60 duration-300">
                    <img src="images/facebook.png" class="w-8 h-8 hover:opacity-60 duration-300">
                </div>
                <!-- <button class="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">Hire Me</button> -->
            </div>
        </div>
    </div>
</template>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@400&display=swap'); */

/* #aboutUs {
    font-family: 'Kanit', sans-serif;
} */
</style>