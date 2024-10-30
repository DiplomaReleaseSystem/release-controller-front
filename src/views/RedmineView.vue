<script setup>
import { ref } from 'vue';
const products = ref(null);

fetch('http://192.168.37.182:3003', {
    method: "GET",
    // headers: {
    //     //'X-Redmine-API-Key': "663931c2f1f31a378b34501fdce0254739e7f279",
    //     "Content-Type": "application/json",
    //     //"Access-Control-Allow-Origin": "*",
    //     //"Access-Control-Allow-Headers": "*",
    //     "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:131.0) Gecko/20100101 Firefox/131.0"
    // },
    // mode: "nocors"
    
})
    .then(response => response.json())
    .then((data) => products.value = data)
</script>

<template>
    <div class="card m-3">
        <h5 class="card-header text-center">Валидация ошибок</h5>
        <div class="card-body">
            <div v-if="products">
                <h1>Ошибки Redmine</h1>
                <ul class="mb-0">
                    <li v-for="product in products.issues" :key="product.id">{{product.subject}}</li>
                </ul>
            </div>
            <div v-if="!products" class="text-center">
                <div class="spinner-border spinner-border-sm"></div>
            </div>
        </div>
    </div>
</template>