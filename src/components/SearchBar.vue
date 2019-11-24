<template>
  <div>
    <div class="container">
      <!-- <div>
        <b-input-group prepend="Search your news" class="mb-2">
          <b-form-input aria-label="news" @input="onInput"></b-form-input>
        </b-input-group>
      </div> -->
      <input @input="onInput" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  method: {
    onInput: function(event) {
      this.$emit('newsChange', event.target.value);
    }
  }
};
</script>
