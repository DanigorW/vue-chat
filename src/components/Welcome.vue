<template>
  <div class="welcome container">
    <h3 v-if="showError" class="center errorText">plaese enter your name</h3>
    <div class="card">
      <div class="card-content center-align">
        <h1 class="teal-text">Welcome</h1>
        <form @submit.prevent="enterChat">
          <label v-if="!name" for="name">Enter your name</label>
          <input type="text" name="name" v-model="name">
          <button class="btn teal welcomeBtn">Enter chat</button>
          
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',

  data(){
    return {
      name: null,
      showError: null
    }
  },

  methods: {
    enterChat(){
      if(this.name === null){
        this.showError = !this.showError;

      } else {
        
        this.$router.push({name: 'chat', params: {name: this.name}})
      }
      
    }
  }

}
</script>

<style >
  .welcome {
    width: 500px;
    margin-top: 10rem;
 }

 .errorText {
   text-transform: uppercase;
   font-size: 20px;
   color: red;
  
 }

 .welcomeBtn {
   margin: 1rem 0;
 }
</style>