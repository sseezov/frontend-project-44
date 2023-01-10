#!/usr/bin/env node

import generateRound from '../src/games/gcd.js';
import gameRunner from '../src/gameRunner.js';

gameRunner('Find the greatest common divisor of given numbers.', generateRound);
