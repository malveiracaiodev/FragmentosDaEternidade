import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD6eIv69ffkm82nB5IhWu8Yi80zHMaicJA",
  authDomain: "fragmentos-da-eternidade.firebaseapp.com",
  projectId: "fragmentos-da-eternidade",
  storageBucket: "fragmentos-da-eternidade.firebasestorage.app",
  messagingSenderId: "474410800275",
  appId: "1:474410800275:web:50ed43696c38460afe2966",
  measurementId: "G-DPDY8YL2FT",
};

export const app = initializeApp(firebaseConfig);