<template>
  <div>
    <b-nav tabs justified class="bg-light">
      <b-link to="/landing/news"> News (only this route is working) </b-link>

      <b-nav-item>Books</b-nav-item>
      <b-nav-item>Feeds</b-nav-item>
      <b-nav-item>Movies</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: 'Header'
};
</script>
