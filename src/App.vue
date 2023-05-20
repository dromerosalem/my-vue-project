<template>
  <v-app id="inspire">
    <v-card class="text-center justify-center align-center">
      <h1>My Weather Vue App</h1>
    </v-card>

    <v-main style="background-color: lightblue">
      <v-container>
        <v-row>
          <v-col cols="12" sm="2">
            <v-sheet
              rounded="lg"
              min-height="268"
              class="text-center justify-center align-center marginTop"
            >
              <!--  -->
              <div class="paddingTop fontSize">
                <h5>Local Time: {{ localTime }}</h5>
                <h5>Local Date: {{ localDate }}</h5>
              </div>
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="8">
            <v-sheet
              min-height="50vh"
              rounded="lg"
              class="text-center justify-center align-center marginTop"
            >
              <!--  -->
              <div class="paddingTop fontSize">
                <h1>City: {{ city }}</h1>
                <h3>Temperature: {{ data.temperature }}</h3>
                <h3>Sky: {{ data.description }}</h3>
                <h3>Wind: {{ data.wind }}</h3>
              </div>
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="2">
            <v-sheet
              rounded="lg"
              min-height="150"
              class="text-center justify-center align-center marginTop"
            >
              <!--  -->

              <v-text-field
                v-model="newCity"
                type="text"
                label="City"
              ></v-text-field>
              <v-btn @click="updateCity">Get Weather</v-btn>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapState } from "vuex"
import store from "./store"

export default {
  data: () => ({
    city: "Warsaw",
    newCity: "",
    localTime: "",
    localDate: "",
  }),
  computed: {
    ...mapState(["data"]),
  },
  methods: {
    ...mapActions(["fetchData"]),
    updateCity() {
      this.city = this.newCity
      this.fetchData(this.city)
        .then((apiResponse) => {
          console.log("APIResponse", JSON.parse(JSON.stringify(apiResponse)))
          console.log("StoreData", JSON.parse(JSON.stringify(store.state.data)))
        })
        .catch((error) => {
          console.error(error)
        })
    },

    getLocalDateTime() {
      const date = new Date()

      // Get the local time
      const hours = date.getHours()
      const minutes = date.getMinutes()
      const seconds = date.getSeconds()
      this.localTime = `${hours}:${minutes}:${seconds}`

      // Get the local date
      const year = date.getFullYear()
      const month = date.getMonth() + 1 // Month is zero-based, so add 1
      const day = date.getDate()
      this.localDate = `${year}-${month}-${day}`
    },
  },

  mounted() {
    this.fetchData(this.city)
      .then((apiResponse) => {
        console.log("APIResponse", JSON.parse(JSON.stringify(apiResponse)))
        console.log("StoreData", JSON.parse(JSON.stringify(store.state.data)))
      })
      .catch((error) => {
        console.error(error)
      })

    this.getLocalDateTime()
  },
}
</script>

<style>
.custom-app-bar {
  height: 48px; /* Adjust the height value as per your requirements */
}
.marginTop {
  margin-top: 50px;
}

.paddingTop {
  padding-top: 50px;
}

.fontSize {
  font-size: 2em;
}
</style>
