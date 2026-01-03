// create an empty stack
// push start node into empty stack
// create an empty set for visited nodes
// while stack is not empty, currentNode popped of from stack, if node is not visited
// mark node as visited, process node(print)
// for each neighbour in node adjacency list , if neighbour is not visited, push neighbour unto stack

function dfsIterative(
  graph: Record<string, string[]>,
  startNode: string,
  targetNode: string
) {
  const visited = new Set<string>();
  const stack: string[] = [];

  visited.add(startNode);
  stack.push(startNode);

  while (stack.length > 0) {
    // unlike bfs logic (dequeue first item in array), this removes the last item in the stack, following the LIFO rule
    const currentNode = stack.pop()!;

    if (currentNode === targetNode) {
      return currentNode;
    }

    // visit all neighbours -> one level depth wise
    for (const neigbour of graph[currentNode!]!) {
      if (!visited.has(neigbour)) {
        visited.add(neigbour);
        stack.push(neigbour);
      }
    }
  }

  return "Not found";
}

const graph = {
  A: ["B", "C"],
  B: ["D"],
  C: ["E"],
  D: [],
  E: [],
};

const startNode = "A";
const targetNode = "E";

console.log(dfsIterative(graph, startNode, targetNode));
