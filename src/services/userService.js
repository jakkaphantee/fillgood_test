import {
  firebaseFirestore
} from './firebase'

const COLLECTION = 'users'

const getMyProfile = ({ email }) => firebaseFirestore.collection(COLLECTION).where('email', '==', email)

export {
  getMyProfile
}
