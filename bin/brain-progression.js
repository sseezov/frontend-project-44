#!/usr/bin/env node

import brainProgression from '../src/games/progression.js';
import greet from '../src/cli.js';

const name = greet();
brainProgression(name);
