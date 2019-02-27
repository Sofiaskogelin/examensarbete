import * as firebase from 'firebase';
import 'firebase/firestore';

class Backend {

    constructor(){
        var config ={
        apiKey: "AIzaSyDMapI9uRib5kI4cDd26bZ33tjotjUnbQs",
        authDomain: "travelchat-53a2e.firebaseapp.com",
        databaseURL: "https://travelchat-53a2e.firebaseio.com",
        projectId: "travelchat-53a2e",
        storageBucket: "travelchat-53a2e.appspot.com",
        messagingSenderId: "585638301719"
      };
      firebase.initializeApp(config);

      //for firebase auth and firestore references
      const auth = firebase.auth();
      const db = firebase.firestore();
    }
}

export default new Backend();
