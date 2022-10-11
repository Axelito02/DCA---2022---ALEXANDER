var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const usersRef = collection(db, "users");
export const addUser = ({ name, username, email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const docRef = yield addDoc(collection(db, "users"), {
            name,
            username,
            email,
            password
        });
        return true;
    }
    catch (e) {
        return false;
    }
});
export const queryUser = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const q1 = query(usersRef, where("email", "==", email));
        const q2 = query(usersRef, where("password", "==", password));
        const querySnapshot = yield getDocs(q1 && q2);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    }
    catch (e) {
        return false;
    }
});
