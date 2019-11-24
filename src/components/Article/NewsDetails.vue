<template>
  <div v-if="article" class="col-md-8">
    <div>
      <b-card
        :title="CardTitle"
        :sub-title="CardSubtitle"
        tag="article"
        class="details"
      >
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsDetails',
  props: ['article'],
  computed: {
    CardTitle() {
      return this.article.abstract;
    },
    CardSubtitle() {
      return this.article.lead_paragraph;
    }
  }
};
</script>

<style scoped>
.details {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
