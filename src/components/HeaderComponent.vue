<script setup lang="ts">
    import { ref } from 'vue';
    import menu from '../assets/icon-hamburger.svg'

    const menuState = ref(true)

    const menuToggle = ():void => {
        menuState.value = !menuState.value
    }

    const scrollHandler = ():void => {
        if (window.innerWidth >= 768){
            scrollTo({
                top: 800,
                behavior: 'smooth'
            })
        } else {
            scrollTo({
                top: 536,
                behavior: 'smooth'
            })
        }
    }

    if (window.innerWidth >= 768){
        document.addEventListener('DOMContentLoaded', ()=>{
            menuState.value = false
        })
    }

    window.addEventListener('resize', ()=>{
        if (window.innerWidth >= 768) {
            menuState.value = false
        }
    })
</script>

<template>
    <header class="header">
        <img class="header__logo" src="../assets/logo.svg" alt="Sunnyside Logo">
        <nav class="header__nav">
            <button class="header__nav__menu" @:click="menuToggle">
                <img :src="menu" alt="Menu">
            </button>
            <ul class="header__nav__list" :class="menuState?'':'hidden'">
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Projects</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
        <h1 class="header__title">We Are Creatives</h1>
        <img class="header__arrow" src="../assets/icon-arrow-down.svg" alt="" @:click="scrollHandler">
        <figure class="header__figure">
            <picture>
                <source media="(min-width: 768px)" srcset="../assets/desktop/image-header.jpg">
                <img src="../assets/mobile/image-header.jpg" alt="">
            </picture>
        </figure>
    </header>
</template>

<style lang="scss">
    @use '../scss/var' as v;

    @keyframes arrow {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(20px);
        }
        100% {
            transform: translateY(0);
        }
    }

    .header {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 0.3fr 1fr;

        position: relative;

        height: 536px;
        padding-top: 2rem;
        &__logo {
            margin-left: 1.5rem;
        }
        &__nav {
            display: flex;
            justify-content: flex-end;
            align-items: flex-start;
            margin-right: 1.5rem;
            margin-top: 0.25rem;
            &__menu {
                background: transparent;
                border: none;
            }
            &__list {
                display: flex;
                flex-direction: column;
                align-items: center;
                position: absolute;
                z-index: 1;
                width: 87.5%;
                height: 306px;
                max-width: 328px;
                margin-top: 4.3rem;
                padding: 2.825rem;
                padding-bottom: 0;
                gap: 2.125rem;
                background: v.$white;
                
                transition: 1s cubic-bezier(.45,-0.43,.45,1.43);
                transform: translate(0, -150%);
                &::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: -1.275rem;
                    background: v.$white;
                    width: 64px;
                    height: 24px;
                    transform: rotate(90deg) skew(45deg) translate(8px);
                    transition: 1s cubic-bezier(.45,-0.43,.45,1.43);
                }
                li {
                    a {
                        font-size: 1.125rem;
                        text-decoration: none;
                        font-weight: 500;
                        color: v.$very-dark-grayish-blue;
                    }
                }
                li:nth-child(4){
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 138px;
                    height: 52px;
                    border-radius: 99rem;
                    background: v.$yellow;
                    a {
                        font-family: Fraunces, sans-serif;
                        font-size: 1rem;
                        font-weight: 700;
                        text-transform: uppercase;
                        color: v.$very-dark-desaturated-blue;
                    }
                }
            }
        }
        &__title {
            grid-column: span 2;
            font-size: 2.5rem;
            letter-spacing: 0.5rem;
            text-align: center;
            text-transform: uppercase;
            color: v.$white;
        }
        &__arrow {
            position: absolute;
            top: 54%;
            margin: 0 auto;
            left: 0;
            right: 0;
            cursor: pointer;

            animation: arrow 2s ease-in-out infinite;
        }
        &__figure {
            grid-area: 3/1/4/3;
            img {
                position: absolute;
                width: 100%;
                height: 538px;
                top: 0;
                z-index: -1;
                object-fit: cover;
                object-position: 50% 80%;
            }
        }
    }
    .hidden {
        transform: translate(0, 0);
    }

    @media (min-width: 768px){
        .header {
            height: 800px;
            &__logo {
                margin-top: 1rem;
                margin-left: 2.5rem;
                width: 170px;
            }
            &__nav {
                justify-self: flex-end;
                margin-right: 3rem;
                margin-top: 0;
                &__menu {
                    display: none;
                }
                &__list {
                    display: flex;
                    flex-direction: row;
                    position: static;
                    height: auto;
                    width: auto;
                    max-width: 100%;
                    margin-top: 0;
                    padding: 0;
                    gap: 3rem;
                    background: transparent;
                    transition: none;
                    &::after {
                        width: 0;
                        height: 0;
                        transition: none;
                    }
                    li {
                        a {
                            color: v.$white;
                        }
                    }
                    li:nth-child(4){
                        width: 134px;
                        height: 60px;
                        background: v.$white;
                        transition: 0.3s ease-in-out;
                        &:hover {
                            background: hsl(200, 100%, 72%);
                        }
                        &:hover a {
                            color: v.$white;
                        }
                        a {
                            color: v.$very-dark-desaturated-blue;
                            transition: 0.3s ease-in-out;
                        }
                    }
                }
            }
            &__title {
                font-size: 3.825rem;
            }
            &__arrow {
                top: 45%;
            }
            &__figure {
                img {
                    height: 800px;
                }
            }
        }
    }
</style>