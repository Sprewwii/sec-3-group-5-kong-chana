<script setup>
import { computed, ref } from "@vue/runtime-core"
import People from "./icons/PeopleIcon.vue"
import Fire from "./icons/FireIcon.vue"
import Add from "./icons/AddIcon.vue"
import Check from "./icons/CheckIcon.vue"
import MenuMeatball from "./icons/MenuMeatballIcon.vue"
import Delete from "./icons/DeleteIcon.vue"
import Edit from "./icons/EditIcon.vue"
import Report from "./icons/ReportIcon.vue"
import Close from "./icons/NotFound.vue"




const props = defineProps({
    scammerLists: {
        type: Array,
        default: []
    },

})
defineEmits(['deleteScammer', 'editScammer'])

// const firstName = ref('')
// const lastName = ref('')
// const shopName = ref('')
// const bank = ref('')
// const bankId = ref('')
// const description = ref('')

const selectId = ref(0);

// const hiddenDropdown = ""
function selectedScammerId(id) {
    if (selectId.value === id) {
        selectId.value = 0;
        console.log(selectId.value)
    } else {
        selectId.value = id
    }
}

const scammer = ref({})

const selectIdToEdit = ref(0)
function selectedScammerIdToEdit(modalId) {
    selectIdToEdit.value = modalId
}

// const editScam = () => router.push({name: AddScammer})
</script>

<template>
    <!-- CARD -->
    <div>
        <div class="grid gap-7 grid-cols-2 m-20 lg:grid-cols-3 xl:grid-cols-4">
            <div v-for="scammer in scammerLists" :key="scammer.id"
                class="card w-full bg-base-100 shadow-xl bg-clip-border bg-gray-50 rounded-lg">
                <!-- HOVER IMG -->
                <div class="relative">
                    <div class="grid absolute inset-0 z-10 bg-black text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-80 duration-300 rounded-t-lg hover"
                        id="description">
                        <h1 class="tracking-wider mt-10 text-xl font-black">ประวัติผู้โกง</h1>
                        <p class="mx-auto break-word mr-7 ml-7 md:text-sm lg:text-base">{{ scammer.description }}
                        </p>
                        <a href="#" class="flex items-center place-self-end mb-5 mr-5 no-underline hover:underline">
                            <p class="font-black text-lg">คลิกเพื่ออ่านเพิ่มเติม >></p>
                        </a>
                    </div>
                    <img :src="scammer.img" alt="scammer" class="relative rounded-t-lg w-full" />
                    <span
                        class="absolute z-20 top-2 right-2 inline-flex items-center justify-center px-2 py-1 leading-none transform translate-x-1/2 -translate-y-1/2"
                        id="fire" v-if="scammer.count >= 100">
                        <Fire />
                    </span>
                </div>
                <div class="card-body ml-10 mr-10 mt-5">
                    <div class="flex justify-between">
                        <h1 class="font-black text-gray-400 text-xs">ชื่อร้านค้า</h1>
                        <div class="dropdown inline-block relative">
                            <button @click="selectedScammerId(scammer.id)">
                                <MenuMeatball />
                            </button>
                            <ul class="dropdown-menu absolute text-gray-700 pt-1" v-show="selectId === scammer.id">
                                <li>
                                    <button
                                        class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap w-full flex"
                                        @click="selectedScammerIdToEdit(scammer.id)"
                                        data-modal-toggle="edit-form">
                                        <Edit />Edit
                                    </button>
                                    <div id="modal"
                                        class="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto px-4 grid lace-content-center grid"
                                        v-show="selectIdToEdit === scammer.id">
                                        <div id="edit-form" aria-hidden="true"
                                            class="overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal grid place-items-center md:h-full md:inset-0">
                                            <form class="bg-white shadow-md rounded-2xl px-6 pt-6 pb-8 mb-4 w-full">
                                                <div class="pt-3.5">
                                                    <div class="flex">
                                                        <h3 class="text-3xl font-black text-gray-900">แก้ไขรายชื่อผู้โกง
                                                        </h3>
                                                        <button type="button"
                                                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                                                            data-modal-toggle="edit-form">
                                                            <Close @click="selectedScammerIdToEdit(0)" />
                                                        </button>
                                                    </div>
                                                    <p class="text-base font-medium text-gray-700">
                                                        ระบบแก้ไขรายชื่อผู้โกง</p>
                                                </div>
                                                <div class="flex">
                                                    <div class="flex-1 text-gray-700 pt-3">
                                                        <label class="block text-gray-700 text-sm font-bold mb-2"
                                                            for="password">ชื่อ</label>
                                                        <input type="text" name="firstName" id="firstName"
                                                            placeholder="ชื่อ" v-model="scammer.firstName"
                                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                                    </div>

                                                    <div class="flex-1 text-gray-700 pt-3 pl-5">
                                                        <label class="block text-gray-700 text-sm font-bold mb-2"
                                                            for="password">นามสกุล</label>
                                                        <input type="text" name="lastName" id="lastName"
                                                            placeholder="นามสกุล" v-model="scammer.lastName"
                                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                                    </div>
                                                </div>

                                                <div class="pt-3">
                                                    <label class="block text-gray-700 text-sm font-bold mb-2"
                                                        for="shopName">ชื่อร้าน</label>
                                                    <input type="text" name="shopName" id="shopName"
                                                        placeholder="ชื่อร้าน" v-model="scammer.shopName"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                                </div>
                                                <div class="pt-3">
                                                    <label class="block text-gray-700 text-sm font-bold mb-2"
                                                        for="bank">ธนาคาร</label>
                                                    <select type="text" name="bank" id="bank" placeholder="ธนาคาร"
                                                        v-model="scammer.bank"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                                        <option>Kbank</option>
                                                        <option>SCB</option>
                                                        <option>KTB</option>
                                                    </select>
                                                </div>
                                                <div class="pt-3">
                                                    <label class="block text-gray-700 text-sm font-bold mb-2"
                                                        for="bankAccount">เลขบัญชี</label>
                                                    <input type="number" name="bankId" id="bankId"
                                                        placeholder="xxxxxxxxxx" v-model="scammer.bankId"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                                </div>
                                                <div class="pt-3">
                                                    <label class="block text-gray-700 text-sm font-bold mb-2"
                                                        for="bankAccount">คำอธิบายเพิ่มเติม</label>
                                                    <textarea type="text" name="description" id="description"
                                                        placeholder="คำอธิบาย..." v-model="scammer.description"
                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                                    </textarea>
                                                </div>

                                                <div class="pt-5">
                                                    <button
                                                        class="w-full text-white bg-red-400 hover:bg-red-800 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                                        type="button" data-modal-toggle="edit-form"
                                                        @click="$emit('editScammer',{firstName: scammer.firstName, lastName: scammer.lastName, shopName: scammer.shopName, bank: scammer.bank, bankId: scammer.bankId, description: scammer.description, img:scammer.img, isActive:scammer.isActive, id:scammer.id, count:scammer.count});selectedScammerIdToEdit(0)">
                                                        แก้ไขรายชื่อผู้โกง
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </li>

                                <!--    -->
                                <li>
                                    <button
                                        class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap w-full flex border-t border-l-0 border-r-0 border-b border-gray-300">
                                        <Report />Report
                                    </button>
                                </li>
                                <li>
                                    <button
                                        class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap w-full flex"
                                        @click="$emit('deleteScammer', scammer.id)">
                                        <Delete />Delete
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h2 class="card-title text-xl font-black">{{ scammer.shopName }}</h2>
                    <p>ชื่อ: {{ scammer.firstName }} {{ scammer.lastName }}</p>
                    <p>ธนาคาร: {{ scammer.bankId }} ({{ scammer.bank }})</p>
                    <div class="flex card-actions items-center mt-2 mb-6">
                        <button id="btnGotScam" :disabled="scammer.isActive ? true : false"
                            @click="scammer.isActive = true; ++scammer.count; plusAcheck();"
                            :class="scammer.isActive ? 'bg-green-400 hover:bg-green-500 text-white py-2 px-4 border-b-4 border-green-500 hover:border-green-500 rounded flex' : 'bg-red-400 hover:bg-red-500 text-white py-2 px-4 border-b-4 border-red-500 hover:border-red-500 rounded flex'">
                            <Add v-if="scammer.isActive == false" class="mr-1" />
                            <Check v-else class="mr-1" />
                            ฉันก็โดนโกง
                        </button>
                        <p class="flex ml-2">
                            <People />
                            {{ scammer.count }}
                        </p>
                    </div>
                </div>
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

/* .dropdown:hover .dropdown-menu {
  display: block;
} */
</style>