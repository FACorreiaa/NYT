<template>
  <div class="bg-light">
    <div class="fluid-container footer text-footer">
      <div class="row">
        <div class="col">
          <h5>Email</h5>
        </div>

        <div class="col">
          <h5>Contact</h5>
        </div>

        <div class="col">
          <h5>Social Media</h5>
        </div>
      </div>

      <div class="row">
        <div class="col">fernandocorreia316@gmail.com</div>
        <div class="col">937042328</div>
        <div class="col">
          <div class="display">
            <a href="https://www.facebook.com"
              ><img
                src="../assets/images/iconmonstr-facebook-4.svg"
                width="25"
                height="25"
                alt=""
                hspace="5"
            /></a>
            <a href="https://www.twitter.com"
              ><img
                src="../assets/images/iconmonstr-twitter-1.svg"
                width="25"
                height="25"
                alt=""
                hspace="5"
            /></a>
            <a href="https://www.instagram.com"
              ><img
                src="../assets/images/iconmonstr-instagram-11.svg"
                width="25"
                height="25"
                alt=""
                hspace="5"
            /></a>
            <a href="https://www.linkedin.com/in/fernando-correia-ab018079/"
              ><img
                src="../assets/images/iconmonstr-linkedin-3.svg"
                width="25"
                height="25"
                alt=""
                hspace="5"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #f8f9fa;
  color: black;
  text-align: center;
}
</style>
