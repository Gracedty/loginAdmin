import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/auth/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/auth/info',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function loginList(query, data) {
  return request({
    url: '/wechat/getUsersAdmin',
    method: 'post',
    params: query,
    data
  })
}

export function createrUser(data) {
  return request({
    url: '/wechat/createUsers',
    method: 'post',
    data
  })
}

export function deleteUser(data) {
  return request({
    url: '/wechat/users/' + data,
    method: 'delete'
  })
}
