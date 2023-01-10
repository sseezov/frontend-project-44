#!/usr/bin/env node

import generateRound from '../src/games/calc.js';
import gameRunner from '../src/gameRunner.js';

gameRunner('What is the result of the expression?', generateRound);
