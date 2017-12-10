const utils = require('./graph-utils');

module.exports = function (graph) {
    const config = initAlgorithmContext(graph);
    let idx = 0,
        minMaxLosses = 0,
        branchesToTest = config.branchesToTest,
        tested = config.tested,
        nodeToTest = config.nodeToTest,
        totalNodes = config.totalNodes,
        elected = config.firstElected;
    while(idx < branchesToTest.length && (!tested[elected][nodeToTest] || !tested[nodeToTest][elected])){
        // branch is tested
        tested[elected][nodeToTest] = 1;
        //cutting graph in 2 trees
        const ignored = {}; 
        ignored[elected] = 1;
        const nodesInTreeToTest = utils.getNodeInTree(nodeToTest, graph, ignored);

        const nodesInElected = totalNodes - nodesInTreeToTest;
        minMaxLosses = Math.max(nodesInTreeToTest, minMaxLosses);

        // condition to change the elected one
        if (nodesInElected < nodesInTreeToTest) {
            elected = nodeToTest;
            branchesToTest = graph[elected];
            tested[elected] = {};
            // to ensure that we will take the first one rigth after
            idx = -1;
            minMaxLosses = nodesInElected;
        }
        idx++;
        nodeToTest = branchesToTest[idx];
    }
    return {node: elected, losses: minMaxLosses};
}

function initAlgorithmContext (graph) {
        // random pick the first node to elect by chosing the middle one
        let firstElected = Math.floor(graph.length / 2);
        // initialize the core values
        let totalNodes = utils.getNodeInTree(firstElected, graph, {});
        let branchesToTest = graph[firstElected];
        let nodeToTest = branchesToTest[0];
        // branches tested in the graph
        const tested = {};
        tested[firstElected] = {};
        tested[nodeToTest] = {};
        return {firstElected, totalNodes, tested, branchesToTest, nodeToTest};
}