<template>
    <div class="lander" id="lander">
        <div class="lander-img">
            <img src="../assets/lander.png" alt="lander">
        </div>
    </div>
  </template>
    
  <script>
    export default {
      name: 'Lander',
      components: {
      }
    }
  </script>
    
  <style>
      .lander{
        position: relative;
        min-height: calc(90vh + 2rem);
        background-color: rgba(10,10,10,.85);
      }

      .lander-img{
        position: absolute;
        left: 15vw;
      }
  </style>