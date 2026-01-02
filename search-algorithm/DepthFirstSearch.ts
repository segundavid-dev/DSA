// create an empty stack
// push start node into empty stack
// create an empty set for visited nodes
// while stack is not empty, currentNode popped of from stack, if node is not visited
// mark node as visited, process node(print)
// for each neighbour in node adjacency list , if neighbour is not visited, push neighbour unto stack

function dfsIterative(graph: Record<string, string[]>, startNode: string) {
  const visited = new Set<string>();
  const stack = [startNode];

  while (stack.length > 0) {
    const currentNode = stack.pop()!;

    if (!visited.has(currentNode)) {
      visited.add(currentNode);
    }

    for (const neigbour of graph[currentNode!]!) {
      stack.push(neigbour);
    }
  }
}

const graph = {
  A: ["B", "C"],
  B: ["D"],
  C: ["E"],
  D: [],
  E: [],
};
