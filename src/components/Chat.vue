<template>
  <div class="chat">
      <h1 class="center teal-text">Vue Chat</h1>
      <div class="card">
          <div class="card-content">
              <ul class="messages">
                  <li v-for=" item in message " :key="item.id">
                      <span class="teal-text">{{item.name}}:</span>
                      <span class="grey-text text-darked-3">{{item.content}}</span>
                      <span class="grey-text time">{{item.timestamp}}</span>
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
import db from '../firebase/init'
import NewMessage from './NewMessage'
export default {
    name: 'Chat',

    props: ['name'],

    data(){
        return{
            message: []
        }
    },
    components: {
        NewMessage
    },

    created(){
        let ref = db.collection('messages').orderBy('time')
        ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type == 'added'){
                    let doc = change.doc
                    this.message.push({
                        id: doc.id,
                        name: doc.data().name,
                        content: doc.data().content,
                        timestamp: doc.data().timestamp
                    })
                }
            })
        })
    },


    methods: {

    }
}
</script>

<style>
    .chat {
        margin: 0 auto;
        width: 800px
    }

    .time {
        display: block;
    }

    .messages span:nth-child(1) {
        margin-right: .5rem;
        font-size: 1.3rem;
    }

    .messages {
        max-height: 300px;
        overflow: auto;
    }
</style>