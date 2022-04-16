<script setup>
// import { computed } from "@vue/runtime-core"
import { computed, ref } from "@vue/runtime-core"
import People from "./icons/PeopleIcon.vue"
import Fire from "./icons/FireIcon.vue"
import Add from "./icons/AddIcon.vue"
import Check from "./icons/CheckIcon.vue"


const props = defineProps({
    scammerLists : {
        type: Array,
        default: []
    },

})

// const highlight = 'block py-2 pr-4 pl-3 text-white bg-red-500 rounded md:bg-transparent md:p-0 md:text-red-500 text-lg font-black'
// const unHighlight = 'block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 text-lg'
// const iconPlus = 'M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
// const iconCheck = 'M5 13l4 4L19 7'

// console.log('ควย' + scammers)




</script>

<template>
<!-- CARD -->
        <div>
            <div class="grid gap-10 grid-cols-2 m-10 lg:grid-cols-3 xl:grid-cols-4">
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
                                <p class="font-black text-lg">คลิกเพื่ออ่านเพิ่มเติม</p>
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                        <img :src="scammer.img" alt="shop" class="relative rounded-t-lg w-full" />
                        <span class="absolute z-20 top-2 right-2 inline-flex items-center justify-center px-2 py-1 leading-none transform translate-x-1/2 -translate-y-1/2" id="fire" v-if="scammer.count >= 100"><Fire/></span>
                    </div>

                    <div class="card-body ml-10 mr-10 mt-5">
                        <h1 class="font-black text-gray-400 text-xs">ชื่อร้านค้า</h1>
                        <h2 class="card-title text-xl font-black">{{ scammer.shopName }}</h2>
                        <p>ชื่อ: {{ scammer.firstName }} {{ scammer.lastName }}</p>
                        <p>ธนาคาร: {{ scammer.bankId }} ({{ scammer.bank }})</p>
                        <div class="flex card-actions items-center mt-2 mb-6">
                            <button id="btnGotScam" :disabled="!login ? true : (scammer.isActive ? true : false)"
                                @click="scammer.isActive = true; ++scammer.count; plusAcheck();"
                                :class="!login ? 'bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 border-b-4 border-gray-500 hover:border-gray-500 rounded flex' : scammer.isActive ? 'bg-green-400 hover:bg-green-500 text-white py-2 px-4 border-b-4 border-green-500 hover:border-green-500 rounded flex' : 'bg-red-400 hover:bg-red-500 text-white py-2 px-4 border-b-4 border-red-500 hover:border-red-500 rounded flex'">
                                <Add v-if="scammer.isActive==false" class="mr-1"/>
                                <Check v-else class="mr-1"/>
                                ฉันก็โดนโกง</button>
                            <p class="flex ml-2">
                                <People/>
                                {{ scammer.count }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<style>

</style>