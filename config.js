import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
  apiKey: "AIzaSyC1laSHsHJezs7c3Wx8mtRMt8M88opuNZo",
  authDomain: "projeto-de-codigo-aberto.firebaseapp.com",
  databaseURL: "https://projeto-de-codigo-aberto-default-rtdb.firebaseio.com",
  projectId: "projeto-de-codigo-aberto",
  storageBucket: "projeto-de-codigo-aberto.appspot.com",
  messagingSenderId: "1023631417999",
  appId: "1:1023631417999:web:6ce48675b18f0defdf86fa"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
