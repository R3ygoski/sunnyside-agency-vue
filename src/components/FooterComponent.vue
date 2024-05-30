<script setup lang="ts">
    import { socialMediasIcons, imagesFooter } from '../data/dataFooterImages';

    const scrollHandler = () => {
        scrollTo({
            top: 0
        })
    }
</script>

<template>
    <footer class="footer">
        <section class="footer__top_images">
            <picture v-for="image in imagesFooter">
                <source media="(min-width: 1024px)" :srcset="image.srcDesktop">
                <img :src="image.src" :alt="image.alt">
            </picture>
        </section>
        <p class="footer__logo" @:click="scrollHandler">sunnyside</p>
        <ul class="footer__nav_list">
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
        </ul>
        <ul class="footer__social_medias" >
            <li v-for="socialMedia in socialMediasIcons">
                <a href="#" aria-label="social media">
                    <img :src="socialMedia" alt="">
                </a>
            </li>
        </ul>
    </footer>
</template>

<style scoped lang="scss">
    @use '../scss/var' as v;
    
    .footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 724px;
        margin-top: 6rem;
        background: v.$light-desaturated-cyan;
        &__top_images {
            display: grid;
            grid-template-columns: 50% 50%;
            grid-template-rows: 50% 50%;
            height: 374px;
            width: 100%;
            gap: 0;
            picture {
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: 50% 50%;
                    transition: 0.5s ease-in-out;
                    &:hover {
                        object-position: 50% 100%;
                    }
                }
            }
        }
        &__logo {
            margin-top: 3.25rem;
            letter-spacing: 0.15rem;
            font-size: 2.25rem;
            font-weight: 900;
            text-align: center;
            color: v.$dark-moderate-cyan;
            cursor: pointer;
        }
        &__nav_list {
            display: flex;
            margin: 2.75rem 0;
            gap: 0 4rem;
            li {
                a {
                    text-decoration: none;
                    font-weight: 500;
                    color: v.$dark-moderate-cyan;
                    &:hover {
                        color: white;
                    }
                }
            }
        }
        &__social_medias {
            display: flex;
            margin-top: 3rem;
            gap: 0 1.75rem;
            li {
                a {
                    img:hover {
                        filter: saturate(0) brightness(100);
                    }
                }
            }
        }
    }

    @media (min-width: 768px){
        .footer {
            height: 800px;
            margin-top: 10.5rem;
            &__top_images {
                grid-template-columns: repeat(4, 25%);
                grid-template-rows: 100%;
                height: 280px;
            }
            &__nav_list {
                margin: 3.25rem 0;
                li {
                    a {
                        font-size: 1.125rem;
                    }
                }
            }
            &__social_medias {
                margin-top: 2.5rem;
            }
        }
    }
    @media (min-width: 1024px){
        .footer {
            &__top_images {
                height: 444px;
            }
        }
    }
</style>