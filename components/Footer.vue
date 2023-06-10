<template>
    <footer class="container mx-auto pt-20 pb-8 px-10">
        <div class="flex flex-wrap justify-between font-playfair pb-20">

            <h1 class="text-2xl font-bold">All Greens</h1>
            <div class="col-span-2 sm:col-span-1">
                <p class="font-inter text-xs text-slate-400 py-3">Connect</p>
                <ul class="text-base tracking-wide">
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Pinterest</li>
                    <li>YouTube</li>
                </ul>
            </div>
            <div class="col-span-2 sm:col-span-1">
                <p class="font-inter text-xs text-slate-400 py-3">Resources</p>
                <ul class="text-base tracking-wide">
                    <li>Return Policy</li>
                    <li>Track An Order</li>
                    <li>FAQs</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div class="col-span-2 sm:col-span-1">
                <p class="font-inter text-xs text-slate-400 py-3">About</p>
                <ul class="text-base tracking-wide">
                    <li>Our Story</li>
                    <li>Careers</li>
                    <li>Press</li>
                </ul>
            </div>
            <select name="currency" id="" class="uppercase font-inter text-sm h-10 text-center px-2">
                <option value="euro">Euro</option>
                <option value="pound">Pound</option>
                <option value="dollar">Dollar</option>
            </select>
        </div>
        <div class="text-center font-inter text-xs text-slate-400">
            <p>Designed By Radoslav Bali | Cloned by the Spartan.Dev</p>
        </div>
    </footer>
</template>

<script lang="ts">

export default {
    title: 'Footer',
}

</script>