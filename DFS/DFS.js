import readline from 'readline'
import { stdin as input, stdout as output } from 'process'

const rl = readline.createInterface({ input, output }) // to instanciate the InterfaceConstructor

class Graph {
	constructor(v) {
		this.v = v;
		this.adj = Array.from(Array(v), () => new Array(v).fill(0));
	}

	addEdge(start, end) {
		this.adj[start][end] += 1;
		this.adj[end][start] += 1;
	};

	DFS(start, visited, res) {
		res.push(start);
		visited[start] = true;

		for (let i = 0; i < this.v; i++) {
			if (this.adj[start][i] > 0 && !visited[i]) {
				this.DFS(i, visited, res);
			}
		}

		// For disconnected graph

		if (start === res[0]) {
			for (let i = 0; i < this.v; i++) {
				if (!visited[i]) this.DFS(i, visited, res);
			}
		}
	};
}

async function readLine(message) {
	return await new Promise(resolve => {
		rl.question(`${message}`, resolve);
	})
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

async function printAdjacencyMatrix(v, G) {
	const header = `   ${Array.from({ length: v }, (_, i) => `${i}`.padStart(2, ' ')).join(' ')}`;
	console.log(header);
 
	for (let i = 0; i < v; i++) {
		let row = `${i}`.padStart(2, ' ') + ' ';
		for (let j = 0; j < v; j++) {
			row += G.adj[i][j].toString().padStart(2, ' ') + ' ';
		}
		console.log(row);
	}
}

async function createGraph() {
	const values = await readLine('Enter the dimensions: ');
	const [v, e] = values.split(' ').map(Number);
	const G = new Graph(v);
	const visited = new Array(v).fill(false);

	const way = await readLine('Randomly or manually? (r/m): ');
	if (way === 'r') {
		for (let i=0; i < e; i++)
			G.addEdge(getRandomInt(0, v-1), getRandomInt(0, v-1));
	} else {
		console.log('\nEnter the edges:\n')
		for (let i=0; i < e; i++) {
			const edge = await readLine('');
			const [start, end] = edge.split(' ').map(Number);
			G.addEdge(start, end);
		}
		console.log();
	}

	return  { G, visited }
}

// driver code

const main = async () => {
	const { G, visited } = await createGraph();
	const rootNode = await readLine('Enter the root node: ');

	console.log('\nAdjacency matrix:\n');
	printAdjacencyMatrix(G.v, G);

	rl.close();
	
	const result = [];
	G.DFS(rootNode, visited, result); 
	console.log(`\nResult:\n\n${result.join(' ')}`);
}

main();