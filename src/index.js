#!/usr/bin/env node

const { program } = require('commander');
const create = require('./create')

program.version('1.0.0')
program.command('create <name>').description('create new vue3 project').action(create)

program.parseAsync(process.argv);
