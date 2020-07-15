'use strict'

const store = require('./../store')
const characterHandle = require('./../templates/characterList.handlebars')

const postCharacterSuccess = function (response) {
  $('form').trigger('reset')
  $('#character-message').text('new character!').fadeIn(1000).fadeOut(5000)
  store.character = response.character
}

const postCharacterFailure = function (response) {
  $('#character-message').text('Unable to add Character. Try Again!')
}

const getCharatcerSuccess = function (response) {
  const characterHtml = characterHandle({ characters: response.characters })
  $('.content').html(characterHtml)
  $('#character-message').text('Here are your characters!').fadeIn(1000).fadeOut(5000)
}

const getCharatcerFailure = function (response) {
  $('#character-message').text('Failed to show character! Try Again!')
}

const deleteCharacterSuccess = function (characterId) {
  $('#character-message').text('Character Deleted').fadeIn(1000).fadeOut(5000)
  $(`[data-id='${characterId}']`).remove()
}

const deleteCharacterFailure = function () {
  $('#character-message').text('Delete Failed. Try Again!')
}

const updateCharacterSuccess = function (podcastId) {
  $('#pod.message').text('character Updated!').fadeIn(1000).fadeOut(5000)
}

const updateCharacterFailure = function () {
  $('#character-message').text('update Update Unsuccessful. Try Again')
}

module.exports = {
  postCharacterSuccess,
  postCharacterFailure,
  getCharatcerSuccess,
  getCharatcerFailure,
  deleteCharacterSuccess,
  deleteCharacterFailure,
  updateCharacterSuccess,
  updateCharacterFailure
}
