<template>
    <header class="z-50 top-0 sticky h-16">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between font-playfair py-3 ">
            <h1 id="title">All Greens</h1>
            <ul class="md:flex justify-between items-center md:pt-0 font-inter">
                <li v-for="page in pages" :key="page.path" class="inline-block py-2 px-4 text-black">
                    <NuxtLink :to="page.path">{{ page.name }}</NuxtLink>
                </li>
            </ul>
            <ul class="font-inter">
                <li class="inline-block py-2 px-4">Search</li>
                <li class="inline-block py-2 px-4">Cart (0)</li>
            </ul>
        </div>
    </header>
</template>

<script lang="ts">

import pages from '~/pages'

export default {
    title: 'Header',
    data() {
        return {
            pages: pages
        }
    }
}

</script>

<style scoped>

.font-playfair {
    font-family: 'Playfair Display';
    font-weight: bold;
    font-size: 1.5rem;
}

.font-inter {
    font-family: 'Inter';
    font-size: 0.875rem;
}

</style>