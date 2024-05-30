<script setup lang="ts">
    defineProps({
        imgSrc: String,
        imgSrcDesktop: String,
        imgAlt: String,
        captionTitle: String,
        captionDesc: String,
    })
</script>

<template>
    <figure>
        <picture>
            <source media="(min-width: 768px)" :srcset="imgSrcDesktop">
            <img :src="imgSrc" :alt="imgAlt">
        </picture>
        <figcaption>
            <span>{{ captionTitle }}</span>
            <br>
            <span>{{ captionDesc }}</span>
        </figcaption>
    </figure>
</template>

<style scoped lang="scss">
    @use '../scss/var' as v;

    @keyframes image-move {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(1.2);

        }
    }

    figure {
        position: relative;
        height: 100%;
        overflow: hidden;
        picture {
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: 50% 34%;
                &:hover {
                    animation: image-move 5s ease-in-out alternate infinite;
                }
            }
        }
        figcaption {
            position: absolute;
            bottom: 11%;
            text-align: center;
            color: v.$dark-blue;
            span {
                font-weight: 700;
                font-family: Fraunces, sans-serif;
                font-size: 1.825rem;
            }
            span:nth-child(3){
                display: inline-block;
                width: 90%;
                margin-top: 1.5rem;
                font-family: Barlow, sans-serif;
                font-size: 1rem;
                font-weight: 600;
                line-height: 1.625rem;
            }
        }
    }

    @media (min-width: 768px){
        figure {
            figcaption {
               span:nth-child(3) {
                    width: 49%;
               }
            }
        }
    }
</style>