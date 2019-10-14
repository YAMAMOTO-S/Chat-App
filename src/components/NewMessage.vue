<template>
   <div class="new-message bord">
      <form @submit.prevent="addMessage">
         <label for="new-message">New Message(enter to add)</label>
         <input type="text" name="new-message" v-model="newMessage">
         <p class="red-text" v-if="feedback">{{ feedback }}</p>
      </form>
   </div>
</template>

<script>
import db from '@/firebase/init'

export default {
   name: 'NewMEssage',
   props: ['name'],
   data(){
      return {
         newMessage: null,
         feedback: null,

      }
   },
   methods: {
      addMessage(){
         if(this.newMessage){
            db.collection('messages').add({
               content: this.newMessage,
               name: this.name,
               timestamp: Date.now()
            }).catch(err => {
               console.log(err)
            })
            this.newMessage = null //入力した後に削除する。
            this.feedback = null
         } else {
            this.feedback = "You must enter a message in order to send one"
         }
      }
   }
}
</script>

<style>
.lll{
   text-align: left;
}
</style>