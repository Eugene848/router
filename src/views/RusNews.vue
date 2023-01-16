<template>
    <v-container>
        <v-row>

            <v-content app>
                <v-container>
                    <v-row>

                        <NewsItem v-for="(item, i) in news" :key="i" :image="item.urlToImage" :title="item.title" :url="item.url">
                            {{ item.description }}
                        </NewsItem>

                    </v-row>
                </v-container>
            </v-content>

        </v-row>
    </v-container>
</template>

<script>

import NewsItem from '../components/NewsItem.vue';

export default {
    name: 'RusNews',

    components: {
        NewsItem
    },

    data: () => ({
        navigation: false,
        news: []
    }),

    methods: {
        getNews() {
            this.axios({
                method: 'GET',
                url: "https://newsapi.org/v2/top-headlines?country=ru&apiKey=d7f41a32c26b4bbfb596d58b1a54c766"
            }).then((response) => {
                this.news = response.data.articles;
            })
        }
    },
    mounted() {
        this.getNews()
    }
};
</script>