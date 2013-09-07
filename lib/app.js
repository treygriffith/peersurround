

var firebase = require('model-firebase')('https://peersurround.firebaseio.com/')
  model = require('model');

var Person = model('person')
  .use(firebase)
  .attr('name');