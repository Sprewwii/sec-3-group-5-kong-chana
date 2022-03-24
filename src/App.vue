<script setup>
import { ref, computed, reactive } from 'vue';
let filterButton = ref(false)

const keywords =ref('')
const filterScammer = computed( () => scammerLists.filter( (scammer) => scammer.shopName.toLowerCase().includes(keywords.value.toLowerCase())
|| scammer.firstName.toLowerCase().includes(keywords.value.toLowerCase())
|| scammer.lastName.toLowerCase().includes(keywords.value.toLowerCase())
|| scammer.bankId.toLowerCase().includes(keywords.value.toLowerCase())))

let menu = ref([1, 0, 0, 0])
const login = ref(false)
const username = ref('')
const password = ref('')

const highlight = 'block py-2 pr-4 pl-3 text-white bg-red-500 rounded md:bg-transparent md:p-0 md:text-red-500 text-lg font-black'
const unHighlight = 'block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 text-lg'
const iconPlus = 'M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
const iconCheck = 'M5 13l4 4L19 7'

// let scammerLists = reactive([
//   {
//     id: 1,
//     shopName: 'AthitiITShop',
//     firstName: 'Athiti',
//     lastName: 'Kongsobsin',
//     bank: 'SCB',
//     bankId: '2392666831',
//     count: 88,
//     isActive: false,
//     img: "images/AthitiITShop.jpg",
//     description: 'โดนนายคนนี้โกงค่ะ โอนเงินซื้อมือถือแล้วไม่ส่งของให้ แจ้งความแล้วคดีก็ไม่คืบหน้า ตำรวจบอกว่าไม่สามารถทำอะไรนางได้ มีคนโดนเยอะมากค่ะ #โดนโกงเงิน #ขายไอโฟน #อธิติบางมด'
//   },
//   {
//     id: 2,
//     shopName: 'SprewBakery',
//     firstName: 'Supicha',
//     lastName: 'Piriyasiriphan',
//     bank: 'SCB',
//     bankId: '23926645555',
//     count: 15,
//     isActive: false,
//     img: "images/SprewBakery.jpg",
//     description: 'ร้านขายขนมปังออนไลน์ผ่านทวิตเตอร์ บัญชี @SprewBakery มีประวัติการโกงในด้อมอนิเมะมาก่อนที่จะเข้าวงการขายขนมออนไลน์ เปิดบัญชีได้สองอาทิตย์ ก็มีผู้เสียหายมากกว่า 10 คน'
//   },
//   {
//     id: 3,
//     shopName: 'KhobfhaGameShop',
//     firstName: 'Sarin',
//     lastName: 'Weerakun',
//     bank: 'SCB',
//     bankId: '23349008787',
//     count: 8,
//     isActive: false,
//     img: "images/KhobfhaGameShop.jpg",
//     description: 'ร้านขายเกมที่บอกว่ารอพรีออเดอร์สินค้า 2 อาทิตย์ แต่รอยัน 2 ปีแล้วยังไม่ได้เลยครับ คดีก็หมดอายุความแล้ว เพราะฉะนั้นผมเลยอยากมาแชร์ประสบการณ์ส่วนตัวที่เจอ เพื่อเตือนภัยทุก ๆ คนครับ'
//   },
//   {
//     id: 4,
//     shopName: 'JubbyShabu',
//     firstName: 'Udomchai',
//     lastName: 'Nirasrop',
//     bank: 'Kbank',
//     bankId: '05136362234',
//     count: 5,
//     isActive: false,
//     img: "images/JubbyShabu.jpg",
//     description: 'ชาบูร้านนี้บอกจะแถมหม้อต้มชาบู แต่ดันให้เป็นหม้อของเล่นมาครับ หลอกเรื่องนั้นไม่เท่าไหร่ ผมสั่ง set shabu big 5 set ก็เอามาให้แค่ set เดียวแล้วเอาเงินหนีไปไม่รับผิดชอบอะไรเลยครับ'
//   },
//   {
//     id: 5,
//     shopName: 'FahhCosmetics',
//     firstName: 'Hataiwan',
//     lastName: 'Mekvee',
//     bank: 'SCB',
//     bankId: '10010110009',
//     count: 10,
//     isActive: false,
//     img: "images/FahhCosmetics.jpg",
//     description: 'เครื่องสำอางปลอม แต่ดันบอกขายของจริง งงมาก ๆ ค่ะ ติดตามข่าวจากทวิตเตอร์ #FahhCosmeticsโกง ได้นะคะ'
//   }
// ])

const showFilter = () => {
  filterButton.value = !filterButton.value
  if(filterButton.value === false){
    keywords.value = ''
  }
}

const menuIsActive = (index) => {
  menu.value = [0, 0, 0, 0]
  menu.value[index] = 1
  if(filterButton.value === true){
    filterButton.value = false
  } 
}

const addScammer = (inPutShopName, inPutFirstName, inPutLastName, inPutBank, inPutBankId, inPutDescription) => {
  scammerLists.push({
        id: scammerLists[scammerLists.length-1].id++,
        shopName: inPutShopName,
        firstName: inPutFirstName,
        lastName: inPutLastName,
        bank: inPutBank,
        bankId: inPutBankId,
        count: 1,
        isActive: true,
        img: "images/DefaultShopImage.jpg",
        description: inPutDescription
  })
}

alert('กรุณาเข้าสู่ระบบ เพื่อใช้ระบบเพิ่มรายชื่อผู้โกงและระบบฉันก็โดนโกง')


</script>

<template>
<div>
  <!-- NAVBAR -->
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
          <button @click="menuIsActive(0); keywords = ''" :class="menu[0] === 1 ? highlight : unHighlight">หน้าหลัก</button>
        </li>
        <li>
          <button @click="menuIsActive(1); showFilter() " :class="menu[1] === 1 ? highlight : unHighlight">ค้นหา</button>
        </li>
        <li>
          <button type="button" :disabled="login ? false:true"  data-modal-toggle="add-form" @click="menuIsActive(2); keywords = ''" :class="login ? (menu[2] === 1 ? highlight : unHighlight) : 'text-gray-300 text-lg'" >เพิ่มรายชื่อผู้โกง</button>
        </li>
        <li>
          <button type="button" v-show="!login" data-modal-toggle="popup-modal" @click="menuIsActive(3); keywords = ''" :class="menu[3] === 1 ? highlight : unHighlight">เข้าสู่ระบบ</button>  
          <button type="button" v-show="login" @click="menuIsActive(3); menu = [1, 0, 0, 0];login= false; keywords = ''" :class="menu[3] === 1 ? highlight : unHighlight" >ออกจากระบบ</button>       
        </li>
      </ul>
    </div>
    </div>
  </nav>

  <!-- BANNER -->
  <img src="/images/Banner.jpg" class="w-full">

  <!-- SEARCH BAR -->
  <div v-show="filterButton" class="form-control mt-7">
    <div class="input-group flex justify-center items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="#9CA3AF">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      <input type="text" v-model="keywords" placeholder="ค้นหาด้วยชื่อจริง นามสกุล ชื่อร้าน หรือเลขบัญชีผู้โกง" class="input text-xl w-1/3 p-3 mr-2 border-t-0 border-l-0 border-r-0 border-b-2 border-gray-300 md:text-sm md:w-1/2 lg:text-base xl:text-2xl" id="inputSearch">
    </div>
  </div>

<!-- กรณีที่หาอะไรไม่เจอ -->
<div v-show="filterScammer == 0" class="mt-10">
    <div class="flex justify-center">
    <svg class="w-10 h-10 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    </div>
    <p class="text-center text-2xl font-black">ไม่มีข้อมูลที่คุณค้นหาอยู่</p> 
</div>

  <!-- CARD -->
  <div>
    <div class="grid gap-10 grid-cols-2 m-10 lg:grid-cols-3 xl:grid-cols-4">
      <div
        v-for="scammer in filterScammer"
        :key="scammer.id"
        class="card w-full bg-base-100 shadow-xl bg-clip-border bg-gray-50 rounded-lg"
      >

      <!-- HOVER IMG -->
        <div class="relative">
            <div class="grid absolute inset-0 z-10 bg-black text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-80 duration-300 rounded-t-lg hover" id="description">
                <h1 class="tracking-wider mt-10 text-xl font-black" >ประวัติผู้โกง</h1>
                <p class="mx-auto break-word mr-7 ml-7 md:text-sm lg:text-base">{{ scammer.description }}</p>
                <a href="#" class="flex items-center place-self-end mb-5 mr-5 no-underline hover:underline">
                  <p class="font-black text-lg">คลิกเพื่ออ่านเพิ่มเติม</p>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                </a>
            </div>
            <img :src="scammer.img" alt="shop" class="relative rounded-t-lg w-full"/>   
        </div>

      <div class="card-body ml-10 mr-10 mt-5"> 
        <h1 class="font-black text-gray-400 text-xs">ชื่อร้านค้า</h1>
        <h2 class="card-title text-xl font-black">{{ scammer.shopName }}</h2>
        <p>ชื่อ: {{ scammer.firstName }} {{ scammer.lastName }}</p>
        <p>ธนาคาร: {{ scammer.bankId }} ({{ scammer.bank }})</p>
        <div class="flex card-actions items-center mt-2 mb-6">
            <button id="btnGotScam" :disabled="!login ?  true:(scammer.isActive ? true:false)" @click="scammer.isActive=true; ++scammer.count; plusAcheck();"
              :class="!login ? 'bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 border-b-4 border-gray-500 hover:border-gray-500 rounded flex': scammer.isActive ? 'bg-green-400 hover:bg-green-500 text-white py-2 px-4 border-b-4 border-green-500 hover:border-green-500 rounded flex':'bg-red-400 hover:bg-red-500 text-white py-2 px-4 border-b-4 border-red-500 hover:border-red-500 rounded flex'"
            >
            <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="scammer.isActive ? iconCheck:iconPlus"></path>
            </svg>
            ฉันก็โดนโกง</button>
            <p class="flex ml-2"> 
            <svg class="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            {{scammer.count}}</p>
          </div>
      </div>
      </div>
    </div>
  </div>

<!--Login-->
  <div id="popup-modal" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center md:inset-0">
    <form class="bg-white shadow-md rounded-2xl px-6 pt-6 pb-8 w-1/2">
      <div class="pt-3.5" >
        <div class="flex">
          <h3 class="flex text-3xl font-black text-gray-900">เข้าสู่ระบบ</h3>
          <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="popup-modal" @click="menu = [1, 0, 0, 0]">
          <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
          </button>
        </div>
        <p class="text-base font-medium text-gray-500">ยินดีต้อนรับสู่เว็ปไซต์โกงชนะ</p>
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2 mt-2" for="username">ชื่อผู้ใช้</label>
        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="ชื่อผู้ใช้" v-model="username">
      </div>

      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">รหัสผ่าน</label>
        <input type="password" name="password" id="password" placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" v-model="password">
      </div>

      <div class="flex items-center justify-between">
        <a class="inline-block align-baseline font-bold text-sm text-red-300 hover:text-red-800" href="#">ยังไม่มีบัญชี? สมัครสมาชิก</a>
        <a class="inline-block align-baseline font-bold text-sm text-red-300 hover:text-red-800" href="#">ลืมรหัสผ่าน?</a>
      </div>

      <div class="pt-3.5">
        <button class="w-full text-white bg-red-400 hover:bg-red-800 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" 
        type="button"
        data-modal-toggle="popup-modal"
        @click="login = true; username.value=''; password.value=''; menu = [1, 0, 0, 0];">
          เข้าสู่ระบบ
        </button>
      </div>
    </form>
  </div>

<!--add Form-->
  <div id="add-form" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
    <form class="bg-white shadow-md rounded-2xl px-6 pt-6 pb-8 mb-4 w-1/2">
      <div class="pt-3.5"> 
      <div class="flex">
          <h3 class="text-3xl font-black text-gray-900">เพิ่มรายชื่อผู้โกง</h3>
      <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="add-form" @click="menu = [1, 0, 0, 0]">
          <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
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
        <label class="block text-gray-700 text-sm font-bold mb-2" for="bankAccount">คำอธิบายเพิ่มเติม</label>
        <textarea type="text" name="description" id="description" placeholder="คำอธิบาย..." v-model="description"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
      </textarea>
      </div>
      
      <div class="pt-3.5">
        <button class="w-full text-white bg-red-400 hover:bg-red-800 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" 
        type="button"
        data-modal-toggle="add-form"
        @click="addScammer(shopName, firstName, lastName, bank, bankId, description); firstName=''; lastName=''; shopName=''; bank=''; bankId='';description='';menu = [1, 0, 0, 0]">
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

h1,p,nav,#inputSearch,form,#btnGotScam {
    font-family: 'Kanit', sans-serif;
}

.card:hover{
  background-color: #2c2c2c;
  transition-duration: 300ms;
  transition-timing-function: linear;
  color: white;
}

.card:hover #description {
  opacity: 1;
}
</style>