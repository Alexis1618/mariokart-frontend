
'use strict'
const store = require('./../store.js')

const signUpSuc = function (response) {
  $('form').trigger('reset')
  $('#message').text('Sign up successfull! Hello ' + response.user.email).show(400).removeClass().addClass('success')

  setTimeout(() => {
    $('#message').hide(250)
  }, 2500)
}
const signUpFail = function () {
  $('form').trigger('reset')
  $('#message').text('Sign up failed').show().removeClass().addClass('failure')
  setTimeout(() => {
    $('#message').hide(250)
  }, 2500)
}
const signInSuc = function (response) {
  $('form').trigger('reset')
  $('#message').text('Signed in ' + response.user.email).show().removeClass(400).addClass('success')
  $('#change-pw-section').show()
  $('#character-select').show()
  $('#Sign-out').show()
  store.user = response.user
  setTimeout(() => {
    $('#message').hide(250)
  }, 2500)
}

const signInFail = function (response) {
  $('form').trigger('reset')
  $('#message').text('Signed in failed').show(400).addClass('failed')
  setTimeout(() => {
    $('#message').hide(250)
  }, 2500)
}
const changePassSuc = function () {
  $('form').trigger('reset')
  $('#message').text('Password changed').show(400).removeClass().addClass('success')
  setTimeout(() => {
    $('#message').hide(250)
  }, 2500)
}
const changePassFail = function () {
  $('form').trigger('reset')
  $('#message').text('Password change has failed').show(400).removeClass().addClass('failed')
  setTimeout(() => {
    $('#message').hide(250)
  }, 2500)
}
const signOutSuc = function () {
  $('#message').text('GoodBye see you again.').show(400).removeClass().addClass('success')
  $('#character-select').addClass('hidden')
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('#change-pw-form').hide()
  $('.change-pw-bttn').hide()
  $('#sign-out').hide()
  store.user.token = null
  setTimeout(() => {
    $('#messageage').hide(250)
  }, 2500)
}
const signOutFail = function () {
  $('#authmessage').text('Signed Out Failed')
  $('#authmessage').removeClass().addClass('failed')
  setTimeout(() => {
    $('#messageage').hide(250)
  }, 2500)
}
module.exports = {
  signUpSuc,
  signUpFail,
  signInSuc,
  signInFail,
  changePassSuc,
  changePassFail,
  signOutSuc,
  signOutFail

}
