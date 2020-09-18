const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// //封装请求
// 本地地址
// const baseUrl = 'http://192.168.0.14/api/'

// 线上地址 https://49du.49du.cc:4956/api/
const baseUrl = 'https://49du.49du.cc:4956/api/'

const http = ({url = '', param = {}, ...other } = {}) => {
  wx.showLoading({
    title: '请求中，请等待...'
  })
  let timeStart = Date.now()
  return new Promise(( resolve, reject ) => {
    wx.request({
      url: getUrl(url),
      data: param,
      header: {
        'content-type': 'application/json',
        "token": wx.getStorageSync('token')
      },
      ...other,
      complete: (res) => {
        wx.hideLoading();
        console.log(`耗时${Date.now() - timeStart}`)
        if (res.statusCode == 200) {
          resolve(res.data)
        } else {
          reject(res)
        }
      }
    })
  })
}

const getUrl = (url) => {
  if(url.indexOf('://') == -1) {
    url = baseUrl + url;
  }
  return url
}

const _get = (url, param = {}) => {
  return http({
    url,
    param
  })
}

const _post = (url, param = {}) => {
  return http({
    url,
    param,
    method: 'POST',
  })
}

module.exports = {
  formatTime: formatTime,
  _get,
  _post
}
