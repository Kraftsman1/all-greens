<template>
    <div class="container flex flex-wrap mx-auto justify-around px-9 py-10">
        <div class="w-1/4">
            <h1 class="font-playfair text-4xl py-3">Featured</h1>
            <p class="font-inter text-sm py-3">Our plants are 100% organic, <br /> we don't use pesticides or <br /> harmful
                chemicals.<br /><br /> But please don't eat them</p>
            <button class="font-inter text-sm border-b-2 border-black pt-4 px-4">Shop all
                Favorites</button>
        </div>
        <div class="w-3/4 flex flex-wrap mx-auto items-center justify-around">
            <div>
                <img src="/images/featured-1.jpg" class="w-72 h-96" alt="Featured Image 1">
                <label for="" class="font-inter text-xs text-slate-400">Plant 1</label>
                <p class="font-playfair text-2xl">150€</p>
            </div>
            <div>
                <img src="/images/featured-2.jpg" class="w-72 h-96" alt="Featured Image 2">
                <label for="" class="font-inter text-xs text-slate-400">Plant 2</label>
                <p class="font-playfair text-2xl">70€</p>
            </div>
            <div class="relative">
                <img src="/images/featured-3.jpg" class="w-72 h-96" alt="Featured Image 3">
                <span class="absolute top-5 right-5 px-4 py-1 bg-black text-white inline-flex items-center justify-center mb-2 font-inter text-xs">Sold Out</span>
                <label for="" class="font-inter text-xs text-slate-400">Plant 3</label>
                <p class="font-playfair text-2xl">50€</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

export default {
    title: 'Featured',
}

</script>