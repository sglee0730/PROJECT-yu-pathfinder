//예전에 pyrhon으로 구혔했던 코드를 javascript로 바꾼 것
// const myGraph = {
//     '0': { '1': 200.81, '3': 301.83 },
//     '1': { '0': 200.81, '2': 69.64, '4': 180.68 },
//     '2': { '1': 69.64, '3': 322.45, '5': 336.49, '6': 248.64 },
//     '3': { '0': 301.83, '2': 322.45, '5': 270.44 },
//     '4': { '1': 180.68, '6': 143.19 },
//     '5': { '2': 336.49, '3': 270.44, '6': 272.66 },
//     '6': { '2': 248.64, '4': 143.19, '5': 272.66 }
// }
  
// class PriorityQueue {
//   constructor() {
//     this.queue = [];
//   }

//   enqueue(item) {
//     this.queue.push(item);
//   }

//   dequeue() {
//     let entry = 0;
//     this.queue.forEach((_, index) => {
//       if (this.queue[entry][0] > this.queue[index][0]) {
//         entry = index;
//       }
//     });
//     return this.queue.splice(entry, 1);
//   }
// }

// const dijkstra = (graph, start, end) => {

//   let distances = [];
//   for (let i = 0; i < Object.keys(myGraph).length; i++) distances[i] = Number.MAX_VALUE;
//   distances[start] = 0;
//   const queue = new PriorityQueue();
//   queue.enqueue([distances[start], start])

//   while (queue.queue.length > 0) {
//     const [poped] = queue.dequeue();
//     const [current_distance, current_node] = poped;
    
//     if (distances[current_node] < current_distance) {
//       continue;
//     }

//     for (const [adjacent, weight] of Object.entries(graph[current_node])) {
//       const distance = current_distance + weight;

//       if (distance < distances[adjacent]) {
//         distances[adjacent] = distance;
//         queue.enqueue([distance, adjacent]);
//       }
//     }
//   }

//   return distances;
// }

