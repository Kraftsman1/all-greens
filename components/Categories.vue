<template>
    <div class="container mx-auto py-10">
        <div class="items-center text-center pb-12">
            <h1 class="font-playfair text-4xl">Categories</h1>
        </div>
        <div class="flex flex-wrap gap-x-4 mx-auto justify-around items-center py-5 px-3 font-playfair text-2xl">
            <div>
                <img src="/images/jungle-plants.jpg" class="w-72 h-96" alt="Jungle Plants">
                <p class="py-3">Jungle Plants</p>
            </div>
            <div>
                <img src="/images/outdoor-plants.jpg" class="w-72 h-96" alt="Outdoor Plants">
                <p class="py-3">Outdoor Plants</p>
            </div>
            <div>
                <img src="/images/bedroom-plants.jpg" class="w-72 h-96" alt="Bedroom Plants">
                <p class="py-3">Bedroom Plants</p>
            </div>
            <div>
                <img src="/images/indoor-plants.jpg" class="w-72 h-96" alt="Indoor Plants">
                <p class="py-3">Indoor Plants</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

export default {
    title: 'Categories'
}

</script>