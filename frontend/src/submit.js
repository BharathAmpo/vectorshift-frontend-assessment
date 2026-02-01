// submit.js

export const SubmitButton = ({ nodes, edges }) => {

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nodes,
                edges,
            }),
            });

            const result = await response.json();

            alert(
            `Nodes: ${result.num_nodes}\n` +
            `Edges: ${result.num_edges}\n` +
            `Is DAG: ${result.is_dag ? 'Yes' : 'No'}`
            );
        } catch (error) {
            console.error(error);
            alert('Failed to submit pipeline');
        }
        };

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px'}}>
            <button 
                type="button"
                onClick={handleSubmit}
                style={{
                    padding: '10px 18px',
                    borderRadius: '8px',
                    border: 'none',
                    background: '#16a34a',
                    color: 'white',
                    fontWeight: 600,
                    cursor: 'pointer',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                }}
            >
                Submit
            </button>
        </div>
    );
}
