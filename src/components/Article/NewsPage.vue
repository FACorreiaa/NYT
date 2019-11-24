<template>
  <div class="container">
    <SearchBar @termChange="onTermChange"></SearchBar>
    <div class="display">
      <NewsDetails :article="selectedArticle" />
      <NewsList
        @articleSelect="onArticleSelect"
        :articles="articles"
      ></NewsList>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import SearchBar from '../SearchBar';
import NewsDetails from './NewsDetails';
import NewsList from './NewsList';

const API_KEY = 'eqtc7kPU1ZfrTgX2F6thiHH8fvAjh8Ab';

export default {
  name: 'NewsPage',
  components: {
    SearchBar,
    NewsDetails,
    NewsList
  },
  data() {
    return { articles: [], selectedArticle: null };
  },
  methods: {
    onArticleSelect(article) {
      this.selectedArticle = article;
    },
    onTermChange(searchTerm) {
      axios
        .get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
          params: {
            'api-key': API_KEY,
            q: searchTerm
          }
        })
        .then(response => {
          this.articles = response.data.response.docs;
        });
    }
  }
};
</script>

<style scoped>
.display {
  display: inline-flex;
}
</style>
