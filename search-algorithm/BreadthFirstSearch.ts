// Data structures used:
// Set -> A collection of unique values where duplicate values are not allowed
// Record<K, V> -> A utility type in typescript that allows you create object type with fixed keys and fixed value type

function breadthFirstSearch(
  graph: Record<string, string[]>,
  startNode: string
): void {
  const visited = new Set<string>(); // keep track of visited node
  const queue: string[] = []; // queue for BFS

  // start from firstNode
  visited.add(startNode);
  queue.push(startNode);

  //   loop while queue is not empty
  while (queue.length > 0) {
    const currentNode = queue.shift(); //dequeue
    console.log(currentNode);

    // visit all neigbours
    for (const neigbour of graph[currentNode!]!)
      if (!visited.has(neigbour)) {
        visited.add(neigbour);
        queue.push(neigbour); // enqueue
      }
  }
}
