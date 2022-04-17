<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router'
import KongChana from './icons/KongChanaIcon.vue';

const appRouter = useRouter()
const GoSearch = () => appRouter.push({ name: 'Home' })


</script>

<template>
    <div>
        <nav class="border-gray-200 px-2 sm:px-5 py-5 shadow-xl sticky top-0 z-50 bg-white">
            <div class="flex flex-wrap justify-between items-center ml-5 mr-5">
                <div class="flex flex-wrap justify-start items-center">
                    <KongChana />
                    <span id="logo" class="self-center text-lg font-semibold text-red-500 ml-1 text-xl">KongChana</span>
                    <!-- <p v-show="loginStatus === true" class="ml-5 font-black">ยินดีต้อนรับ {{ loginUserName }}</p> -->
                </div>

                <div class="w-full order-last md:block md:w-auto" id="mobile-menu">
                    <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li class="text-xl">
                            <router-link :to="{ name: 'Home' }">หน้าหลัก</router-link>
                        </li>
                        <li class="text-xl">
                            <router-link :to="{ name: 'AddScammer' }">เพิ่มรายชื่อผู้โกง</router-link>
                        </li>
                        <li class="text-xl">
                            <router-link :to="{ name: 'AboutUs' }">เกี่ยวกับเรา</router-link>
                        </li>
                        <li class="text-xl">
                            <div class="ml-3 relative">
          <div>           
              <img class="h-10 w-10 rounded-full" src="/images/ProfileAdmin.jpeg">
          </div>
          </div>
 
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<style>
</style>