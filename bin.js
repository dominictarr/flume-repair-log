#! /usr/bin/env node

var OffsetLog3 = require('flumelog-offset')
var OffsetLog2 = require('flumelog-offset/legacy')
var codec = require('flumecodec')
var repair = require('./')

module.exports = function (old_file, new_file) {
  if(!old_file)
    throw new Error('old_file must be provided')
  if(!new_file)
    new_file = old_file + '~'
  var old_log = OffsetLog2(old_file, 4096)
  var new_log = OffsetLog3(new_file, 4096)
  
  repair(old_log, new_log, codec.json, function (err, cb) {
    console.log('rewrote '+old_file+' as '+new_file+' in flumelog-offset@3 format')
  })
}


if(!module.parent)
  module.exports(process.argv[2], process.argv[3])


