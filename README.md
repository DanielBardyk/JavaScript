# Scripts
In this directories you can find some interesting scripts that I wrote on JavaScript
## aim-game directory
The point of the game is to catch as many circles as you can
## relax-board directory
When moving the mouse over the board, a multicolored trail remains for a while. It makes an effect of relaxation
## slider directory
Just cool slider with pictures and discriptions
## pictures-show directory
When clicking on the picture it becomes on focus
## DFS directory
### Depth-first search (DFS) algorithm purpose
Traverse the graph
### How does the program work?
1. User enters the dimensions of the graph (that is number of vertexes and edges)
2. Creation of initial graph according to the dimensions
3. Creation of an array to keep track of visited nodes
4. Program asks user how to create edges (randomly or manually)
5. User enter the root node
6. Program shows adjacency matrix
7. DFS method is called to traverse the graph
**Pseudocode:**
``` DFS(start, visited, res)
	1	Add start to res
	2	Set visited[start] as true
	3	For each i in range from 0 to v-1, do:
	4 	If adj[start][i] more than 0 and visited[i] is equal to false, then:
	5 	Call DFS(i, visited, res)
```
8. Program shows result of the graph traversing