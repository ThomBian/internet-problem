const chai = require('chai');

const test = require('./test-utils');
const utils = require('../app/graph-utils');

const expect = chai.expect;
const dataDriven = test.dataDriven;

describe.only('Success Tests', function(){

dataDriven([
        {
            message: 'Dummy test 1',
            given: {
                id: 0,
                graph: [[]],
                ignored: {}
            },
            expected: 1
        },{
            message: 'Dummy test 2',
            given: {
                id: 0,
                graph: [
                    [1],
                    [0, 2],
                    [1]
                ],
                ignored: {}
            },
            expected: 3
        },{
            message: 'Dummy test 3',
            given: {
                id: 2,
                graph: [
                    [1],
                    [0, 2],
                    [1]
                ],
                ignored: {}
            },
            expected: 3
        },{
            message: 'Test with ignored 1',
            given: {
                id: 4,
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
                ignored: {5:1}
            },
            expected: 5
        },{
            message: 'Test with ignored 2',
            given: {
                id: 5,
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
                ignored: {4:1}
            },
            expected: 4
        },{
            message: 'Empty graph',
            given: {
                id: 0,
                graph: [],
                ignored: {}
            },
            expected: 0
        }
    ], ctx => {
        it(ctx.message, function(){
            expect(utils.getNodeInTree(ctx.given.id, ctx.given.graph, ctx.given.ignored))
                .to.be.equal(ctx.expected);
        });
    });
});
