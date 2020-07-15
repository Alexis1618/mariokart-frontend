'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./podcast-api')
const ui = require('./podcast-ui')

const onPostCharacter = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.postCharacter(data)
    .then(ui.postCharacterSuccess)
    .catch(ui.postCharacterFailure)
}

const onGetCharacter = function (event) {
  event.preventDefault()

  api.getCharatcer()
    .then(ui.getAllPodsSuccess)
    .catch(ui.getAllPodsFailure)
}

const onDeleteCharacter = function (event) {
  event.preventDefault()
  const characterId = $(event.target).data('id')
  api.deleteCharacter(characterId)
    .then(() => ui.deleteCharacterSuccess(characterId))
    .catch(ui.deleteCharacterFailure)
}

const onUpdateCharacter = function (event) {
  event.preventDefault()
  const characterId = $(event.target).data('id')
  const form = event.target
  const data = getFormFields(form)
  api.updateCharacter(data, characterId)
    .then(ui.onUpdateCharacterSuccess)
    .catch(ui.onUpdateCharacterFailure)
}
module.exports = {
  onPostCharacter,
  onGetCharacter,
  onDeleteCharacter,
  onUpdateCharacter
}
