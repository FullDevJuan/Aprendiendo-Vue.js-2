import { collection, getDocs } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";

export async function getComputadores(db, auth) {
  try {
    await signInWithEmailAndPassword(
      auth,
      process.env.VUE_APP_EMAIL,
      process.env.VUE_APP_PASSWORD,
    );
    const computadores = collection(db, "computadores");
    const docs = await getDocs(computadores);
    const computadoresList = docs.docs.map((doc) => doc.data());
    return computadoresList;
  } catch (error) {
    console.error("Error fetching computadores:", error);
  }
}
