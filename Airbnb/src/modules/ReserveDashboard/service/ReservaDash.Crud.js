import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { firestore } from "../../../firebase/firebaseService";


const RefCollectionsReservaDash = collection(firestore, "Reservas")
const RefCollectionsOficinas = collection(firestore, "Oficinas")

async function addReservaDash(dataReservaDash) {
    try {
        await addDoc(RefCollectionsReservaDash, dataReservaDash);
        console.log("Registro exitoso: ");
    } catch (error) {
        console.log(error)
    }
}

async function getAllReservaDash() {
    try {
        const querySnapshot = getDocs(RefCollectionsReservaDash)
        const newData = (await querySnapshot).docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data(),
            }
        })
        return newData;
    } catch (error) {
        console.log(error)
    }
}

async function getAllOficinas() {
    try {
        const querySnapshot = getDocs(RefCollectionsOficinas)
        const newData = (await querySnapshot).docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data(),
            }
        })
        return newData;
    } catch (error) {
        console.log(error)
    }
}

async function deleteReservaDash(idDocument) {
    const docReferenceDocument=doc(RefCollectionsReservaDash,idDocument)
    try {
       await deleteDoc(docReferenceDocument)
    } catch (error) {
        console.log(error)
    }
}




export { addReservaDash, getAllReservaDash ,deleteReservaDash,getAllOficinas};