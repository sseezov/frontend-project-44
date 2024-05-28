#!/usr/bin/env node
import { Command } from 'commander';
import engine from '../src/engine.js';

const program = new Command();

program
  .name('brain-games')
  .description('Set of games, written in js')
  .version('1.0.0')
  .argument('<game>', 'name of the game')
  .option('-r, --rounds [count]', 'number of game rounds', '3')
  .action((game) => {
    const { rounds } = program.opts();
    engine(game, rounds);
  });

program.parse();
