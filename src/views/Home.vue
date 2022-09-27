<script setup >
import { onBeforeMount, ref, computed, reactive } from "vue";
import BaseScammerListsAndEdits from "../components/BaseScammerListsAndEdits.vue";
import search from "../components/icons/SearchIcon.vue";
import NotFound from "../components/icons/XIcon.vue";
import { useRouter } from "vue-router";
import { userManager } from "../script/userManager.js";

const appRouter = useRouter()
const goBack = () => appRouter.go(-1)
const scammerLists = computed(() => userManager.getScammers()) 


const keyword = ref('');


// onBeforeMount(() => {
//     const scammerLists = ref([]);
// });

// filter รายชื่อผู้โกง ตาม keyword ข้างใน searchbox
const filterScammer = computed(() => scammerLists.value.filter((scammer) =>
    scammer.shopName.toLowerCase().includes(keyword.value.toLowerCase())
    || scammer.firstName.toLowerCase().includes(keyword.value.toLowerCase())
    || scammer.lastName.toLowerCase().includes(keyword.value.toLowerCase())
    || scammer.bankId.toLowerCase().includes(keyword.value.toLowerCase())))


function sortScammers(scammerLists) {
    // เรืยงจากมากไปน้อย
    return scammerLists.sort((a, b) => b.count - a.count);
}

// // Fetch API DELETE สำหรับการลบข้อมูลรายชื่อผู้โกงใน db.json
// const removeScammer = async (deleteScammerId) => {
//     const confirmDelete = ref(false)
//     confirmDelete.value = confirm(`Do you want to delete this scammer`)
//     console.log(confirmDelete)
//     if (confirmDelete.value == true) {
//         // const res = await fetch(`http://localhost:3001/scammerLists/${deleteScammerId}`, { method: 'DELETE' })
//         // if (res.status === 200) {
//             scammerLists.value = scammerLists.value.filter((scammerSelected) => scammerSelected.id !== deleteScammerId)
//             console.log("delete success")
//         // } else console.log("can't delete data")
//     } else console.log("YOU CANCEL")
// }

// Fetch API put สำหรับแก้ไขข้อมูลรายชื่อผู้โกงใน db.json
const editInfo = async (scamm) => {
    await userManager.editInfo(scamm)
//     console.log(scamm.id)
//     // const res = await fetch(`http://localhost:3001/scammerLists/${scamm.id}`, {
//     //     method: 'PUT',
//     //     headers: {
//     //         'content-type': 'application/json'
//     //     },
//     //     body: JSON.stringify({
//     //         shopName: scamm.shopName,
//     //         firstName: scamm.firstName,
//     //         lastName: scamm.lastName,
//     //         bank: scamm.bank,
//     //         bankId: scamm.bankId,
//     //         count: scamm.count,
//     //         isActive: scamm.isActive,
//     //         img: scamm.img,
//     //         description: scamm.description
//     //     })
//     // })
//     // if (res.status === 200) {
//         // const editedScammer = await res.json()
//         scammerLists.value = scammerLists.value.map((scammer) =>
//             scammer.id === scamm.id ? {
//                 ...scammer,
//                 shopName: scamm.shopName,
//                 firstName: scamm.firstName,
//                 lastName: scamm.lastName,
//                 bank: scamm.bank,
//                 bankId: scamm.bankId,
//                 count: scamm.count,
//                 isActive: scamm.isActive,
//                 img: scamm.img,
//                 description: scamm.description
//             } : scammer
//         )
//         console.log("edited successfully")
//         alert('Edited succesfully')
//     // } else console.log("error, can't edit")
}

const removeScammer = async (scamm) => {
    await userManager.removeScammer(scamm);
}

</script>

<template>
    <div>
        <!-- BANNER -->
        <img src="../Asset/Banner.jpg" class="w-full">

        <!-- SEARCH BAR -->
        <div class="form-control mt-10">
            <div class="input-group flex justify-center items-center">
                <search />
                <input type="text" v-model="keyword" placeholder="ค้นหาด้วยชื่อจริง นามสกุล ชื่อร้าน หรือเลขบัญชีผู้โกง"
                    class="input text-xl w-1/3 p-3 mr-2 border-t-0 border-l-0 border-r-0 border-b-2 border-gray-300 md:text-sm md:w-1/2 lg:text-base xl:text-2xl"
                    id="inputSearch">
            </div>
        </div>

        <BaseScammerListsAndEdits :scammerLists="filterScammer" @editScammer="editInfo" @deleteScammer="removeScammer" />

        <!-- กรณีที่หาอะไรไม่เจอ -->
        <div v-show="filterScammer == 0" class="mt-10">
            <div class="flex justify-center">
                <NotFound />
            </div>
            <p class="text-center text-2xl font-black mt-4">ไม่มีข้อมูลที่คุณค้นหาอยู่</p>
        </div>
    </div>
</template>

<style scope>
</style>