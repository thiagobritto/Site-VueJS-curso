<template>
    <footer>
        <a class="socialLinnks" href="#" v-for="(value, index) in socialLinnks" :key="index"
        target="_blank">
            <img :src="value.icon" :alt="value.label" :title="value.label">
        </a>
    </footer>
</template>

<script>

import api from '../services/api';

export default {
    name: 'Footer',
    data(){
        return {
            socialLinnks: []
        }
    },
    mounted(){
        api.get('/social-links.json').then( response => {
            this.socialLinnks = response.data;
        })
    }
}
</script>

<style scoped>
    footer{
        height: 60px;
        width: 100%;
        background-color: var(--color-background-nav);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .socialLinnks img{
        width: 20px;
    }

    .socialLinnks{
        border: 2px solid var(--color-text-light);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        margin: 0 10px; 
    }
</style>