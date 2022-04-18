 <script setup>
import { ref } from 'vue'

defineEmits(['createNewScammer'])

const newScammer = ref({ img: "images/DefaultShopImage.jpg", count: 1, isActive: true })
</script>

<template>
    <div>
        <div class="pt-20 right-0 left-0 top-4 z-50 flex justify-center items-center md:inset-0">
            <form class="bg-white rounded-2xl px-6 pt-6 pb-8 w-1/2">
                <h3 class="text-3xl font-black text-gray-900">เพิ่มรายชื่อผู้โกง</h3>
                <p class="text-base font-medium text-gray-500">คุณสามารถเพิ่มรายชื่อผู้ที่โกงคุณได้</p>
                <div class="flex">
                    <div class="flex-1 text-gray-700 pt-3">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">ชื่อ</label>
                        <input type="text" name="firstName" id="firstName" placeholder="ชื่อ"
                            v-model="newScammer.firstName"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    </div>
                    <div class="flex-1 text-gray-700 pt-3 pl-5">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">นามสกุล</label>
                        <input type="text" name="lastName" id="lastName" placeholder="นามสกุล"
                            v-model="newScammer.lastName"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    </div>
                </div>
                <div class="pt-3">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="shopName">ชื่อร้าน</label>
                    <input type="text" name="shopName" id="shopName" placeholder="ชื่อร้าน"
                        v-model="newScammer.shopName"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                </div>
                <div class="pt-3">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="bank">ธนาคาร</label>
                    <select name="bank" id="bank" placeholder="ธนาคาร" v-model="newScammer.bank"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option>Kbank</option>
                        <option>SCB</option>
                        <option>KTB</option>
                    </select>
                </div>
                <div class="pt-3">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="bankAccount">เลขบัญชี</label>
                    <input type="text" name="bankId" id="bankId" placeholder="xxxxxxxxxx" v-model="newScammer.bankId"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                </div>
                <div class="pt-3">
                    <label class="block text-gray-700 text-sm font-bold mb-2"
                        for="bankAccount">คำอธิบายเพิ่มเติม</label>
                    <textarea type="text" name="description" id="description" placeholder="คำอธิบาย..."
                        v-model="newScammer.description"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    </textarea>
                    <div>
                        <div class="pt-3.5">
                            <button
                                class="w-full text-white bg-red-400 hover:bg-red-800 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                type="button" data-modal-toggle="add-form"
                                @click="$emit('createNewScammer', newScammer)">
                                เพิ่มรายชื่อผู้โกง
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
  
<style scope>
</style>
 
