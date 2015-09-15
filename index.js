/**
 * @copyright Łukasz Marek Sielski
 * MIT
 */

'use strict';

var sha1 = require('sha1');

/**
 * Creates commit object
 * @param {Object} options
 * @param {String} options.tree
 * @param {String} options.parent
 * @param {String} options.author
 * @param {String} options.committer
 * @param {String} options.message
 * @constructor
 */
function GitSHA1(options) {
	this.tree = options.tree || null;
	this.parent = options.parent || null;
	this.author = options.author || null;
	this.committer = options.committer || null;
	this.message = options.message || null;
}

/**
 * Gets long SHA1
 * @returns {String}
 */
GitSHA1.prototype.getLong = function () {
	var message = 'tree ' + this.tree + '\n' +
			'parent ' + this.parent + '\n' +
			'author ' + this.author + '\n' +
			'committer ' + this.committer + '\n\n' +
			this.message + '\n',
		nullString = new Buffer([0x00]);

	message = 'commit ' + message.length + nullString.toString('binary') + message;

	return sha1(message);
};

/**
 * Casts to string
 * @param {undefined|String} type - if short will return short version
 * @returns {String}
 */
GitSHA1.prototype.toString = function (type) {
	var long = this.getLong();
	if (type === 'short') return long.substring(0, 7);
	return long;
};

/**
 * Factory
 * @param {Object} options
 * @param {String} options.tree
 * @param {String} options.parent
 * @param {String} options.author
 * @param {String} options.committer
 * @param {String} options.message
 * @returns {GitSHA1}
 */
GitSHA1.create = function (options) {
	return new GitSHA1(options);
};

module.exports = GitSHA1;