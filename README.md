# internet-problem

Problem : given a network of computers (as a non circled non oriented graph), you can give only one computer access to an internet connection. That one can share this connection to all the computers connected in the graph. The solver has decide which computer is the best choice : minimizing the connection losses if any wire fall down. It should return the number of losses in the worst case and the chosen computer id. 

# solution
## graph representation
Using the concept of adjacence that allow to convert a graph into a matrix, I choose to build a graph as 2 dimensional array (examples of graph descriptions in the graph description folder). Node are designed using number (number i is the id for the node i) and the first node id must be 0. All ids have to be continuous. There can not have any gap between node ids.

To explain it a bit better, let's take a classic graph representation where dash are edges and number are nodes : 
 ```
      4    5    6
      |    |    |
0 -- 1 -- 2 -- 3 -- 7
      |    |    |
      8    9    10
``` 
This graph becomes : 
```
const graph = [
  [1],
  [0, 4, 8, 2],
  [1, 5, 9, 3],
  [6, 7, 10, 2],
  [1],
  [2],
  [3],
  [3],
  [1],
  [2],
  [3]
]
```
So the first array is indexed by node id and each array of each index are the connections to the other nodes. 
``` javascript
eval(graph[0]) // = [1] => the node with the id 0 is connected to the node with the id 1
eval(graph[1]) // = [0, 4, 8, 2] => the node with the id 1 is connected to the nodes with the ids 0, 4, 8, 2
```

## use it
* prerequisite : you need node up on your environnement
* git clone the project
* ```cd internet-problem```
* ```npm install```
* the runnable has to be executable, it should be but if you can not start it properly ```chmod +x index.js```
* I have written some unit tests that you can find in the test folder (mocha). ```npm test```
* ```./index.js -h``` for the help
* ```/index.js -f graph-samples/graph1``` to run the program with a preset samples (graph-samples/).
* you can define your own graph using the sample as a model or following the above description for the graph




