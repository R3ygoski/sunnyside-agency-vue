<script setup lang="ts">
  // Components
  import HeaderComponent from './components/HeaderComponent.vue'
  import ImageSection from './components/ImageSection.vue'
  import TextSection from './components/TextSection.vue'
  import TextImageSection from './components/TextImageSection.vue'
  import TestimonialUser from './components/TestimonialUser.vue'
  import FooterComponent from './components/FooterComponent.vue'

  // Data
  import usersTestimonials from './data/dataTestimonial'
  import { imageContent, textContent, textImageContent } from './data/dataContent'
</script>

<template>
  <HeaderComponent/>
  <article id="content" class="content_section">

    <ImageSection :imgSrc="imageContent[0].imgSrc" :imgSrcDesktop="imageContent[0].imgSrcDesktop" :imgAlt="imageContent[0].imgAlt"/>
    <TextSection :title="textContent[0].title" :text="textContent[0].text" :color="textContent[0].color"/>

    <ImageSection :imgSrc="imageContent[1].imgSrc" :imgSrcDesktop="imageContent[1].imgSrcDesktop" :imgAlt="imageContent[1].imgAlt"/>
    <TextSection :title="textContent[1].title" :text="textContent[1].text" :color="textContent[1].color"/>

    <TextImageSection :imgSrc="textImageContent[0].imgSrc" :imgSrcDesktop="textImageContent[0].imgSrcDesktop" :imgAlt="textImageContent[0].imgAlt" :captionTitle="textImageContent[0].title" :captionDesc="textImageContent[0].text"/>
    <TextImageSection :imgSrc="textImageContent[1].imgSrc" :imgSrcDesktop="textImageContent[1].imgSrcDesktop" :imgAlt="textImageContent[1].imgAlt" :captionTitle="textImageContent[1].title" :captionDesc="textImageContent[1].text"/>

  </article>
  <article class="testimonials">
    <h2 class="testimonials__title">Client Testimonials</h2>
    <ul class="testimonials__list">
      <li v-for="testimonial in usersTestimonials">
        <TestimonialUser :imgSrc="testimonial.img" :testimonial="testimonial.testimonial" :name="testimonial.name" :job="testimonial.job"/>
      </li>
    </ul>
  </article>
  <FooterComponent/>
</template>

<style scoped lang="scss">
  @use './scss/var' as v;

  .content_section {
    display: grid;
    grid-template-rows: repeat(2, 314px 436px) repeat(2, 604px);
    height: 2700px;
  }
  .testimonials {
    margin-top: 4rem;
    text-align: center;
    &__title {
      text-transform: uppercase;
      font-size: 1rem;
      letter-spacing: 0.25rem;
      color: v.$dark-grayish-blue;
    }
    &__list {
      display: flex;
      flex-direction: column;
      margin-top: 4rem;
      gap: 4.25rem;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        border-radius: 1rem;
        transition: 1s ease-in-out;
        &:hover {
          box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.1);
        }
      }
    }
  }

  @media (min-width: 768px){
    .content_section {
      grid-template-rows: repeat(3, 600px);
      grid-template-columns: 1fr 1fr;
      height: 1800px;
      figure:nth-child(1){
        grid-area: 1/2/2/3;
      }
    }
  }

  @media (min-width: 1024px){
    .testimonials {
    margin-top: 10rem;
    padding: 0 10rem;
      &__title {
        font-size: 1.25rem;
        letter-spacing: 0.325rem;
      }
      &__list {
        flex-direction: row;
        margin-top: 4rem;
        gap: 0rem;
        li {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }
  }
</style>
