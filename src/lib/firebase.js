import * as firebase from "firebase";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD0-uIpIO1Ey0FbRcXgxj9_pFlqRxQi4jI",
  authDomain: "khanacademyrn.firebaseapp.com",
  databaseURL: "https://khanacademyrn.firebaseio.com",
  projectId: "khanacademyrn",
  storageBucket: "khanacademyrn.appspot.com",
  messagingSenderId: "752318000760",
  appId: "1:752318000760:web:e272afd068fe492b8d078d",
  measurementId: "G-285G009HFE",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
