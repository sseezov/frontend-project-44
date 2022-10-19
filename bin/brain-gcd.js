#!/usr/bin/env node

import brainGCD from '../src/games/gcd.js';
import greet from '../src/cli.js';

const name = greet();
brainGCD(name);
