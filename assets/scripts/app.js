'use strict'

const auth = require('./auth/event.js')
$(() => {
  $('#sign-up-form').on('submit', auth.onSignUp)
  $('#sign-in-form').on('submit', auth.onSignIn)
  $('#change-pw-form').on('submit', auth.onChangePassword)
  $('#Sign-out').on('submit', auth.onSignOut)
})
