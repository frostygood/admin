<template>
  <div>
    <h1>Банеры</h1>
    <br><br>
    <v-divider />
    <br>
    <h2>Куки банер</h2>
    <br>
    <v-form v-model="valid">
      <v-expansion-panel dark>
        <v-expansion-panel-content
          v-for="(value, name, index) in data_cookie_banner"
          :key="index"
        >
          <template v-slot:header>
            <div>{{ name }} - локаль</div>
          </template>
          <v-container>
            <v-card>
              <v-textarea
                v-model="data_cookie_banner[name].text"
                label="text in banner"
                :value="data_cookie_banner[name].text"
              />
              <v-text-field
                v-model="data_cookie_banner[name].button"
                dark
                label="text for button in banner"
                required
              />
            </v-card>
          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-flex>
        <v-btn
          color="warning"
          @click="set_cookie_banner"
        >
          Save
        </v-btn>
      </v-flex>
    </v-form>
  </div>
</template>


<script>
import firebaseConfig from '../config/firebase'
import firebase from 'firebase'
var db = firebase.firestore();
export default {
  data: function () {
    return{
      data_cookie_banner: null,
      valid: false
    }
  },
  mounted: function () {
    this.get_cookie_banner();
  },
  methods: {
    get_cookie_banner: function (event) {
      db.collection('cookie_banner').get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            this.data_cookie_banner = doc.data();
          });
        })
        .catch((err) => {
          console.log('Error getting documents', err);
        });
    },
    set_cookie_banner: function(event) {
      db.collection('cookie_banner').doc("e9nR2eICuH9iuowUtVR8").set(this.data_cookie_banner)
      .then(function() {
          console.log("Document successfully written!");
          alert("Document successfully written!");
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
          alert("Error writing document: ", error);
      });
    }
  }
}
</script>

<style scoped>

</style>