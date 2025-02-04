import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../../../firebase/firebaseService";
import { enqueueSnackbar } from "notistack";


const RefCollectionsUser = collection (firestore, "Usuarios")
 async function addUser (dataUser) {
    try {
       await addDoc (RefCollectionsUser, dataUser);       
        console.log("Registro exitoso: ");
    } catch (error) {      
       console.log(error)
    }
 }

 export {addUser};