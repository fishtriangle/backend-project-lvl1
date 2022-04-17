#!/usr/bin/env node

import game from '../src/index.js';
import questions from '../src/textQuestions.js';
import brainEvenGame from '../src/games/brain-even/brainEvenGame.js';

game(questions.brainEven, brainEvenGame);
