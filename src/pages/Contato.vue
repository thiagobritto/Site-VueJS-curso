<template>
    <main>
        <section class="container">
            <h1>Contato</h1>
            <section class="contacts">
                <div class="contact" v-for="(value, index) in contacts" :key="index">
                    <div class="contact-title">{{ value.title }}</div>
                    <a href="#" target="_blank">{{ value.label }}</a>
                </div>
            </section>
        </section>
    </main>
</template>

<script>

import api from '../services/api';

export default {
    name: 'Contato',
    data(){
        return{
            contacts: []
        } 
    },
    mounted(){
        api.get('/contacts.json').then( response => {
            this.contacts = response.data;
        });
    }
}
</script>

<style scoped>
    main{
        align-items: center;
    }

    .contacts{
        margin-bottom: 40px;
        color: var(--color-text-dark);
    }

    .contact-title{
        font-weight: 600;
        font-size: 18px;
    }

    .contact a{
        color: var(--color-text-dark);
    }

    .contact{
        margin-bottom: 20px;
    }
</style>