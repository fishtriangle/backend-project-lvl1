#!/usr/bin/env node

import game from '../src/index.js';
import questions from '../src/textQuestions.js';
import brainPrimeGame from '../src/games/brainPrimeGame.js';

game(questions.brainPrime, brainPrimeGame, true);
