<template>
  <v-app>
    <v-app-bar color="blue darken" dark app>
      <v-app-bar-nav-icon v-on:click="navigation = !navigation"></v-app-bar-nav-icon>
      <v-toolbar-title>
        НОВОСТИ
      </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="navigation" absolute temporary>

      <v-list nav dense>
        <v-list-item link to="/ru">
          <v-hover>
            <v-list-item-title>Россия</v-list-item-title>
          </v-hover>
        </v-list-item>

        <v-space></v-space>

        <v-list-item link to="/us">
          <v-list-item-title>USA</v-list-item-title>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

    <v-content app>
      <router-view/>
    </v-content>
    
  </v-app>
</template>

<script>
import NewsItem from './components/NewsItem.vue';

export default {
  name: 'App',

  components: {
    NewsItem
  },

  data: () => ({
    navigation: false
  })
};
</script>
