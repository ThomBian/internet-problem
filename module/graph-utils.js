/**
 * Compute the number of nodes in a tree excluding the given edges to ignore
 * @param {Number} nodeId node identifier to start with 
 * @param {Array} graph the graph to work on
 * @param {Map} ignoredNode node identifiers to ignore in the computation, ie edge to avoid 
 */
function getNodeInTree (nodeId, graph, ignoredNode) { 
    ignoredNode[nodeId] = 1;
    const getConnectedNodes = graph[nodeId];
    if(!getConnectedNodes) {
        return 0;
    } else {
        return getConnectedNodes.reduce((currentNbNodes, currentIdNode) => {
            if(!ignoredNode[currentIdNode]) {
                currentNbNodes += getNodeInTree(currentIdNode, graph, ignoredNode);
            }
            return currentNbNodes;
        }, 1);
    }
}

module.exports = {
    getNodeInTree
}