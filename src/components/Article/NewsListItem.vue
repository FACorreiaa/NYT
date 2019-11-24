<template>
  <div class="">
    <b-card
      :title="CardTitle"
      :sub-title="CardSubtitle"
      tag="article"
      style="max-width: 20rem;"
      class="list-group-item media"
    >
      <b-card-text><strong>Source: </strong>{{ article.source }} </b-card-text>

      <b-button @click="onArticleSelect" variant="primary"
        >Article Details</b-button
      >
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'NewsListItem',
  props: ['article'],
  computed: {
    CardTitle() {
      return this.article.headline.main;
    },
    CardSubtitle() {
      return this.article.web_url;
    }
  },

  methods: {
    onArticleSelect() {
      this.$emit('articleSelect', this.article);
    }
  }
};
</script>

<style scoped></style>
