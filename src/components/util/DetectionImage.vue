<template>
    <div class="q-pa-md d-flex flex-center">
      <div class="q-gutter-md row items-start" style="max-width: 600px;">
        <q-uploader
          style="width: 100%;"
          url="http://localhost:4444/upload"
          label="Send some images"
          multiple
          accept=".jpg, image/*"
          @rejected="onRejected"
          @uploaded="onUploaded"
        />
      </div>
      <div class="q-gutter-md row items-start">
        <q-carousel
          animated
          v-model="slide"
          arrows
          navigation
          infinite
          style="max-width: 600px; width: 100%;"
        >
          <q-carousel-slide
            v-for="(image, index) in uploadedImages"
            :key="index"
            :img-src="image"
          />
        </q-carousel>
      </div>
    </div>
  </template>
  
  <script>
  import { useQuasar } from 'quasar'
  import { ref } from 'vue'
  
  export default {
    setup () {
      const $q = useQuasar()
      const uploadedImages = ref([]) // Almacenar las URL de las imágenes cargadas
      const slide = ref(1)
  
      function onRejected (rejectedEntries) {
        $q.notify({
          type: 'negative',
          message: `${rejectedEntries.length} file(s) did not pass validation constraints`
        })
      }
  
      function onUploaded (files) {
        // Manejar las imágenes cargadas y guardar las URL en uploadedImages
        for (const file of files) {
          uploadedImages.value.push(URL.createObjectURL(file))
        }
      }
  
      return { onRejected, onUploaded, uploadedImages, slide }
    }
  }
  </script>
  
  <style scoped>
  .d-flex {
    display: flex;
  }
  .flex-center {
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  </style>