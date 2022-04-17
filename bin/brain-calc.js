#!/usr/bin/env node

import game from '../src/index.js';
import questions from '../src/textQuestions.js';
import brainCalcGame from '../src/games/brain-calc/brainCalcGame.js';

game(questions.calcGame, brainCalcGame);
