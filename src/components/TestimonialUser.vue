<script setup lang="ts">
    defineProps({
        imgSrc: String,
        testimonial: String,
        name: String,
        job: String,
    })
</script>

<template>
    <img :src="imgSrc" alt="User Image">
    <p class="testimonial">{{ testimonial }}</p>
    <h3>{{ name }}</h3>
    <p class="job">{{ job }}</p>
</template>

<style scoped lang="scss">
    @use '../scss/var' as v;

    img {
        border-radius: 50%;
        width: 72px;
    }
    .testimonial {
        width: 89%;
        margin-top: 2.25rem;
        font-size: 1.125rem;
        font-weight: 500;
        text-align: center;
        line-height: 1.925rem;
        color: v.$very-dark-grayish-blue;
    }
    h3 {
        margin-top: 2rem;
        color: v.$very-dark-desaturated-blue;
    }
    .job {
        font-size: 0.875rem;
        margin-top: 0.625rem;
        color: v.$grayish-blue;
    }

    @media(min-width: 768px){
        .testimonial {
            width: 92%;
            margin-top: 3.75rem;
            font-size: 1rem;
        }
        h3 {
            margin-top: 4.5rem;
        }
    }
</style>