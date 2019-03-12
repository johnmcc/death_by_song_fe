import config from './config'

class SongService {
  static fetchAll(){
    return fetch(config.apiUrl)
      .then(response => response.json())
  }

  static fetchOne(id){
    return fetch(config.apiUrl + id)
      .then(response => response.json())
  }
}

export default SongService
