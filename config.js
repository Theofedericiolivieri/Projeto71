import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  apiKey: "AIzaSyBhcoBQ4LlpHsnsFg1v4Klbl0lgvsVkl6I",
  authDomain: "projeto71-4c217.firebaseapp.com",
  projectId: "projeto71-4c217",
  storageBucket: "projeto71-4c217.appspot.com",
  messagingSenderId: "936219329995",
  appId: "1:936219329995:web:35ced66d77c49dd3ad224e"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
