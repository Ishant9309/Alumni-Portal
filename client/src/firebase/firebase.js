import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyCStQzX6E5WB89CymSSs0cTXgqoI3CFPUQ",
  authDomain: "alumni-portal-3c6fc.firebaseapp.com",
  projectId: "alumni-portal-3c6fc",
  storageBucket: "alumni-portal-3c6fc.firebasestorage.app",
  messagingSenderId: "472984083471",
  appId: "1:472984083471:web:455421de84ef759762d77a"
}

const app = initializeApp(firebaseConfig)

export default app