import { collection, getDocs, getFirestore } from "firebase/firestore"
import app from './init'

const firestore = getFirestore(app)

const retriveData = async (collectionName: string) : Promise<any> => {
  try {
    const snapshot = await getDocs(collection(firestore, collectionName))

    return snapshot.docs.map((item) => {
      return {
        id: item.id,
        ...item.data()
      }
    })
  } catch (error) {
    throw error
  }
}

export default retriveData;