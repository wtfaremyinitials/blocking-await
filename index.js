var deasync = require('deasync')

function wait(val) {
    var resolved = false
    var rejected = false
    var result = null

    function res(data) {
        resolved = true
        result = data
    }

    function rej(err) {
        rejected = true
        result = err
    }

    var p = Promise.resolve(val).then(res, rej)

    deasync.loopWhile(() => !(resolved || rejected))

    if (resolved) {
        return result
    }

    if (rejected) {
        throw result
    }
}

module.exports = wait
