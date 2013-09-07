
var firebase = require('model-firebase')('https://peersurround.firebaseio.com/rooms'),
  model = require('model'),
  Router = require('router');

var Room = model('room')
  .use(firebase)
  .attr('id')
  .attr('playlist');

var router = new Router();

router.get('/:room_id', function(id) {

  Room.get(id, function(err, room) {

    if(err) {
      //  do something to inform the user
    }

    // load up the playlist
  });
});


router.dispatch(window.location.pathname);