import firebase from 'firebase/app';
import 'firebase/storage';

  // Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyDZP1FmKlWLBM0weaGw5sRUdI-ghSVa-Bg",
	authDomain: "startup-a6230.firebaseapp.com",
	databaseURL: "https://startup-a6230.firebaseio.com",
	projectId: "startup-a6230",
	storageBucket: "mypro-cf0f4.appspot.com",
	messagingSenderId: "184255623545",
	appId: "1:184255623545:web:abb0bd78d503cf55"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export{
	storage , firebase as default
}