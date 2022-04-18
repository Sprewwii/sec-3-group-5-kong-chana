<script setup>
import AddScammer from "../components/BaseAddScammer.vue";
import router from "../router";

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
        <AddScammer @createNewScammer="addNewScammer" />
    </div>
</template>
 
<style scope></style>