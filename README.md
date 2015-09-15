# GIT-SHA1-COMMIT

Small snippet allowing to create valid git commit SHA1.

Inspired by `masak` [gist](https://gist.github.com/masak/2415865)

## Install

```
npm install --save git-sha1-commit
```

## Test

```
mocha
```

## Usage

```
var commit = GitSHA1.create({
			tree:      '9bedf67800b2923982bdf60c89c57ce6fd2d9a1c',
			parent:    'de1eaf515ebea46dedea7b3ae0e5ebe3e1818971',
			author:    'jnthn <jnthn@jnthn.net> 1334500503 +0200',
			committer: 'jnthn <jnthn@jnthn.net> 1334500545 +0200',
			message:   'When I added FIRST/NEXT/LAST, it was idiomatic but not quite so fast. This makes it faster. Another little bit of masak++\'s program.'
		});
		
commit.toString() -> 'd6cd1e2bd19e03a81132a23b2025920577f84e37'
commit.toString('short') -> 'd6cd1e2';
```

## License

MIT
