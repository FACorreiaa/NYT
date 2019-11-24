<template>
  <div class="text-center">
    <router-link to="/landing"
      ><img
        src="../assets/welcome.jpeg"
        alt="welcome"
        height="500"
        width="750"
      />
    </router-link>
    <h3>Welcome to your NYT App</h3>
    <p>
      This is only a prototype. Full New York Time integration will be available
      soon
    </p>
    <p><strong>Click on the image to continue</strong></p>
  </div>
</template>

<script>
export default {
  name: 'WelcomePage'
};
</script>
