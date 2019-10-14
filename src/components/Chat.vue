<template>
   <div class="chat container">

      <h2 class="titlec">Chat Room <i class="material-icons">wc</i></h2>
      <h5 class="titlelc">Welcome to {{this.name}}</h5>

      <div class="card">
         <div class="card-content">
            <ul class="messages">
               <li v-for="message in messages" :key="message.id">
                  <span class="m-name">{{ message.name }}:</span>
                  <span class="m-message">{{ message.content }}</span>
                  <span class="m-time time">{{ message.timestamp}}</span>
                  <br>
               </li>
            </ul>
         </div>

         <div class="card-action">
            <NewMessage :name="name"/>
         </div>
      </div>

   </div>
</template>

<script>
import NewMessage from '@/components/NewMessage'
import db from '@/firebase/init'
export default {
  name: 'Chat',
  props: ['name'],
  components: {
    NewMessage
  },
  data(){
    return{
      messages: []
    }
  },
  created(){
    let ref = db.collection('messages').orderBy('timestamp')
    
    // subscribe to changes to the 'messages' collection
    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        console.log(change)
        if(change.type == 'added'){
          let doc = change.doc
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: doc.data().timestamp
          })
        }
      })
    })
  }
}
</script>

<style>
.titlec{
   color: #F99273
}
.titlelc{
   color: #E5E0DF
}
.m-name{
   color: #F99273
}
.m-message{
   color: #757575
}
.m-time{
   color: #E5E0DF
}
.chat h5{
   margin-bottom: 70px;
}
.chat span{
   font-size: 1.4em;
}
.chat .time{
   display: block;
   font-size: 1.2em;
}
.chat li{
   text-align: left;
}
.chat span{
   padding-left: 10px;
}

</style>