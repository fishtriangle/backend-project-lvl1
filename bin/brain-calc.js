#!/usr/bin/env node

import game from '../src/index.js';
import questions from '../src/textQuestions.js';
import brainCalcGame from '../src/games/brainCalcGame.js';

game(questions.calcGame, brainCalcGame, false);
