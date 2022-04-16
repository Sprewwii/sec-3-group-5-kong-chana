<script setup >
import { onBeforeMount, ref, computed, reactive } from "vue";
import ScammerLists from "../components/ScammerLists.vue";
import Login from "../components/BaseLogin.vue";
import AddPopup from "../components/AddPopup.vue";
import search from "../components/icons/SearchIcon.vue";
import NotFound from "../components/icons/NotFound.vue";
import { useRouter } from "vue-router";

const appRouter = useRouter();

// let filterButton = ref(false)
const scammerLists = ref([]);

let menu = ref([1, 0, 0, 0]);
const login = ref(false);
const username = ref("");
const password = ref("");

const highlight =
    "block py-2 pr-4 pl-3 text-white bg-red-500 rounded md:bg-transparent md:p-0 md:text-red-500 text-lg font-black";
const unHighlight =
    "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 text-lg";
const iconPlus = "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z";
const iconCheck = "M5 13l4 4L19 7";

const showAddedPopup = ref(false);
const keyword = ref('')

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

function sortScammers(scammerLists) {
    // เรืยงจากมากไปน้อย
    return scammerLists.sort((a, b) => b.count - a.count);
}

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
const addNewScammer = async (newScammer) => {
    const res = await fetch("http://localhost:3001/scammerLists", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newScammer),
    });
    if (res.status === 201) {
        const addedScammer = await res.json();
        console.log(addedScammer);
        scammerLists.value.push(addedScammer);
        console.log("create success");
    } else console.log("cannot add new scammer");
};



const filterScammer = computed(() => scammerLists.value.filter((scammer) =>
    scammer.shopName.toLowerCase().includes(keyword.value.toLowerCase())
    || scammer.firstName.toLowerCase().includes(keyword.value.toLowerCase())
    || scammer.lastName.toLowerCase().includes(keyword.value.toLowerCase())
    || scammer.bankId.toLowerCase().includes(keyword.value.toLowerCase())))

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

const deleteAccount = async (deleteUserUsername) => {
  const res = await fetch(`http://localhost:3001/users/${deleteUserUsername}`, {
    method: 'DELETE'
  })
  if (res.status === 200) {
    userLists.value = userLists.value.filter((user) => user.username !== deleteUserUsername)
    console.log('deleted successfullly')
  } else console.log('error, cannot delete')
}

</script>

<template>
    <div>
        <!-- BANNER -->
        <img src="/images/Banner.jpg" class="w-full">

        <!-- SEARCH BAR -->
        <div class="form-control mt-7">
            <div class="input-group flex justify-center items-center">
                <search />
                <input type="text" v-model="keyword" placeholder="ค้นหาด้วยชื่อจริง นามสกุล ชื่อร้าน หรือเลขบัญชีผู้โกง"
                    class="input text-xl w-1/3 p-3 mr-2 border-t-0 border-l-0 border-r-0 border-b-2 border-gray-300 md:text-sm md:w-1/2 lg:text-base xl:text-2xl"
                    id="inputSearch">
            </div>
        </div>

        <!-- กรณีที่หาอะไรไม่เจอ -->
        <div v-show="filterScammer == 0" class="mt-10">
            <div class="flex justify-center">
                <NotFound />
            </div>
            <p class="text-center text-2xl font-black mt-4">ไม่มีข้อมูลที่คุณค้นหาอยู่</p>
        </div>
        
        <!-- POPUP -->
        <!-- <label class="btn btn-ghost normal-case text-xl" @click="showAddedPopup = !showAddedPopup"
                        for="my-modal">Create</label>

        <input type="checkbox" id="my-modal" class="modal-toggle">
        <div class="modal">
            <div class="modal">
                <div class="modal-box">
                    <div class="modal-action">
                        <label for="my-modal" class="btn float-right"
                            @click="showAddedPopup = !showAddedPopup">X</label>
                    </div>
                    <AddPopup v-show="showAddedPopup" @createNewScammer="addNewScammer" />
                </div>
            </div>
        </div> -->



        <!-- <Search :keywords="keyword" /> -->
        <ScammerLists :scammerLists="filterScammer" />

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

addedScammer.card:hover {
    background-color: #2c2c2c;
    transition-duration: 300ms;
    transition-timing-function: linear;
    color: white;
}

.card:hover #description {
    opacity: 1;
}
</style>