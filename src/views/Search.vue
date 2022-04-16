<script setup>
import { ref, computed } from '@vue/reactivity';
import ScammerLists from '../components/ScammerLists.vue';
import { useRoute, useRouter } from 'vue-router'

let { params } = useRoute()
const keyword = ref('')
const scammerLists = ref([])

// const props = defineProps({
//     scammerLists: {
//         type: Array,
//         required: true,
//     },
// })



//GET
const getScammers = async () => {
    const res = await fetch('http://localhost:3001/scammerLists')
    if (res.status === 200) {
        scammerLists.value = await res.json()
        console.log(scammerLists.value)
    } else console.log("error, can't get data")
}

getScammers()

const filterScammer = computed(() => scammerLists.value.filter((scammer) => 
    scammer.shopName.toLowerCase().includes(keyword.value.toLowerCase())
    || scammer.firstName.toLowerCase().includes(keyword.value.toLowerCase())
    || scammer.lastName.toLowerCase().includes(keyword.value.toLowerCase())
    || scammer.bankId.toLowerCase().includes(keyword.value.toLowerCase())))

</script>

<template>
    <div>
        <p>ควย {{ this.$route.params.scammerLists }}</p>
        <!-- SEARCH BAR -->
        <div class="form-control mt-7">
            <div class="input-group flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                    stroke="#9CA3AF">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input type="text" v-model="keyword" placeholder="ค้นหาด้วยชื่อจริง นามสกุล ชื่อร้าน หรือเลขบัญชีผู้โกง"
                    class="input text-xl w-1/3 p-3 mr-2 border-t-0 border-l-0 border-r-0 border-b-2 border-gray-300 md:text-sm md:w-1/2 lg:text-base xl:text-2xl"
                    id="inputSearch">
            </div>
        </div>
        <ScammerLists :scammerLists="filterScammer"/>

    </div>
</template>

<style>
</style>