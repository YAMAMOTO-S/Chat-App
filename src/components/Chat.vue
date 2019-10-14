<template>
   <div class="chat container">

      <h2 class="titlec">Chat Room</h2>
      <h5 class="titlelc">Welcome to {{this.name}}</h5>

      <div class="card">
         <div class="card-content">
            <ul class="messages">
               <li>
                  <span class="m-name">Name</span>
                  <span class="m-message">Message</span>
                  <span class="m-time time">time</span>
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


export default {
   name: 'Chat',
   props: ['name'],
   components: {
      NewMessage
   },
   data(){
      return{

      }
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
   text-align: left
}

</style>