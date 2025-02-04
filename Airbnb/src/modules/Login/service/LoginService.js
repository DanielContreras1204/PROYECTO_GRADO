import { collection, getDocs,query, where } from "firebase/firestore";
import { firestore } from "../../../firebase/firebaseService";


const RefCollectionsUsuarios = collection(firestore, "Usuarios");

async function getUserByEmail(email) {
    try {
    
        const q = query(RefCollectionsUsuarios, where("email", "==", email));
        const querySnapshot = await getDocs(q);

   
        if (querySnapshot.empty) {
            console.log("No se encontró el usuario con ese correo.");
            return null; 
        }

        const userData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        console.log("Usuario encontrado: ", userData);
        return userData; 
    } catch (error) {
        console.log("Error al buscar el usuario: ", error);
        return null;
    }
}






export { getUserByEmail};