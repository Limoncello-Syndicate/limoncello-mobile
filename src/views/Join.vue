<template>
  <ion-page>
    
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Join</ion-title>
      </ion-toolbar>
    </ion-header>
  
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Join</ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="container">
        <h3>So<br>You wanna join us eh? Well I don't blame ya. Give us yer Discord and we'll see what we can do.</h3>
        <ion-input label="@" placeholder="username" ref="ionUsername"></ion-input>
        <button v-on:click="register">Register</button>
      </div>
      <!-- <p class="error">Please note this app is in early development and you may experience some demons.</p> -->
    
      <ion-toast
        :is-open="isOpen"
        message="The bread has been breaded. Glory awaits you, soldier."
        :duration="1000"
        @didDismiss="setOpen(false)"
      ></ion-toast>
      <ion-toast
        :is-open="isOpen2"
        message=":thinkies:"
        :duration="1000"
        @didDismiss="setOpen2(false)"
      ></ion-toast>
    </ion-content>

  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToast, IonToolbar, IonFooter } from '@ionic/vue';
import { ref } from 'vue';
import { CapacitorHttp } from '@capacitor/core';

const isOpen = ref(false);
const isOpen2 = ref(false);
const ionUsername = ref();

const setOpen = (state: boolean) => {
  isOpen.value = state;
};
const setOpen2 = (state: boolean) => {
  isOpen2.value = state;
};

function register() {
  let username: string = ionUsername.value.value;
  if (username === "" || username.length > 15) {
    console.log("wat");
    setOpen2(true);
  } else {
    sendMessageToDiscord(username);
  }
}

async function sendMessageToDiscord(username: string) {
  // fetch("https://limoncello-api.onrender.com/?username=" + username, {
  //   method: "POST",
  //   body: JSON.stringify({
  //     username: username
  //   }),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8"
  //   }
  // })
  // .then((response) => {
  //   setOpen(true);
  // })

  // const options = {
  //   url: 'https://example.com/my/api',
  //   headers: { 'X-Fake-Header': 'Fake-Value' },
  //   data: { foo: 'bar' },
  // };

  const response = await CapacitorHttp.post({
    url: "https://limoncello-api.onrender.com/",
    params: {
      username: username
    }
  });

  if (response.status === 200) {
    setOpen(true);
  } else {
    console.log(response);
  }

  // const options = {method: 'POST', headers: {'User-Agent': 'mobile/androidoriosidk'}};

  // fetch('https://limoncello-api.onrender.com/?username=' + username, options)
  //   .then(response => response.json())
  //   .then(response => setOpen(true))
  //   .catch(err => console.error(err));
}
</script>

<style scoped>
#container {
  padding: 10px;
}
.error {
  color: darkred;
}
button {
  font-size: 1.25rem;
  background-color: #FF6868;
  padding: 10px 20px;
  border-radius: 10px;
  color: #FFEAA7;
}
</style>