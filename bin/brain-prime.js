#!/usr/bin/env node

import brainPrime from '../src/games/prime.js';
import greet from '../src/cli.js';

const name = greet();
brainPrime(name);
