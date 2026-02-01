from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from collections import defaultdict, deque

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
async def parse_pipeline(request: Request):
    body = await request.json()

    nodes = body.get('nodes', [])
    edges = body.get('edges', [])

    num_nodes = len(nodes)
    num_edges = len(edges)

    # Build graph for DAG check
    graph = defaultdict(list)
    in_degree = defaultdict(int)

    for edge in edges:
        src = edge.get('source')
        tgt = edge.get('target')

        if src is None or tgt is None:
            continue

        graph[src].append(tgt)
        in_degree[tgt] += 1

        if src not in in_degree:
            in_degree[src] = in_degree[src]

    queue = deque([n['id'] for n in nodes if in_degree[n['id']] == 0])
    visited = 0

    while queue:
        current = queue.popleft()
        visited += 1

        for neighbor in graph[current]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    is_dag = visited == num_nodes

    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_dag
    }
