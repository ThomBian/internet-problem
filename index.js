#!/usr/bin/env node

const program = require('commander');
const reader = require('./module/graph-description-reader');
const solver = require('./module/solver');

program
    .version('1.0.0')
    .option('-f, --file <graph-description>');

program.parse(process.argv);
const path = program.file;
return reader.constructGraphFromPath(path)
    .then(graph => {
        console.log('GIVEN GRAPH ----\n', graph);
        const result = solver(graph);
        console.log('\n\nRESULT -----', 
        '\n\nNode id holding the connection :', result.node,
        '\n\nConnection lost in the worst case :', result.losses);
    })
    .catch(console.error);


