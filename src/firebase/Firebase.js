import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

class Firebase{
    constructor(){
        app.initializeApp(firebaseConfig);

        this.auth = app.auth();
        this.db = app.firestore();
    }

    //////// AUTH /////////

    loginWithEmail = (email, password) => {

    }

    signUpWithEmail = (userInfo) => {
        this.userInfo = userInfo;
        const {email, password} = userInfo;
        this.auth.createUserWithEmailAndPassword(email, password)
          .then(cred => {
              console.log(cred.user.uid);
              this.updateUserDB(cred.user, userInfo)
          })
          .catch(err => {
              console.log(err);
              return err;
          })
    }

    updateUserDB = (user, userInfo) =>{
        this.db.collection('users').doc(user.uid).set({
            name: userInfo.firstName + " " + userInfo.lastName,
            communities: [],
        })
    }
}

export default Firebase