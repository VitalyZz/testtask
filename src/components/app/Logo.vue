<template>
  <img class="logo" :src="logo" alt="logo">
</template>

<script>
import logo from "@/assets/img/logo.png";

export default {
  name: 'logo',
  data() {
    return {
      logo: logo
    }
  }
}
</script>