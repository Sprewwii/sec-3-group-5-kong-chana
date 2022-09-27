<script setup>
import { computed } from 'vue'
import AboutUs from '../components/BaseAboutUs.vue';
import {userManager} from "../script/userManager.js"

const teams = computed(userManager.getAboutUs)


</script>

<template>
  <div>
      <AboutUs :teams="teams"/>
  </div>
</template>

<style></style>