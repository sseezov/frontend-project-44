#!/usr/bin/env node

import generateRound from '../src/games/progression.js';
import gameRunner from '../src/gameRunner.js';

gameRunner('What number is missing in the progression?', generateRound);
