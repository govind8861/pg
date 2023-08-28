import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyB7Z5ZPhIq5Y87oFLpoTwO1QKCLLejuCsM',
	authDomain: 'gobind-pg.firebaseapp.com',
	projectId: 'gobind-pg',
	storageBucket: 'gobind-pg.appspot.com',
	messagingSenderId: '887810207250',
	appId: '1:887810207250:web:e0565320b9b4a3e5af72cb',
	measurementId: 'G-1T2LE6ZN9N',
}
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

export { db, storage, auth, googleProvider }
