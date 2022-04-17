<script setup >
import { onBeforeMount, ref, computed, reactive } from "vue";
import ScammerLists from "../components/BaseScammerLists.vue";
// import AddScammer from "../components/BaseAddScammer.vue";
import search from "../components/icons/SearchIcon.vue";
import NotFound from "../components/icons/NotFound.vue";
import { useRouter } from "vue-router";

const appRouter = useRouter()
const goBack = () => appRouter.go(-1)

// let filterButton = ref(false)
const scammerLists = ref([]);

const showAddedPopup = ref(false);
const keyword = ref('');

//GET
const getScammers = async () => {
    const res = await fetch("http://localhost:3001/scammerLists");
    if (res.status === 200) {
        scammerLists.value = await res.json();
        sortScammers(scammerLists.value);
        console.log(scammerLists.value);
    } else console.log("error, can't get data");
};

onBeforeMount(async () => {
    await getScammers();
});

const filterScammer = computed(() => scammerLists.value.filter((scammer) =>
    scammer.shopName.toLowerCase().includes(keyword.value.toLowerCase())
    || scammer.firstName.toLowerCase().includes(keyword.value.toLowerCase())
    || scammer.lastName.toLowerCase().includes(keyword.value.toLowerCase())
    || scammer.bankId.toLowerCase().includes(keyword.value.toLowerCase())))


function sortScammers(scammerLists) {
    // เรืยงจากมากไปน้อย
    return scammerLists.sort((a, b) => b.count - a.count);
}

const removeScammer = async (deleteScammerId) => {
    const confirmDelete = ref(false)
    confirmDelete.value = confirm(`Do you want to delete this scammer`)
    console.log(confirmDelete)
    if (confirmDelete.value == true) {
        const res = await fetch(`http://localhost:3001/scammerLists/${deleteScammerId}`, { method: 'DELETE' })
        if (res.status === 200) {
            scammerLists.value = scammerLists.value.filter((scammerSelected) => scammerSelected.id !== deleteScammerId)
            console.log("delete success")
        } else console.log("can't delete data")
    } else console.log("YOU CANCEL")
}

function openModal(modalId) {
    modal = document.getElementById(modalId)
    modal.classList.remove('hidden')
}

function closeModal() {
    modal = document.getElementById('modal')
    modal.classList.add('hidden')
}

//Edit
const editInfo = async (scamm) => {
    console.log(scamm.id)
    const res = await fetch(`http://localhost:3001/scammerLists/${scamm.id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            shopName: scamm.shopName,
            firstName: scamm.firstName,
            lastName: scamm.lastName,
            bank: scamm.bank,
            bankId: scamm.bankId,
            count: scamm.count,
            isActive: scamm.isActive,
            img: scamm.img,
            description: scamm.description
        })
    })
    if (res.status === 200) {
        const editedScammer = await res.json()
        scammerLists.value = scammerLists.value.map((scammer) => 
        scammer.id === editedScammer.id ? {
            ...scammer, 
            shopName: scamm.shopName,
            firstName: scamm.firstName,
            lastName: scamm.lastName,
            bank: scamm.bank,
            bankId: scamm.bankId,
            count: scamm.count,
            isActive: scamm.isActive,
            img: scamm.img,
            description: scamm.description
            } : scammer    
        )
        console.log("edited successfully")
        alert('Edited succesfully')
    } else console.log("error, can't edit")
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
        <ScammerLists :scammerLists="filterScammer" @editScammer="editInfo" @deleteScammer="removeScammer"/>

        <!-- กรณีที่หาอะไรไม่เจอ -->
        <div v-show="filterScammer == 0" class="mt-10">
            <div class="flex justify-center">
                <NotFound />
            </div>
            <p class="text-center text-2xl font-black mt-4">ไม่มีข้อมูลที่คุณค้นหาอยู่</p>
        </div>
    </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap");

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
    font-family: "Kanit", sans-serif;
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