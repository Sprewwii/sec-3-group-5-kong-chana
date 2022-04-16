<script setup>
import { useRouter } from 'vue-router'
import KongChana from './icons/KongChanaIcon.vue';
const appRouter = useRouter()
const GoSearch = () => appRouter.push({ name: 'Home' })


const login = false
</script>

<template>
    <div>
        <nav class="border-gray-200 px-2 sm:px-5 py-5 shadow-xl sticky top-0 z-50 bg-white">
        <div class="flex flex-wrap justify-between items-center ml-5 mr-5">
            <div class="flex flex-wrap justify-start items-center" >
                <KongChana />
                <span id="logo" class="self-center text-lg font-semibold text-red-500 ml-1 text-xl">KongChana</span>
                <p v-show="login === true" class="ml-5 font-black">ยินดีต้อนรับ {{username}}</p>
            </div>

        <div class="w-full order-last md:block md:w-auto" id="mobile-menu">
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
                <router-link :to="{name: 'Home'}" >หน้าหลัก</router-link>
            </li>
            <!-- <li>
                <router-link :to="{name: 'Search'}" >(เอาไอเหี้ยนี้ออกไป)ค้นหา</router-link>
            </li> -->
            <li>
                <!-- <router-link :to="{name: 'AddPopup'}">เพิ่มรายชื่อผู้โกง</router-link> -->
                <!-- <button type="button" :disabled="login ? false:true"  data-modal-toggle="add-form" @click="menuIsActive(2); keywords = ''">เพิ่มรายชื่อผู้โกง</button>
                -->
                <!-- <button type="button"  data-modal-toggle="add-form" @click="menuIsActive(2); keywords = ''">เพิ่มรายชื่อผู้โกง</button> -->
            </li>
            <li>
                <router-link :to="{ name: 'AboutUs' }">เกี่ยวกับเรา</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Login' }" v-show="!login">เข้าสู่ระบบ</router-link>
                <!-- <button type="button" v-show="!login" data-modal-toggle="popup-modal" @click="menuIsActive(3); keywords = ''">เข้าสู่ระบบ</button>   -->
                <button type="button" v-show="login" @click="menuIsActive(3);login= false; keywords = ''">ออกจากระบบ</button>       
            </li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
</template>

<style>

</style>