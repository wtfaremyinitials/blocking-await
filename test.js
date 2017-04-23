var test = require('ava')
var wait = require('.')
var { delay } = require('awaiting')

test('promise resolution', t => {
    var p = delay(10).then(() => 'Success')
    p = wait(p)
    t.is(p, 'Success')
})

test('promise rejection', async t => {
    var p = delay(10).then(function() { throw new Error('Failure') })
    t.throws(() => {
        wait(p)
    })
})

test('await non-promise values', async t => {
    var p = 'Successful'
    p = wait(p)
    t.is(p, 'Successful')
})

test('promise resolving another promise', async t => {
    var p = delay(10).then(() => {
        return delay(10).then(() => 'Yay')
    })
    p = wait(p)
    t.is(p, 'Yay')
})
