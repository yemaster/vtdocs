const loadFile = function(filePath) {
    // 创建一个新的xhr对象
    let xhr = null
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest()
    } else {
      // eslint-disable-next-line
      xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }
    const okStatus = document.location.protocol === 'file' ? 0 : 200
    try {
      xhr.open('GET', filePath, false)
      xhr.overrideMimeType('text/html;charset=utf-8')
      xhr.send(null)
    }
    catch(err) {
      console.log("404 Not Found")
    }
    return xhr.status === okStatus ? xhr.responseText : false
  }
export default loadFile;