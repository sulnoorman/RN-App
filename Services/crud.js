import { FIREBASE, FIREBASE_FS } from './firebase'
import { collection, getDocs, addDoc, getDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore'

export const getAllData = async () => {
    try {
        const ref = collection(FIREBASE_FS, 'projects')
        const docSnap = await getDocs(ref)
        const data = []
        docSnap.forEach(doc => {
            data.push({
                id: doc.id,
                ...doc.data()
            })
        })
        return data
    } catch (error) {
        return error
    }
}

export const addData = async (data) => {
    try {
        const ref = collection(FIREBASE_FS, 'projects')
        await addDoc(ref, data) 
            .then(docRef => {
                console.log("Data product has been added succesfully")
            })
            .catch(err => {
                console.log("Data product failed to add")
            })
    } catch (error) {
        return error
    }
}

export const getDataById = async (id) => {
    const ref = doc(FIREBASE_FS, 'projects', id)
    try {
        const docSnap = await getDoc(ref)
        const data = []
        data.push({
            ...docSnap.data()
        })
        return data
    } catch (error) {
        return error
    }
}

export const updateData = async (idMenu, data) => {
    try {
        const ref = doc(FIREBASE_FS, "projects", idMenu)
        await updateDoc(ref, data)
            .then(docRef => {
                console.log("Data Product has been edited successfully")
            }).catch (err => {
                console.log("Data Product failed to edited")
            })
    } catch (error) {
        return error
    }
}

export const deleteData = async (idMenu) => {
    try {
        const ref = doc(FIREBASE_FS, 'projects', idMenu)
        await deleteDoc(ref)
            .then(docRef => {
                console.log('Data Product has been deleted successfully')
            }).catch(err => {
                console.log('Data Product failed to deleted')
            })
    } catch (error) {
        return (error)
    }
}