import {
  firebaseFirestore
} from './firebase'

const COLLECTION = 'users'

const getUser = () => firebaseFirestore.collection(COLLECTION).get()
const getUserDetail = ({ id }) => firebaseFirestore.collection(COLLECTION).doc(id).get()
const createUserProfile = ({ email, firstName, lastName, phoneNumber, age, address }) => firebaseFirestore.collection(COLLECTION).add({
  email: email,
  first_name: firstName,
  last_name: lastName,
  phone_number: phoneNumber,
  age: age,
  address: address
})
const updateUserProfile = ({ id, firstName, lastName, phoneNumber, age, address }) => firebaseFirestore.collection(COLLECTION).doc(id).update({
  first_name: firstName,
  last_name: lastName,
  phone_number: phoneNumber,
  age: age,
  address: address
})
const deleteUserProfile = ({ id }) => firebaseFirestore.collection(COLLECTION).doc(id).delete()

export {
  getUser,
  getUserDetail,
  createUserProfile,
  updateUserProfile,
  deleteUserProfile
}
