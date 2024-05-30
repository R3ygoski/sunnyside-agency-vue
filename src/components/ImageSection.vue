<script setup lang="ts">
    defineProps({
        imgSrc: String,
        imgSrcDesktop: String,
        imgAlt: String,
    })
</script>

<template>
    <figure>
        <picture>
            <source media="(min-width: 768px)" :srcset="imgSrcDesktop">
            <img :src="imgSrc" :alt="imgAlt">
        </picture>
    </figure>
</template>

<style scoped lang="scss">

    @keyframes image-move {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(1.2);

        }
    }

    figure {
        height: 314px;
        overflow: hidden;
        picture {
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: 50% 40%;
                &:hover {
                    animation: image-move 5s ease-in-out alternate infinite;
                }
            }
        }
    }

    @media (min-width: 768px){
        figure {
            height: 100%;
        }
    }
</style>