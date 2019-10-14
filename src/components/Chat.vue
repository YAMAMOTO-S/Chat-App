<template>
   <div class="chat container">
      <h2>Chat Room</h2>
      <h5>Welcome to {{this.name}}</h5>
   </div>
</template>

<script>
export default {
   name: 'Chat',
   props: ['name'],
   data(){
      return{

      }
   }
}
</script>

<style>


</style>