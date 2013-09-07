var list = require('list'),
	Collection = require('collection'),
	SongView = require('./song'),
	dom = require('dom'),
	domReady = require('domready');

var Songs = list(SongView);

var Playlist = function(songs) {

	this.songs = new Collection(songs);
	var view = this.view = new Songs();

	this.songs.each(this.view.add.bind(this.view));

	this.songs.on('add', function(song) {
		view.add(song);
	});

	domReady(function() {
		dom(window.document.body).append(view.el);
	});

	return this;
};

Playlist.add = Playlist.push = function(song) {

	this.songs.push(song);
};

module.exports = Playlist;