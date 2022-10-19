#!/usr/bin/env node

import brainEven from '../src/games/even.js';
import greet from '../src/cli.js';

const name = greet();
brainEven(name);
