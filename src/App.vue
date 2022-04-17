<script setup >
import NavBar from "./components/BaseNavBar.vue";


</script>

<template>
  <div>
    <div>
      <NavBar/>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scope>
/* สำหรับปรับสีตัว link ที่เราไปในหน้านั้น ๆ อยู่ */
.router-link-active {
  color: #dc2626;
}
</style>