const chai = require('chai');

const test = require('./test-utils');
const solve = require('../module/solver');

const expect = chai.expect;
const dataDriven = test.dataDriven;

describe('Solver Tests', function(){
    describe('Success resolve', function(){
        dataDriven([
            {
                message: 'Dummy test 1',
                graph: [
                    []
                ],
                expected: {
                    node: 0,
                    losses: 0
                }
            },{
                message: 'Dummy test 2',
                graph: [
                    [1],
                    [0, 2],
                    [1]
                ],
                expected: {
                    node: 1,
                    losses: 1
                }
            },{
                message: 'Dummy test 3',
                graph: [
                    [1],
                    [0, 2],
                    [1, 3, 4],
                    [2],
                    [2]
                ],
                expected: {
                    node: 2,
                    losses: 2
                }
            },{
                message: 'Study case 1',
                graph: [
                    [2],
                    [2],
                    [0, 1, 3],
                    [2, 4],
                    [3, 5],
                    [4, 6, 8],
                    [5, 7],
                    [6],
                    [5]
                ],
                expected: {
                    node: 4,
                    losses: 4
                }
            },{
                message: 'Study case 2 : star graph',
                graph: [
                    [6],
                    [6],
                    [6],
                    [6],
                    [6],
                    [6],
                    [0, 1, 2, 3, 4, 5]
                ],
                expected: {
                    node: 6,
                    losses: 1
                }
            }
        ], ctx => {
            it(ctx.message, function(){
                const result = solve(ctx.graph);
                // then
                expect(result.node).to.be.equal(ctx.expected.node);
                expect(result.losses).to.be.equal(ctx.expected.losses);
            });
        });
    });
});