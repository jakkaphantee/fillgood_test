import {
  firebaseFirestore
} from './firebase'

const COLLECTION = 'users'

const getUser = () => firebaseFirestore.collection(COLLECTION).get()
const getUserDetail = ({ id }) => firebaseFirestore.collection(COLLECTION).doc(id).get()
const createUser = ({ firstName, lastName, phoneNumber, age, address }) => firebaseFirestore.collection(COLLECTION).add({
  first_name: firstName,
  lastName: lastName,
  phone_number: phoneNumber,
  age: age,
  address: address
})
const deleteUser = ({ id }) => firebaseFirestore.collection(COLLECTION).doc(id).delete()

export {
  getUser,
  getUserDetail,
  createUser,
  deleteUser
}
