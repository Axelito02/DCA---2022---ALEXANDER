// link de reserva por si no funicona normal
// "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js" iniciar aplicacion firebase
// "https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js" iniciar, llamar y usar base de datos

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import { getFirestore, collection, addDoc, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDw9E5izpDaqecUt1a9brzM17J2fcBDNA4",
  authDomain: "database-algortimos.firebaseapp.com",
  projectId: "database-algortimos",
  storageBucket: "database-algortimos.appspot.com",
  messagingSenderId: "1009167080555",
  appId: "1:1009167080555:web:53739094a4c618105aa52e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const usersRef = collection(db, "users");

// añadir un usuario a la base de datos
export const addUser = async ({ name, username, email, password }: { name: string, username: string, email: string, password: string }) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name,
      username,
      email,
      password
    });
    return true
  } catch (e) {
    return false
  }
}

// buscar un usuario en la base de datos
export const queryUser = async ({ email, password }: { email: string, password: string }) => {
  try {
    const q1 = query(usersRef, where("email", "==", email))
    const q2 = query(usersRef, where("password", "==", password))

    const querySnapshot = await getDocs(q1 && q2);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  } catch (e) {
    return false
  }
}
