/**
 * NOT TESTED 
 * the reader only check the format and 
 * not the integrety of the files 
 * you should ensure that your graph does not 
 * contain cycle, that your data are properly 
 * written and so on. 
 */

const fs = require('fs');

const BAD_FORMAT_ERROR = 'Graph description error : bad format';

function readGraphFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if(err) {
                reject(err);
            }
            resolve(data);
        });
    });
}

function constructGraphFromPath(path) {
    return readGraphFile(path)
        .then(data => {
            const graph = JSON.parse(data);
            if(!Array.isArray(graph)){
                throw new Error(BAD_FORMAT_ERROR);
            }
            graph.forEach(e => {
                if(!Array.isArray(e)) {
                    throw new Error(BAD_FORMAT_ERROR);
                }
            });
            return graph;
        }).catch(e => {
            console.error(e);
    });
}

module.exports = {
    constructGraphFromPath
};