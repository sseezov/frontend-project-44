#!/usr/bin/env node

import generateRound from '../src/games/prime.js';
import gameRunner from '../src/gameRunner.js';

gameRunner('Answer "yes" if given number is prime. Otherwise answer "no".', generateRound);
