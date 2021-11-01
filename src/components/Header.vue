<template>
  <header>
    <nav class="container">
        <router-link to="/" id="logo">LOGO</router-link>
        <div v-on:click="openCloseMenu()" id="menu-button">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div v-on:click="openCloseMenu()" id="menu-overlay" v-if="menuActive"></div>
        <div id="menu-items" v-bind:class="{active: menuActive}">
            <router-link id="menu-logo" to="/">LOGO</router-link>
            <ul>
                <li v-on:click="closeMenu()"><router-link to="/">Home</router-link></li>
                <li v-on:click="closeMenu()"><router-link to="/portfolio">Projetos</router-link></li>
                <li v-on:click="closeMenu()"><router-link to="/sobre">Sobre</router-link></li>
                <li v-on:click="closeMenu()"><router-link to="/contato">Contato</router-link></li>
            </ul>
        </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data(){
      return{
          menuActive: false
      }
  },
  methods: {
      openCloseMenu() {
          this.menuActive = !this.menuActive;
      },
      closeMenu() {
          this.menuActive = false;
      }
  }
};
</script>

<style scoped>
    header{
        background-color: var(--color-background-nav);
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    #logo{
        display: block;
        color: var(--color-text-light);
    }

    #menu-button{
        width: 20px;
        height: 45px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    #menu-button span{
        display: block;
        width: 6px;
        padding: 3px;
        border-radius: 50%;
        background-color: var(--color-text-light);

    }

    #menu-overlay{
        position: fixed;
        top: 0;
        left: 0;
        width: 40%;
        height: 100vh;
        background: #000;
        opacity: 0.8;
    }

    #menu-logo{
        display: block;
        width: 110px;
        margin-top: 30px;
        margin-bottom: 10px;
        text-align: center;
        color: var(--color-text-light);
    }

    #menu-items{
        position: fixed;
        top: 0;
        right: 0;
        width: 60%;
        height: 100vh;
        background: var(--color-background-nav);
        display: none;
        flex-direction: column;
        align-items: center;
    }

    ul{
        list-style: none;
        text-align: center;
    }

    ul li a{
        display: block;
        color: var(--color-text-light);
        padding: 15px 10px;
    }

    #menu-items.active{
        display: flex;
    }

    @media (min-width:700px) {
        #menu-button,
        #menu-logo,
        #menu-overlay{
            display: none;
        }

        #menu-items{
            display: flex;
            position: static;
            height: 60px;
            width: auto;
        }

        ul {
            display: flex;
            flex-direction: row;
            height: 60px;
            align-items: center;
        }
    }

</style>