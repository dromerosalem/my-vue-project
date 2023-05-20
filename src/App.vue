<template>
  <v-app id="inspire">
    <v-app-bar
      class="px-3"
      color="white"
      flat
      density="compact"
    >
      <v-avatar
        color="grey-darken-1"
        size="32"
      ></v-avatar>

      <v-spacer></v-spacer>

      <v-tabs
        centered
        color="grey-darken-2"
      >
        <v-tab
          v-for="link in links"
          :key="link"
        >
          {{ link }}
        </v-tab>
      </v-tabs>
      <v-spacer></v-spacer>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey-darken-1"
        size="32"
      ></v-avatar>
    </v-app-bar>

    <v-main style="background-color: lightblue;">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="2"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
            >
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="8"
          >
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <!--  -->
              <h1>City: {{city}}</h1>
              <h3>Temperature: {{ data.temperature }}</h3>
              <h3>Sky: {{ data.description }}</h3>
              <h3>Wind: {{ data.wind }}</h3>

            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="2"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
            >
              <!--  -->
              <input v-model="newCity" type="text" placeholder="Enter city" />
              <button @click="updateCity">Get Weather</button>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import{mapActions, mapState} from 'vuex';
import store from './store'

  export default {
    data: () => ({
      links: [
        'Dashboard',
        'Messages',
        'Profile',
        'Updates',
      ],
      city: 'Warsaw',
      newCity: '',
    }),
    computed:{
      ...mapState(['data'])
    },
    methods:{
      ...mapActions(['fetchData']),
      updateCity(){
        this.city = this.newCity;
        this.fetchData(this.city)
           .then((apiResponse) => {
            console.log('APIResponse', JSON.parse(JSON.stringify(apiResponse)));
            console.log('StoreData', JSON.parse(JSON.stringify(store.state.data)));
             })
    .catch((error) => {
      console.error(error);
     });
      }


    },
    
    
    
    mounted() {
        this.fetchData(this.city)
           .then((apiResponse) => {
            console.log('APIResponse', JSON.parse(JSON.stringify(apiResponse)));
            console.log('StoreData', JSON.parse(JSON.stringify(store.state.data)));
             })
    .catch((error) => {
      console.error(error);
     });
    }

  }
</script>