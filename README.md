<h1 align='center'>Backend project level 1</h1>
<hr>

### Hexlet tests and linter status:

[![Actions Status](https://github.com/fishtriangle/backend-project-lvl1/workflows/hexlet-check/badge.svg)](https://github.com/fishtriangle/backend-project-lvl1/actions)

[![Actions Status](https://github.com/fishtriangle/backend-project-lvl1/workflows/make-lint/badge.svg)](https://github.com/fishtriangle/backend-project-lvl1/actions)

<hr>

<a href="https://codeclimate.com/github/fishtriangle/backend-project-lvl1/maintainability"><img src="https://api.codeclimate.com/v1/badges/b7e98f1c54b880da5a9f/maintainability" /></a>

<hr>

### Asciinema logs:

Brain-even:
[![asciicast](https://asciinema.org/a/qEbgXGhdBdI1NafZ2d5Uxt2NT.svg)](https://asciinema.org/a/qEbgXGhdBdI1NafZ2d5Uxt2NT)

Brain-calc:
[![asciicast](https://asciinema.org/a/ClHgYFDilzaW0nfEBCWlBF5pP.svg)](https://asciinema.org/a/ClHgYFDilzaW0nfEBCWlBF5pP)

Brain-gcd:
[![asciicast](https://asciinema.org/a/vmPf4uFbDk5dFzU7C0IEzbwtS.svg)](https://asciinema.org/a/vmPf4uFbDk5dFzU7C0IEzbwtS)

Brain-progression:
[![asciicast](https://asciinema.org/a/JlGmUvAVeycTHlfbEl8RBtoMp.svg)](https://asciinema.org/a/JlGmUvAVeycTHlfbEl8RBtoMp)

Brain-prime:
[![asciicast](https://asciinema.org/a/cTf2kjjmmiS0hn8lhPkUWNYON.svg)](https://asciinema.org/a/cTf2kjjmmiS0hn8lhPkUWNYON)

## Description
Small studying project created with node.js and makefile. It contains 5 small games:
<ul>
<li>calculate two numbers;</li>
<li>even or not;</li>
<li>find GCD;</li>
<li>prime or not;</li>
<li>find element of progression.</li>
</ul>

## Requirements
<ul>
<li>Node js</li>
<li>Makefile</li>
</ul>

## Project setup
Via Makefile in project folder:
```
make brain-calc
make brain-even
make brain-gcd
make brain-prime
make brain-progression
```

Install games: 
first local publish:
```
make publish
```
Installation with administrative rights:
```
sudo npm link
```
Then run one of the games:
```
brain-calc
brain-even
brain-gcd
brain-prime
brain-progression
```

After that follow the instructions and take a fan.

## Additional scripts
Linter script:
```
make lint
```
