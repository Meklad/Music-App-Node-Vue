import Api from '@/services/Api'

/**
 * This file contains the authenticaion services...
 */

export default {
  index () {
    return Api().get('songs')
  },
  create (song) {
    return Api().post('songs/post', song)
  }
}
