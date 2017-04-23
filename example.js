var wait = require('.')
var got = require('got')

var res = wait(got('todomvc.com'))
console.log(res.body)
//=> '<!doctype html> ...'
