var reactive = require('reactive'),
	domify = require('domify');

var songTemplate = require('./song.html');

function SongView (song) {
	this.model = song;
	this.el = domify(songTemplate);

	reactive(this.el, this.model, this);
}

module.exports = SongView;