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
  saveNewTracker(name, counter, timer, occuredAt) {
    console.log(`name ${name} counter ${counter}, timer ${timer}, occuredAt ${occuredAt}`);
  }
}

export default ApiService
  