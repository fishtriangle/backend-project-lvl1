#!/usr/bin/env node

import game from '../src/index.js';
import questions from '../src/textQuestions.js';
import brainProgressionGame from '../src/games/brainProgressionGame.js';

game(questions.brainProgression, brainProgressionGame, false);
