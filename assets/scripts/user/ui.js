/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-29T10:15:29-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-02-05T16:03:30-05:00
 */
const store = require('../store')
const signintemp = require('../templates/auth/signintemp.handlebars')
const showwarntemp = require('../templates/tooltip/warning.handlebars')
const ShowProductsFront = require('../templates/product/ShowProducts.handlebars')
const ShowProducts2Front = require('../templates/product/showproducts2.handlebars')
const showsuccess = require('../templates/tooltip/success.handlebars')

const onSignInSuccess = response => {
  store.user = response.user
  $('#signincard').css('display', 'none')
  $('#signout-button').css('display', 'inline')
  // $('#Dashboard').css('display', 'block')

  $('#SignIn').css('display', 'none')
  $('#Dashboard').show()

  $('#carousel').html('')
  const SignInHtml = signintemp({ user: response.user })
  $('#content').html(SignInHtml)
  $('#product-row').html('')
}

const onSignUpSuccess = response => {
  $('#warning').fadeIn()
  $('#warning').html(showsuccess({message: 'Sign up Success'})).fadeOut(3000)
}

const onSignOutSuccess = () => {
  store.user = null
  $('#signincard').css('display', 'block')
  $('#Dashboard').hide()
  $('#signout-button').css('display', 'none')
  $('#SignIn').css('display', 'inline')
  const ShowProductFrontHtml = ShowProductsFront({ products: store.products })
  $('#carousel').html(ShowProductFrontHtml)

  const ProductrowFrontHtml = ShowProducts2Front({ products: store.products })
  $('#product-row').html(ProductrowFrontHtml)
}

const OnChangePasswordSuccess = () => {
  $('#warning').fadeIn()
  $('#warning').html(showsuccess({message: 'Change Password Success'})).fadeOut(3000)
}

const onSignInfailure = () => {
  $('#warning').fadeIn()
  $('#warning').html(showwarntemp({error: 'Sign In Fail'})).fadeOut(3000)
}
const onSignOutfailure = () => {
  $('#warning').fadeIn()
  $('#warning').html(showwarntemp({error: 'Sign Out Fail'})).fadeOut(3000)
}
const onSignUpfailure = () => {
  $('#warning').fadeIn()
  $('#warning').html(showwarntemp({error: 'Sign up Fail'})).fadeOut(3000)
}
const OnChangePasswordfailure = () => {
  $('#warning').fadeIn()
  $('#warning').html(showwarntemp({error: 'Change Password Fail'})).fadeOut(3000)
}

module.exports = {
  onSignInSuccess,
  onSignOutSuccess,
  onSignUpSuccess,
  OnChangePasswordSuccess,
  onSignInfailure,
  onSignOutfailure,
  onSignUpfailure,
  OnChangePasswordfailure
}
