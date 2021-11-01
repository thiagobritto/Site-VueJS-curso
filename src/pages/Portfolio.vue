<template>
    <main>
        <section class="container">
            <h1>Portfolio</h1>
            <section class="portfolios">
                <a class="portfolio" target="_blank" 
                :href="value.link" v-for="(value, index) in portfolios" :key="index">
                    <img :src="value.thumb" alt="value.title">
                    <div class="portfolio-title">
                        {{value.title}}
                    </div>
                </a>
            </section>
        </section>
    </main>
</template>

<script>
export default {
    name: 'Portfolio',
    data(){
        return{
            portfolios: [
                {
                    thumb: 'https://via.placeholder.com/400x225.jpg?text=dev+site+0',
                    title: 'Repellendus aliquid molestias nisi fugit?',
                    link: '#'
                },
                {
                    thumb: 'https://via.placeholder.com/400x225.jpg?text=dev+site+1',
                    title: 'Repellendus aliquid molestias nisi fugit?',
                    link: '#'
                },
                {
                    thumb: 'https://via.placeholder.com/400x225.jpg?text=dev+site+2',
                    title: 'Repellendus aliquid molestias nisi fugit?',
                    link: '#'
                }
            ]
        } 
    }
}
</script>

<style scoped>
    main{
        align-items: center;
    }
    
    .portfolio img{
        width: 100%;
    }

    .portfolio{
        display: block;
        width: 80%;
        color: var(--color-text-dark);
        font-weight: 600;
        margin-bottom: 20px;
        text-align: center;
    }

    .portfolios{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (min-width: 700px){
        .portfolios{
            flex-direction: row;
            align-items: flex-start;
            flex-wrap: wrap;
            margin: 0 -10px;
        }

        .portfolio{
            margin-left: 10px;
            margin-right: 10px;
            max-width: 300px;
        }
    }
</style>