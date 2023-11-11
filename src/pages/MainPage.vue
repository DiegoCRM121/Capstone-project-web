<template>
  <div class="q-pa-md full-height d-flex flex-center">
    <q-btn v-on:click="sendImages" color="primary" label="Send images" />
    <q-btn v-on:click="activateCamera" color="secondary" label="Active camera" class="q-ml-md" />
  </div>
</template>

<script>
export default {
  methods: {
    sendImages() {
      console.log('Sending images...');
    },
    activateCamera() {
      console.log('Activating camera...');
    }
  }
};
</script>

<style scoped>
.full-height {
  height: 100vh;
}
</style>