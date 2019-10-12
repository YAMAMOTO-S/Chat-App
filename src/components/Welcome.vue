<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h3>Welcome</h3>
        <form @submit.prevent="enterChat">
          <label for="name">Enter Your name:</label>
          <input type="text" name="name" v-model="name">
          <button class="btn  orange lighten-2">Enter</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name: null,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.welcome h3{
  color: #F99273
}

</style>
