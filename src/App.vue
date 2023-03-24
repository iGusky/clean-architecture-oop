<script setup lang="ts">
import Axios from 'axios'
import { ref } from 'vue';
import CallRequestIndexResponse from './classes/CallRequestIndexResponse';

const info = ref()

const loadData = async () => {
  const token = '104|kLgzbpj3WHqg6JEajrJtwfwcobFwYCESUWzK6SOs'
  Axios.defaults.headers.common.Authorization = `Bearer ${token}`
  const response = await Axios.get('http://3.235.77.118:8005/api/v1/app/request/index/cire-admin?page=1')

  const informacion = CallRequestIndexResponse.builder(response.data).createResponse().getInstance()

  console.log(informacion.indice);
  
  // info.value = informacion
}

loadData()

</script>

<template>
{{ info }}
</template>

<style scoped>
</style>