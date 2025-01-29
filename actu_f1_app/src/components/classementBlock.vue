<template>
    <div class="block">
        <p>{{ label }}</p>
    </div>
</template>

<script setup>
    defineProps({
    label: String
    });
</script>

<style>
    .block{
        background-color: rgba(255,255,255,0.10);
        width: 90vw;
        height: 20vh;
        border-radius: 16px;
        left: 10vw;
    }

    p{
        font-family: "Pathway Extreme", serif;
        font-optical-sizing: auto;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        font-variation-settings:"wdth" 100;
        color:white;
        opacity: 1;
        margin-top: 4vh;
        margin-left: 7vw;
    }

</style>