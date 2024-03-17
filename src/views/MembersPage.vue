<template>
  <ion-page>
    
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Members</ion-title>
      </ion-toolbar>
    </ion-header>
  
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Members</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <div class="member" :auto-hide="false" v-for="(p, i) in membersList" v-on:click="check(p.name)" :key="i">
          <h1>{{ p.name }}</h1>
          <h4>{{ p.role }}</h4>
        </div>
      </div>

      <ion-toast
        :is-open="isOpen"
        message="Error: 303"
        :duration="5000"
        @didDismiss="setOpen(false)"
      ></ion-toast>
    </ion-content>

  </ion-page>
</template>

<script setup lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToast, IonToolbar } from '@ionic/vue';
import { ref } from 'vue';

const membersList = [
  {
    name: "Nescio",
    role: "Estranged Second Cousin"
  },
  {
    name: "Komm",
    role: "Man / Family Lawyer"
  },
  {
    name: "Temi",
    role: "Komm's Wife"
  },
  {
    name: "Mataza",
    role: "Uncle"
  },
  {
    name: "Garry Chess",
    role: "Father"
  },
  {
    name: "Jason Citron",
    role: "Father"
  },
  {
    name: "Zombie Menace",
    role: "Uncle"
  },
  {
    name: "Citron",
    role: "Adopted Son"
  },
  {
    name: "Tigran",
    role: "Ex"
  },
  {
    name: "Unknown",
    role: "Ą̶̡̨͙̮͉̥̻̰͕̪̹͇͎̰͇͎͎̟͎͖̘̤̜̦͔̝̯͎͒̊̉̎̃̉ͅṋ̶̡̨̨̪̱̳͕̲̺̣̗̘̝̠̞̰̳̫̠̬͔͇̟̯͓́͋̈́̽̽́̀̒̈́́́̈͂̏̓͘͠ͅa̷̢̧̡͚͍̗̥̹̰̣̺̩̳̬͓̱̜̝̰͙̖͔͍̜̳͍̝̣͕̟̯͔̭͈̦̳̯̰͜͠ͅr̶̛̩̮̙̒̐͗̓̈́̾͆͑̅̍͗̀͒̂̇́͂̋̃̀̿͐͂̉̊̒̊̿́̈́̌͐̃̚͘̚͘͠ç̵̢̡̡̨̛̝̣̰̰̫̲̤̰̥͕̳̳͕͓̝͉̹̬̫̪̮̗͔̰̱͔̜͍̯̟̦̠̬͓̲̌͌̈́̀̆͒͛̓̿̌̌̉̑̈̑͛͆͐̌̓͛̓̅̓͑̒̈́̋̂̐̈̀͑̂̇́͑̍͘̚̕̕̕͠͝͝ͅḫ̵̳̤̩̦͔̭̹̞͚̼̌̏̋̐̾̔̓͗͛̅̏͂̌͗̕y̸̢̢̢̨̨̧̛̛̱͚̯̭̬͍̗̣͈̠̪͍͎̙̟̫̩͚͍̪̠̮͔̲̪̖̘̻̥̺͑̔̌͗̆̌̋̉͆̏̀̍͗͂͗̾͐̌͑͊͐̄̓̾̄̅͗̑̓̏͑̀̒̑̍͊̓̓̄̂͑͘͜͠͝"
  },
  {
    name: "RacG",
    role: "Son"
  },
  {
    name: "Spunch",
    role: "Son"
  },
  {
    name: "DaMistake",
    role: "Daughter"
  },
  {
    name: "Mause",
    role: "Ex son-in-law"
  },
  {
    name: "Elly",
    role: "What"
  },
  {
    name: "Kapola",
    role: "E"
  },
  {
    name: "Lilly",
    role: "Goon"
  },
  {
    name: "Chaotixu",
    role: "Goon"
  },
  {
    name: "Kirbo",
    role: "Lobotomized Dumbass"
  },
  {
    name: "Jeff",
    role: "Mobile Warship"
  },
  {
    name: "Squonker",
    role: "Jeff Support Vehicle (JSV)"
  }
]

const isOpen = ref(false);
function check(name: string) {
  if (name === "Unknown") {
    setOpen(true);
  }
}
const setOpen = (state: boolean) => {
  isOpen.value = state;
};
</script>

<style scoped>
#container {
  display: grid;
  text-align: center;
  margin: 10px;
}
#container h1 {
  margin: 10px 0;
}
h2 {
  font-weight: lighter;
}
.member {
  background-color: #ffbc649b;
  margin: 7px 5px;
  border-radius: 10px;
}
</style>
