<template>
  <div>
    <b-nav tabs justified class="bg-light">
      <b-nav-item><b-link to="/landing/news">Articles</b-link></b-nav-item>

      <b-nav-item disabled>Books</b-nav-item>
      <b-nav-item disabled>Feeds</b-nav-item>
      <b-nav-item disabled>Movies</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: 'Header'
};
</script>
