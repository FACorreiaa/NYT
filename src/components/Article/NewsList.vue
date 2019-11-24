<template>
  <ul class="list-group col-md-8 text-center">
    <NewsListItem
      v-for="article in articles"
      :article="article"
      :key="article.etag"
      @articleSelect="onArticleSelect"
    >
    </NewsListItem>
  </ul>
</template>

<script>
import NewsListItem from './NewsListItem';

export default {
  name: 'NewsList',
  components: {
    NewsListItem
  },
  props: ['articles'],
  methods: {
    onArticleSelect(article) {
      this.$emit('articleSelect', article);
    }
  }
};
</script>

<style></style>
