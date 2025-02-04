import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { firestore } from "../../../firebase/firebaseService";


const RefCollectionsNovedades = collection(firestore, "Eventos")
async function addNovedades(dataNovedades) {
    console.log("recibe=>",dataNovedades)
    if(dataNovedades?.imagen){
      const bat64=await convertToBase64(dataNovedades.imagen)
      dataNovedades.imagen=bat64;

      try {
          await addDoc(RefCollectionsNovedades, dataNovedades);
          console.log("Registro exitoso: ");
      } catch (error) {
          console.log(error)
      }
    }
}

async function getAllNovedades() {
    try {
        const querySnapshot = getDocs(RefCollectionsNovedades)
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

async function deleteNovedadesDash(idDocument) {
    const docReferenceDocument=doc(RefCollectionsNovedades,idDocument)
    try {
       await deleteDoc(docReferenceDocument)
    } catch (error) {
        console.log(error)
    }
}

 export function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file); 
    reader.onload = () => resolve(reader.result); 
    reader.onerror = error => reject(error); 
  });
}

export { addNovedades, getAllNovedades,deleteNovedadesDash };