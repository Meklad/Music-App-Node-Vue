import Api from '@/services/Api'

/**
 * This file contains the authenticaion services...
 */

export default {
  index (search) {
    return Api().get('songs', {
      params: {
        search: search
      }
    })
  },
  create (song) {
    return Api().post('songs/post', song)
  },
  show (songId) {
    return Api().get(`songs/${songId}`)
  },
  put (song) {
    return Api().put(`songs/${song.id}`, song)
  }
}
