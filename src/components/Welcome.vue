<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h3>Welcome</h3>
        <form @submit.prevent="enterChat">
          <label for="name">Enter Your name:</label>
          <input type="text" name="name" v-model="name">
          <p v-if="feedback" class="red-text">{{ feedback }}</p>
          <button class="btn  orange lighten-3">Enter</button>
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
      feedback: null
    }
  },
  methods:{
    enterChat(){
      if(this.name){
        this.$router.push({ name: 'Chat', params: { name: this.name }})
      }else{
        this.feedback = 'You must enter a name to join.'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.welcome h3{
  color: #F99273
}
.welcome{
  max-width: 600px;
  margin-top: 100px;
}
.welcome button{
  margin: 30px auto;
}
.welcome form{
  padding: 30px;
}
</style>
