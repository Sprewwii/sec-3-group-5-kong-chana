<script setup>
import AddPopup from "../components/BaseAddScammer.vue";
import router from "../router";
// import { useRoute } from 'vue-router'
// let { params } = useRoute()

// Fetch API POST สำหรับการเพิ่มข้อมูลผู้โกง
const addNewScammer = async (newScammer) => {
    const res = await fetch("http://localhost:3001/scammerLists", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newScammer),
    })
    if (res.status === 201) {
        const addedScammer = await res.json()
        alert("You add new scammer")
        router.push({name: 'Home'})
    } else console.log("cannot add new scammer")
}
</script>
 
<template>
    <div>
        <!-- <p>{{this.$router.params.id}}</p> -->
        <AddPopup @createNewScammer="addNewScammer" />
    </div>
</template>
 
<style></style>