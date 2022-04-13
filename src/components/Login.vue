<script setup>

</script>
 
<template>
<div>
        <div id="popup-modal" aria-hidden="true"
            class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center md:inset-0">
            <form class="bg-white shadow-md rounded-2xl px-6 pt-6 pb-8 w-1/2">
                <div class="pt-3.5">
                    <div class="flex">
                        <h3 class="flex text-3xl font-black text-gray-900">เข้าสู่ระบบ</h3>
                        <button type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                            data-modal-toggle="popup-modal" @click="menu = [1, 0, 0, 0]">
                            <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
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
                        @click="login = true; username.value = ''; password.value = ''; menu = [1, 0, 0, 0];">
                        เข้าสู่ระบบ
                    </button>
                </div>
            </form>
        </div>
</div>
</template>
 
<style>

</style>