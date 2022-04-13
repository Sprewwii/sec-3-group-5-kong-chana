<script setup>
import { ref } from '@vue/reactivity';
import ScammerLists from '../components/ScammerLists.vue'; 

const keyword = ref('')
</script>

<template>
    <div>
        <!-- SEARCH BAR -->
        <div class="form-control mt-7">
            <div class="input-group flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                    stroke="#9CA3AF">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input type="text" v-model="keyword"
                    placeholder="ค้นหาด้วยชื่อจริง นามสกุล ชื่อร้าน หรือเลขบัญชีผู้โกง"
                    class="input text-xl w-1/3 p-3 mr-2 border-t-0 border-l-0 border-r-0 border-b-2 border-gray-300 md:text-sm md:w-1/2 lg:text-base xl:text-2xl"
                    id="inputSearch">
            </div>
        </div>
    <ScammerLists :keywords="keyword"  />

    </div>
</template>

<style>
</style>