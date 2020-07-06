'use strict'

const auth = require('./auth/event.js')

$(() => {
  $('#signUp').on('submit', auth.onSignUp)
  $('#signIn').on('submit', auth.onSignIn)
  $('#changePassword').on('submit', auth.onChangePassword)
  $('#signOut').on('submit', auth.onSignOut)


})
