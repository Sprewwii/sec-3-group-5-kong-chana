<script setup>
import { onBeforeMount, ref, computed, reactive } from 'vue';
import NavBar from '../components/NavBar.vue'
import ScammerLists from '../components/ScammerLists.vue'
import Login from '../components/Login.vue'
import Search from '../components/SearchList.vue'
import router from '../router';

// let filterButton = ref(false)
const scammerLists = ref([])



let menu = ref([1, 0, 0, 0])
const login = ref(false)
const username = ref('')
const password = ref('')

const highlight = 'block py-2 pr-4 pl-3 text-white bg-red-500 rounded md:bg-transparent md:p-0 md:text-red-500 text-lg font-black'
const unHighlight = 'block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 text-lg'
const iconPlus = 'M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
const iconCheck = 'M5 13l4 4L19 7'



//GET
const getScammers = async () => {
    const res = await fetch('http://localhost:3001/scammerLists')
    if (res.status === 200) {
        scammerLists.value = await res.json()
        console.log(scammerLists.value)
    } else console.log("error, can't get data")
}

onBeforeMount(async () => {
    await getScammers()
})



// const showFilter = () => {
//     filterButton.value = !filterButton.value
//     if (filterButton.value === false) {
//         keywords.value = ''
//     }
// }

// const menuIsActive = (index) => {
//     menu.value = [0, 0, 0, 0]
//     menu.value[index] = 1
//     if (filterButton.value === true) {
//         filterButton.value = false
//     }
// }

// แก้
// const addScammer = (inPutShopName, inPutFirstName, inPutLastName, inPutBank, inPutBankId, inPutDescription) => {
//     scammerLists.push({
//         id: scammerLists[scammerLists.length - 1].id++,
//         shopName: inPutShopName,
//         firstName: inPutFirstName,
//         lastName: inPutLastName,
//         bank: inPutBank,
//         bankId: inPutBankId,
//         count: 1,
//         isActive: true,
//         img: "images/DefaultShopImage.jpg",
//         description: inPutDescription
//     })
// }

// alert('กรุณาเข้าสู่ระบบ เพื่อใช้ระบบเพิ่มรายชื่อผู้โกงและระบบฉันก็โดนโกง')



</script>

<template>
    <div>
        <!-- BANNER -->
        <img src="/images/Banner.jpg" class="w-full">

        <!-- กรณีที่หาอะไรไม่เจอ -->
        <div v-show="filterScammer == 0" class="mt-10">
            <div class="flex justify-center">
                <svg class="w-10 h-10 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                    </path>
                </svg>
            </div>
            <p class="text-center text-2xl font-black">ไม่มีข้อมูลที่คุณค้นหาอยู่</p>
        </div>
        <!-- <Search :keywords="keyword" /> -->
        <ScammerLists :scammerLists="scammerLists" />

        <!-- Login -->
        <Login></Login>

        <!--add Form-->
        <div id="add-form" aria-hidden="true"
            class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
            <form class="bg-white shadow-md rounded-2xl px-6 pt-6 pb-8 mb-4 w-1/2">
                <div class="pt-3.5">
                    <div class="flex">
                        <h3 class="text-3xl font-black text-gray-900">เพิ่มรายชื่อผู้โกง</h3>
                        <button type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                            data-modal-toggle="add-form">
                            <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <p class="text-base font-medium text-gray-700">กรอกข้อมูลประวัติผู้โกง</p>
                </div>
                <div class="flex">
                    <div class="flex-1 text-gray-700 pr-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">ชื่อ</label>
                        <input type="text" name="firstName" id="firstName" placeholder="ชื่อ" v-model="firstName"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    </div>

                    <div class="flex-1 text-gray-700 pb-3.5">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">นามสกุล</label>
                        <input type="text" name="lastName" id="lastName" placeholder="นามสกุล" v-model="lastName"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    </div>
                </div>

                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="shopName">ชื่อร้าน</label>
                    <input type="text" name="shopName" id="shopName" placeholder="ชื่อร้าน" v-model="shopName"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="bank">ธนาคาร</label>
                    <select type="text" name="bank" id="bank" placeholder="ธนาคาร" v-model="bank"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option>Kbank</option>
                        <option>SCB</option>
                        <option>KTB</option>
                    </select>
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="bankAccount">เลขบัญชี</label>
                    <input type="number" name="bankId" id="bankId" placeholder="xxxxxxxxxx" v-model="bankId"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2"
                        for="bankAccount">คำอธิบายเพิ่มเติม</label>
                    <textarea type="text" name="description" id="description" placeholder="คำอธิบาย..."
                        v-model="description"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
      </textarea>
                </div>

                <div class="pt-3.5">
                    <button
                        class="w-full text-white bg-red-400 hover:bg-red-800 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        type="button" data-modal-toggle="add-form"
                        @click="addScammer(shopName, firstName, lastName, bank, bankId, description); firstName = ''; lastName = ''; shopName = ''; bank = ''; bankId = ''; description = ''; menu = [1, 0, 0, 0]">
                        เพิ่มรายชื่อผู้โกง
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap');

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

#logo {
    font-family: Avenir, Helvetica, Arial, sans-serif;
}

h1,
p,
nav,
#inputSearch,
form,
#btnGotScam {
    font-family: 'Kanit', sans-serif;
}

.card:hover {
    background-color: #2c2c2c;
    transition-duration: 300ms;
    transition-timing-function: linear;
    color: white;
}

.card:hover #description {
    opacity: 1;
}
</style>