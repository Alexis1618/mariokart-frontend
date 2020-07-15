'use strict'

const config = require('./../config')
const store = require('./../store')

const getCharatcer = function (data) {
  return $.ajax({
    url: config.apiUrl + '/characters',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const postCharacter = function (data) {
  return $.ajax({
    url: config.apiUrl + '/characters',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      character: {
        name: data.character.name,
        info: data.character.info,
        owner: store.user._id
      }
    }
  })
}
const updateCharacter = function (data, characterId) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/characters/' + characterId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      character: {
        name: data.character.name,
        info: data.character.info
      }
    }
  })
}

const deleteCharacter = function (characterId) {
  return $.ajax({
    url: config.apiUrl + '/characters/' + characterId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getCharatcer,
  postCharacter,
  updateCharacter,
  deleteCharacter
}
