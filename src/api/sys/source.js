import request from '@/utils/request'

// 查询用户列表
export function listSource (query) {
  return request({
    url: '/admin/sys/source/api/query',
    method: 'post',
    data: query
  })
}

// // 查询用户详细
// export function getUser (userId) {
//   return request({
//     url: '/admin/sys/user/api/detail?id=' + parseStrEmpty(userId),
//     method: 'get'
//   })
// }
// // 新增用户
// export function addUser (data) {
//   return request({
//     url: '/admin/sys/user/api/insert',
//     method: 'post',
//     data: data
//   })
// }
//
// // 修改用户
// export function updateUser (data) {
//   return request({
//     url: '/admin/sys/user/api/update',
//     method: 'put',
//     data: data
//   })
// }
//
// // 删除用户
// export function delUser (userId) {
//   return request({
//     url: '/admin/sys/user/api/delete?id=' + userId,
//     method: 'delete'
//   })
// }
//
// // 用户密码重置
// export function resetUserPwd (data) {
//   return request({
//     url: '/admin/sys/user/api/password',
//     method: 'put',
//     data: data
//   })
// }
//
// // 查询用户个人信息
// export function getUserInfo () {
//   return request({
//     url: '/admin/sys/user/api/userInfo',
//     method: 'get'
//   })
// }
//
// // 修改用户个人信息
// export function updateInfo (data) {
//   return request({
//     url: '/admin/sys/user/api/updateInfo',
//     method: 'put',
//     data: data
//   })
// }
//
// // 用户头像上传
// export function uploadAvatar (data) {
//   return request({
//     url: '/oss/api/upload',
//     method: 'post',
//     data: data
//   })
// }
