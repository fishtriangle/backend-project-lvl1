#!/usr/bin/env node

import game from '../src/index.js';
import questions from '../src/textQuestions.js';
import brainGcdGame from '../src/games/brain-gcd/brainGcdGame.js';

game(questions.brainGcd, brainGcdGame);
