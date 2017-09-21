import API from './API'

const MessagesAPI = {
  fetchAll({onSuccess}) {
    API({
      url: "api/v1/messages",
      method: "GET",
      onSuccess: onSuccess
    })
  },
  create({data, onSuccess}) {
    API({
      data: data,
      url: "api/v1/messages",
      method: "POST",
      onSuccess: onSuccess
    })
  }
}

export default MessagesAPI
