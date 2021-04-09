import config from './config'

const ApiService = {
  getTrackers() {
    return fetch(`${config.API_ENDPOINT}/api/trackers`, {
          method: 'GET',
          headers: {},
        })
        .then(res => 
          (!res.ok)
            ? res.json({error: {message: 'No trackers'}})
            : res.json()
        )
  },
}

export default ApiService
  