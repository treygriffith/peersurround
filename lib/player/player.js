var Player = function() {
  return this;
};

// TODO add audio.js to server s.t. it's cross browser compatabile

Player.setSong = function(song) {
  //this.currentAudioNode = new Audio(song.url);
  this.currentAudioNode = new Audio('http://s3.amazonaws.com/audiojs/02-juicy-r.mp3');
};

Player.play = function() {
  this.currentAudioNode.play();
};

module.exports = Player;
