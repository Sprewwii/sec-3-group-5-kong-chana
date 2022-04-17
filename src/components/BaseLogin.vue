<script setup>
import { ref } from 'vue'
defineEmits(['doLogin'])

const username = ref('')
const password = ref('')

</script>

<template>
<div>
        <div class="overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 flex justify-center items-center md:inset-0">
            <form class="bg-white rounded-2xl px-6 pt-6 pb-8 w-1/2">
                <div class="pt-3.5">
                    <div class="flex">
                        <h3 class="flex text-3xl font-black text-gray-900">เข้าสู่ระบบ</h3>
                    </div>
                    <p class="text-base font-medium text-gray-500">ยินดีต้อนรับสู่เว็ปไซต์โกงชนะ</p>
                </div>

                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2 mt-2" for="username">ชื่อผู้ใช้</label>
                    <input type="email" name="email" id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="ชื่อผู้ใช้" v-model="username">
                </div>

                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">รหัสผ่าน</label>
                    <input type="password" name="password" id="password" placeholder="••••••••"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        v-model="password">
                </div>

                <div class="flex items-center justify-between">
                    <a class="inline-block align-baseline font-bold text-sm text-red-300 hover:text-red-800"
                        href="#">ยังไม่มีบัญชี? สมัครสมาชิก</a>
                    <a class="inline-block align-baseline font-bold text-sm text-red-300 hover:text-red-800"
                        href="#">ลืมรหัสผ่าน?</a>
                </div>

                <div class="pt-3.5">
                    <button
                        class="w-full text-white bg-red-400 hover:bg-red-800 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        type="button" data-modal-toggle="popup-modal"
                        @click="$emit('doLogin',{username: username, password: password});username.value = ''; password.value = ''">
                        เข้าสู่ระบบ
                    </button>
                </div>
            </form>
        </div>
</div>
</template>

<style>

</style>