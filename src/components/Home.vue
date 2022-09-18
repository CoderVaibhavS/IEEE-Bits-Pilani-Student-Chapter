<template>
  <div id="home">
    <Lander />
    <About />
    <Vision />
    <Blog />
    <Gallery />
    <Contact />
    <Footer />
  </div>
</template>
  
<script>
  import Lander from './Lander.vue';
  import About from './About.vue';
  import Vision from './Vision.vue';
  import Blog from './Blog.vue';
  import Gallery from './Gallery.vue';
  import Contact from './Contact.vue';
  import Footer from './Footer.vue';

  export default {
    name: 'Home',
    components: {
      Lander,
      About,
      Vision,
      Blog,
      Gallery,
      Contact,
      Footer
    }
  }
</script>
  
<style>
    
</style>