import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCjsgHCfM-pDNr3xKjYdwlDZC37DT-Djjs",
    authDomain: "village-dsc.firebaseapp.com",
    databaseURL: "https://village-dsc.firebaseio.com",
    projectId: "village-dsc",
    storageBucket: "village-dsc.appspot.com",
    messagingSenderId: "29059178411",
    appId: "1:29059178411:web:f29e33f0eade2598ac7cee",
    measurementId: "G-H9L1482XDR"
};

class Firebase{
    constructor(){
        app.initializeApp(firebaseConfig);

        this.auth = app.auth();
        this.db = app.firestore();
    }

    loginWithEmail = (email, password) => {

    }

    signupWithEmail = (userInfo) => {

    }
}

export default Firebase