/**
 * Created by Developer39 on 8/19/2017.
 */
var localtunnel = require('localtunnel');
localtunnel(5004, { subdomain: 'liaergliha' }, function(err, tunnel) {
    console.log('LT running')
});