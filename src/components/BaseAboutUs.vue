<script setup>
import Screwdriver from "./icons/ScrewdriverIcon.vue"
defineProps({
    teams: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <div class="h-screen" id="aboutUsPage">
        <div class="flex items-center justify-center pt-20 text-6xl font-bold text-white bg-red-500 pb-20">
            <Screwdriver />
            <h1 class="mr-5 ml-5">ทีมผู้พัฒนา</h1>
            <Screwdriver />
        </div>
        <!-- bg-gradient-to-br from-red-500 to-red-800 -->
        <div class="flex items-center justify-center justify-between pl-20 pr-20 pt-10 grid gap-10 grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <div id="cards" class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs h-full"
                v-for="team in teams" :key="team.id">
                <img class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" :src="team.imgPath">
                <h2 class="text-lg text-gray-700"> {{ team.name }} </h2>
                <h2 class="text-lg text-gray-700"> ({{ team.id }}) </h2>
                <h3 class="text-m text-gray-400"> {{ team.aka }} <br> is IT student in KMUTT </h3>
                <p class="text-s text-gray-400 mt-4"> {{ team.description }} </p>
                <div class=" flex items-center justify-center justify-between pt-5 pl-8 pr-8 flex items-center justify-center justify-between w-full">
                    <img src="images/instagram.png" class="w-10 h-10 hover:opacity-60 duration-300">
                    <img src="images/facebook.png" class="w-10 h-10 hover:opacity-60 duration-300">
                </div>
                <!-- <button class="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">Hire Me</button> -->
            </div>
        </div>
    </div>
</template>

<style scope>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@200&display=swap');

#aboutUsPage {
    font-family: 'Kanit', sans-serif;
}
</style>