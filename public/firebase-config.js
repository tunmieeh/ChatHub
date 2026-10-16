const firebaseConfig = {
  apiKey: "AIzaSyBrPMPKkUtsPTL5shETW6BifTu3hBN28-U",
  authDomain: "chatappp-57917.firebaseapp.com",
  projectId: "chatappp-57917", 
  databaseURL:  "https://chatappp-57917-default-rtdb.firebaseio.com",
  storageBucket: "chatappp-57917.firebasestorage.app",
  messagingSenderId: "976980243596",
  appId: "1:976980243596:web:b8e189a84dbcfa859bf7a9"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();
const $ = (id) => document.getElementById(id);