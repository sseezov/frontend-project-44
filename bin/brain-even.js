#!/usr/bin/env node

import generateRound from '../src/games/even.js';
import gameRunner from '../src/gameRunner.js';

gameRunner('Answer "yes" if the number is even, otherwise answer "no".', generateRound);
