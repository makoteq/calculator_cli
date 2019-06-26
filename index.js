#!/usr/bin/env node
const program = require('commander');
const aboutCommand = require('./bin/commands/about');
const chalk = require('chalk');
const log = console.log;
program
  .option('-m, --math', 'Math');

program.parse(process.argv);
if (program.math === undefined) log(chalk.red('If you want to sum two numbers please write `cal -m`'));
else if (program.math === true) aboutCommand();
else console.log(`add cheese type ${program.cheese}`);