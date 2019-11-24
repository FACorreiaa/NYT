<template>
  <div>
    <Header></Header>
    <SearchBar @newsChange="onNewsChange"></SearchBar>
    <div class="row">
      <NewsDetails></NewsDetails>
      <NewsList :news="news"></NewsList>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from 'axios';

import Footer from './Footer';
import Header from './Header';
import SearchBar from './SearchBar';
import NewsDetails from './NewsDetails';
import NewsList from './NewsList';
export default {
  name: 'NewsPage',
  components: {
    Footer,
    Header,
    SearchBar,
    NewsDetails,
    NewsList
  },
  data() {
    return { news: [], selectedNews: null };
  },
  methods: {
    onVideoSelect(news) {
      this.selectedNews = news;
    },
    onNewsChange(searchArticle) {
      axios
        .get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
          params: {
            'api-key': process.env.API_KEY,
            q: searchArticle
          }
        })
        .then(response => {
          window.console.log(response);
          this.news = response.data.docs;
        })
        .catch(err => {
          window.console.log(err);
        });
    }
  }
};
</script>
