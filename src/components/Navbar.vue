<template>
    <nav class="navbar">
        <div class="logo">
            <img src="../assets/logo.png" alt="IEEE">
        </div>

        <ul class="nav-list">
            <li class="nav-link" id="home">
                <router-link to="/">Home</router-link>
            </li>

            <li class="nav-link" id="about">
                <a href="#about">About</a>
            </li>

            <li class="nav-link" id="events">
                <router-link to="/events">Events &amp; Activities</router-link>
                <span class="dropdown"><svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0.979736L6.25 10.3244L12.5 0.979736" fill="white"/></svg></span>
            </li>

            <li class="nav-link" id="blog">
                <a href="#blog">Blog</a>
            </li>

            <li class="nav-link" id="resources">
                <a href="#resources">Resources</a>
                <span class="dropdown"><svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0.979736L6.25 10.3244L12.5 0.979736" fill="white"/></svg></span>
            </li>

            <li class="nav-link" id="gallery">
                <a href="#gallery">Gallery</a>
            </li>

            <li class="nav-link" id="contact">
                <a href="#contact">Contact</a>
            </li>

        </ul>
    </nav>
</template>

<script>
  
  export default {
    name: 'Navbar',
    components: {
  
    }
  }
</script>

<style scoped>
    .navbar {
        position: relative;
        display: flex;
        max-width: 100vw;
        height: calc(10vh - 2rem);
        flex-direction: row;
        background-color: rgba(5,5,5,0.9);
        justify-content: space-between;
        padding: 1rem var(--logo-left);
    }
    .logo img{
        max-width: 10%;
        position: absolute;
        z-index: 100;
    }
    
    .nav-list{
        display: flex;
        width: 70%;
        justify-content: space-between;
        align-items: center;
        font-size: 1.2rem;
    }

    .nav-link > *{
        color: rgba(255,255,255,0.9);
    }

    .dropdown{
        margin-left: 7px;
    }

</style>