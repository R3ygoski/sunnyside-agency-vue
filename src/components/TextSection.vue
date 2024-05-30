<script setup lang="ts">
    defineProps({
        title: String,
        text: String,
        color: String
    })
</script>

<template>
    <section>
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>
        <div class="learn_more__wrapper">
            <a href="#" class="learn_more">Learn More</a>
            <div class="learn_more_bg_color" :class="color"></div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    @use '../scss/var' as v;

    section {
        height: 100%;
        padding: 4rem 1.5rem 0 1.5rem;
        text-align: center;
        h2 {
            font-size: 2rem;
            letter-spacing: 0.05rem;
            color: v.$very-dark-desaturated-blue;
        }
        p {
            margin-top: 1.75rem;
            font-size: 1.125rem;
            line-height: 1.825rem;
            font-weight: 600;
            color: v.$dark-grayish-blue;
        }
        .learn_more__wrapper {
            position: relative;
            .learn_more {
                display: block;
                margin-top: 2rem;
                font-family: Fraunces, sans-serif;
                font-size: 1.125rem;
                font-weight: 700;
                text-transform: uppercase;
                text-decoration: none;
                color: v.$very-dark-desaturated-blue;
            }
            .learn_more:hover ~ .soft-yellow, .learn_more:hover ~ .soft-red {
                opacity: 1;
            }
            .learn_more_bg_color {
                margin: 0 auto;
                position: absolute;
                top: 70%;
                left: 0;
                right: 0;
                width: 132px;
                height: 8px;
                border-radius: 1rem;
                z-index: -1;
                transition: 0.3s ease-in-out;
            }
            .soft-yellow {
                background: v.$yellow;
                opacity: 0.5;
            }
            .soft-red {
                background: v.$soft-red;
                opacity: 0.5;
            }
        }
    }

    @media (min-width: 1024px){
        section {
            padding: 10rem 7rem 0 10rem;
            text-align: left;
            h2 {
                font-size: 2.5rem;
            }
            p {
                width: 102%;
                font-size: 1.125rem;
            }
            .learn_more__wrapper {
                .learn_more_bg_color {
                    margin: 0 0;
                }
            }
        }
    }
</style>