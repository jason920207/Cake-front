/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-29T16:27:25-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-30T12:10:30-05:00
 */

const config = require('../config')
const store = require('../store')

const GetProducts = () => {
  return $.ajax({
    url: config.apiUrl + '/products',
    method: 'GET'
  })
}

const GetProduct = id => {
  return $.ajax({
    url: config.apiUrl + '/products/' + id,
    method: 'GET'
  })
}

const CreateProduct = data => {
  return $.ajax({
    url: config.apiUrl + '/products',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const UpdateProduct = (data, id) => {
  return $.ajax({
    url: config.apiUrl + '/products/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const DeleteProduct = id => {
  return $.ajax({
    url: config.apiUrl + '/products/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  GetProducts,
  GetProduct,
  CreateProduct,
  UpdateProduct,
  DeleteProduct
}
