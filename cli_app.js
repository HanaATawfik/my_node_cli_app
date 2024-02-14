#!/usr/bin/env node
const { program } = require('commander');

program
  .version('1.0.0')
  .description('Simple CLI App');

program
  .command('greet <name>')
  .description('Greet the user')
  .action(name => {
    console.log('Entering the greet command handler');
    
    // Check if the name is provided
    console.log('Checking if the name is provided');
    if (!name) {
      console.log('No name provided. Exiting.');
      return;
    }

    // Greet the user
    console.log('Greeting the user');
    console.log(`Hello, ${name}!`);
  });

program.parse(process.argv);
