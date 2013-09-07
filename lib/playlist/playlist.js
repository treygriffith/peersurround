var list = require('list'),
	SongView = require('./song');

var Song = list(SongView);

var Playlist = function(list) {

	this.songs = Collection(list || []);
	this.view = new Song();

	this.songs.each(view.add.bind(view));

	return this;
};

Playlist.push = function(song) {

	this.view.add(song);

	this.songs.push(song);
};

module.exports = Playlist;