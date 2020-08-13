import {
  firebaseAuth
} from './firebase'

const login = ({ email, password }) => firebaseAuth.signInWithEmailAndPassword(email, password)
const createAccount = ({ email, password }) => firebaseAuth.createUserWithEmailAndPassword(email, password)
const logout = () => firebaseAuth.signOut()

export {
  login,
  createAccount,
  logout
}
