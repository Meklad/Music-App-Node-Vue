import Api from '@/services/Api'

/**
 * This file contains the authenticaion services...
 */

export default {
  register (credentials) {
    return Api().post('register', credentials)
  },
  login (credentials) {
    return Api().post('login', credentials)
  }
}
