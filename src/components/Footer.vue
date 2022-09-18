<template>
    <div class="footer" id="footer">
      <div class="footer-grid">
        <div class="left">
            <div class="info">
                <h3>INFORMATION</h3>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Our People</a></li>
                    <li><a href="#">Our Partners</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
            <div class="proj">
                <h3>PROJECTS</h3>
                <ul>
                    <li><a href="#">Case Studies</a></li>
                    <li><a href="#">Project Photos</a></li>
                    <li><a href="#">ML Models</a></li>
                </ul>
            </div>
        </div>

        <div class="right">
            <div class="socials">
                <a class="social-link" href="#"><i class="fa fa-brands fa-facebook-f"></i></a>
                <a class="social-link" href="#"><i class="fa fa-brands fa-twitter"></i></a>
                <a class="social-link" href="#"><i class="fa fa-brands fa-linkedin"></i></a>
            </div>
        </div>

        <div class="bottom">
            <div class="dev">
                <p>Made and Designed by IEEE</p>
            </div>
            <div class="bottom-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms and Conditions</a>
                <a href="#">Contact Us</a>
            </div>
        </div>
      </div>
    </div>
</template>
    
  <script>
    export default {
      name: 'Footer',
      components: {
      }
    }
  </script>
    
  <style scoped>
      .footer{
        max-width: 100%;
        padding: 6rem 4rem 4rem 4rem;
        background-color: rgba(5,5,5,0.8);
      }

      .footer-grid{
        display: grid;
      }

      .footer-grid > *{
        display: flex;
        padding: 1rem 4rem;
        justify-content: space-between;
      }

      .left{
        grid-area: 1 / 1 / span 1 / span 1;
        width: 50%;
      }

      .right{
        grid-area: 1 / 2 / span 1 / span 1;
        justify-content: end;
      }

      .bottom{
        grid-area: 2 / 1 / span 1 / span 2;
        padding-top: 2rem;
      }

      h3{
        color: rgba(250,250,250,.8);
        margin-bottom: 0.3rem;
        font-size: .9rem;
      }

      ul{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
      }

      li{
        margin-top: 1rem;
      }

      a,p{
        color: rgba(250,250,250,.7);
      }

      .socials{
        display: flex;
        width: 60%;
        justify-content: space-between;
      }

      .social-link{
        border-radius: 50%;
        height: min-content;
        clip-path: circle(50%);
      }

      i{
        color: black;
        font-size: 1rem;
        padding: .7rem;
        background-color: white;
      }

      .bottom-links{
        width: 30%;
        display: flex;
        justify-content: space-between;
      }
  </style>