class Graph {
  constructor() {
    this.lenght = 0;
    this.adjacentList = {};
  }
  addNode(node) {
    if (this.adjacentList[node] == undefined) {
      this.adjacentList[node] = [];
      this.lenght++;
      return this.adjacentList;
    } else {
      console.log("Ya existe");
      return this.adjacentList;
    }
  }
  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
  showConnections() {
    let claves = Object.keys(this.adjacentList);
    claves.forEach((clave) => {
      console.log(clave + " --> " + this.adjacentList[clave]);
    });
  }
}

const myGraph = new Graph();
myGraph.addNode(0);
myGraph.addNode(1);
myGraph.addNode(2);
myGraph.addNode(3);
myGraph.addNode(4);
myGraph.addNode(5);
myGraph.addNode(6);
myGraph.addEdge(1, 2);
myGraph.addEdge(1, 0);
myGraph.addEdge(2, 0);
myGraph.addEdge(1, 3);
myGraph.addEdge(2, 4);
myGraph.addEdge(3, 4);
myGraph.addEdge(5, 4);
myGraph.addEdge(5, 6);
myGraph.showConnections();
console.log(myGraph.adjacentList);
