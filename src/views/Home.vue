<script setup>
import { onBeforeMount,  ref, computed, reactive } from 'vue';
import ScammerLists from '../components/ScammerLists.vue'
import Login from '../components/Login.vue'
import Search from '../components/SearchList.vue'
import router from '../router';
import AddPopup from '../components/AddPopup.vue';


// let filterButton = ref(false)
const scammerLists = ref([])
const userLists = ref([])


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
const addNewScammer = async(newScammer) => {
    const res = await fetch("http://localhost:3001/scammerLists",{
        method:'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(newScammer)
    })
    if(res.status === 201){
        const addedScammer = await res.json()
        console.log(addedScammer)
        scammerLists.value.push(addNewScammer)
        console.log("create success")
    }else console.log("cannot add new scammer")
}

const loginFunc = async(user) => {
    const res = await fetch('http://localhost:3001/users')
    if(res.status === 200){
        userLists.value = await res.json()
        if(userLists.some(e => e.username === user.username)){
            if(user.password === e.password){
                return true
            }else
            console.log("wrong password") 
            return false
        }else
        console.log("User not found")
        return false
    }else console.log("error, can't get data")
}

const register = async(newUser) => {
    const res = await fetch("http://localhost:3001/users",{
        method:'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(newUser)
    })
    if(res.status === 201){
        const addedUser = await res.json()
        scammerLists.value.push(addedUser)
        console.log("register success")
    }else console.log("Error, can't register")
}
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
        <Login/>
        <!--add Form-->
        <div class="modal">
            <div class="modal-box">
                <div class="modal-action">
                    <label for="my-modal" class="btn float-right" @click="showAddedPopup = !showAddedPopup">X</label>
                </div>
                <AddPopup v-show="showAddedPopup" @createNewScammer="addNewScammer"/>
            </div>
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