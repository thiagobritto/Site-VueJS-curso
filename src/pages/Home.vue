<template>
    <main>
        <div class="text-top">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        <a id="action" href="#">ACTION</a>
        <div class="text-bottom">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
    </main>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
    main {
        background-color: var(--color-background-home);
        justify-content: center;
        align-items: center;
    }
    
    .text-top{
        color: var(--color-text-light);
        font-size: 22px;
        text-align: center;
    }

    .text-bottom{
        color: var(--color-text-light);
        font-size: 18px;
        text-align: center;
    }

    #action{
        display: block;
        width: 220px;
        padding: 10px;
        margin: 30px 0;
        font-weight: bold;
        font-size: 26px;
        text-align: center;
        color: var(--color-text-light);
        background-color: var(--color-text-title);
        border-radius: 3px;
    }

    @media (min-width: 700px) {
        #action{
            width: 280px;
            padding: 15px;
        }
    }
</style>