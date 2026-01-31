// submit.js

export const SubmitButton = () => {

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px'}}>
            <button 
            type="submit"
            style={{
                padding: '10px 18px',
                borderRadius: '8px',
                border: 'none',
                background: '#16a34a',
                color: 'white',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}>
                Submit
            </button>
        </div>
    );
}
