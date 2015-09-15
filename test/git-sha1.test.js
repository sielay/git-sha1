'use strict';

var GitSHA1 = require('../index'),
	should  = require('should'),
	fs      = require('fs'),
	sha1    = require('sha1');

describe('Git SHA-1 generation', function () {

	it('Assumption is right', function () {
		var message = fs.readFileSync(__dirname + '/test.txt', 'utf8'),
			mockupsCommit = '1bd786d6265df068cbac3f9100d9e1a69815cb09';

		should(mockupsCommit).equal(sha1(message));
	});

	it('Generates valid SHA1', function () {
		var commit = GitSHA1.create({
			tree:      '9bedf67800b2923982bdf60c89c57ce6fd2d9a1c',
			parent:    'de1eaf515ebea46dedea7b3ae0e5ebe3e1818971',
			author:    'jnthn <jnthn@jnthn.net> 1334500503 +0200',
			committer: 'jnthn <jnthn@jnthn.net> 1334500545 +0200',
			message:   'When I added FIRST/NEXT/LAST, it was idiomatic but not quite so fast. This makes it faster. Another little bit of masak++\'s program.'
		});
		should(commit.toString()).equal('d6cd1e2bd19e03a81132a23b2025920577f84e37');
		should(commit.toString('short')).equal('d6cd1e2');
	});

});