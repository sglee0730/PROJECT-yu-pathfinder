import { graphInterface } from './map.positions';

export interface nodeInterface {
    nodeID: string,
    fScore: number,
    gScore: number,
    hScore: number,
    parent: string | null,
}

//추정 함수 heuristic()
//단순하게 좌표 상의 차이를 계산하여 절대값으로 반환
const heuristic = (pos0: { lat: number, lng: number }, pos1: { lat: number, lng: number }): number => {
    const d1 = Math.abs(pos0.lat - pos1.lat);
    const d2 = Math.abs(pos0.lng - pos1.lng);

    return (d1 + d2) * 10000;
}

// A* 알고리즘은 추정 함수의 따라 결과가 많이 달라짐
// 추정 함수의 의존도가 크고 항상 최적의 해를 보장하지는 않으나, 합리적인 비용으로 해를 찾을 수 있으며 추정 함수 개선으로 결과 개선 가능
export const aStar = (graph: graphInterface, start: string, end: string) => {
    // 열린 목록 openSet
    // start로 입력받은 노드의 인접노드를 초기값으로 가진다
    let openSet: nodeInterface[] = Object.entries(graph[start].vertex).map(item => {
        const [key, value] = item;
        const h = heuristic(graph[key].position, graph[end].position);

        return { nodeID: key, fScore: value + h, gScore: value, hScore: h, parent: start };
    })
    // 닫힌 목록 closedSet
    // 초기값으로 start 노드를 원소로 가짐
    let closedSet: nodeInterface[] = [{ nodeID: start, fScore: 0, gScore: 0, hScore: 0, parent: null }];

    // 닫힌 목록의 마지막 원소가 목적지와 같다면
    // 목적지가 닫힌 목록의 존재한다는 것은 최단 경로의 근사값을 찾았다는 것
    while (closedSet[closedSet.length - 1].nodeID !== end) {
        // 열린 목록에서 F Score가 제일 작은 노드를 찾아서 꺼냄
        const minValue = openSet.sort((a, b) => a.fScore - b.fScore).shift();
        // 해당 노드를 닫힌 목록으로 push
        closedSet.push(minValue);

        //닫힌 목록에 존재하지 않는 노드만 열린 목록에 추가
        //gScore값은 이전 gScore + 현재 gScore 
        const notInClosed: string[] = Object.keys(graph[minValue.nodeID].vertex)
            .filter(item => closedSet.findIndex(i => i.nodeID === item) === -1);
        // 닫힌 목록에 존재하지 않는 노드들을 열린 목록에 push
        notInClosed.forEach(item => {
            const { nodeID, gScore } = minValue;
            const h = heuristic(graph[item].position, graph[end].position);
            const newScore = gScore + graph[nodeID].vertex[item];
            const idx = openSet.findIndex(i => i.nodeID === item)

            if (idx === -1) {
                openSet.push({ nodeID: item, fScore: h + newScore, gScore: newScore, hScore: h, parent: nodeID });
            } else if (idx !== -1 && openSet[idx].fScore > (h + newScore)) {
                openSet[idx] = { nodeID: item, fScore: h + newScore, gScore: newScore, hScore: h, parent: nodeID };
            }
        });  
    }

    const path = [closedSet[closedSet.length - 1]];

    let idx = closedSet[closedSet.length - 1].parent;
    for (let i = closedSet.length - 1; i >= 0; i--) {
        if (closedSet[i].nodeID === idx) {
            path.push(closedSet[i]);
            idx = closedSet[i].parent
        }
    }

    return path;
};



