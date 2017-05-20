var pull = require('pull-stream')
var OffsetLog = require('./')

module.exports = function (broken, fixed, codec, cb) {
  pull(
    broken.stream(),
    pull.map(function (data) {
      try {
        return codec.decode(data.value.toString())
      } catch(err) {
        return null
      }
    }),
    pull.take(Boolean),
    pull.asyncMap(function (data, cb) {
      fixed.append(codec.encode(data), cb)
    }),
    pull.drain(function (data) {
      console.log(data)
    }, function (err) {
      if(cb) return cb(err)
      if(err) throw err
    })
  )
}


