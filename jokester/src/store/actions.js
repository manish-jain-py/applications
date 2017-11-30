// https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten

import * as types from './mutation-types'

export const initJokes = ({commit}) => {
  axios.get("https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten", {
    method: 'GET'
  })
  .then(response => {
    commit(types.INIT_JOKES, response.data)
  })
}
