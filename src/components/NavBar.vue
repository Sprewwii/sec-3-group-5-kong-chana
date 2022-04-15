<script setup>
import Login from './Login.vue'
</script>

<template>
    <div>
        <nav class="border-gray-200 px-2 sm:px-5 py-5 shadow-xl sticky top-0 z-50 bg-white">
        <div class="flex flex-wrap justify-between items-center ml-5 mr-5">
            <div class="flex flex-wrap justify-start items-center" >
                <svg class="w-6 h-6" fill="none" stroke="#ef4444" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                <span id="logo" class="self-center text-lg font-semibold text-red-500 ml-1 text-xl">KongChana</span>
                <p v-show="login === true" class="ml-5 font-black">ยินดีต้อนรับ {{username}}</p>
            </div>

        <div class="w-full order-last md:block md:w-auto" id="mobile-menu">
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
                <router-link :to="{name: 'Home'}" >หน้าหลัก</router-link>
            </li>
            <li>
                <router-link :to="{name: 'Search'}" >ค้นหา</router-link>
            </li>
            <li>
                <!-- <router-link :to="{name: 'AddPopup'}">เพิ่มรายชื่อผู้โกง</router-link> -->
                <!-- <button type="button" :disabled="login ? false:true"  data-modal-toggle="add-form" @click="menuIsActive(2); keywords = ''">เพิ่มรายชื่อผู้โกง</button>
                 -->
                 <button type="button"   v-show="!showAddedPopup" data-modal-toggle="my-modal" @click="menuIsActive(2); keywords = ''">เพิ่มรายชื่อผู้โกง</button>
            </li>
            <li>
                <router-link :to="{ name: 'AboutUs' }">เกี่ยวกับเรา</router-link>
            </li>
            <li>
                <button type="button" v-show="!login" data-modal-toggle="popup-modal" @click="menuIsActive(3); keywords = ''">เข้าสู่ระบบ</button>  
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