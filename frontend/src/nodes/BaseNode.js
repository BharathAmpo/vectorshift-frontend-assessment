import { Handle, Position } from "reactflow";

export const BaseNode = ({
    id,
    title,
    inputs = [],
    outputs = [],
    children
}) => {
    return (
        <div
            style={{
                minWidth: 220,
                minHeight: 120,
                gap: 8,
                padding: 12,
                borderRadius: 10,
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
                fontFamily: 'sans-serif'
            }}
        >
            {/* Left Handles */}
            {inputs.map((input, index) => (
                <Handle
                    key = {input.id}
                    type= "target"
                    position = {Position.Left}
                    id = {`${id}-${input.id}`}
                    style = {{ top: `${(index + 1) * (100 / (inputs.length + 1))}%` }}
                />
            ))}

            {/* Title */}
            <div style={{ 
                fontWeight: '600',
                fontSize: 14,
                marginBottom: 8,
                borderBottom: '1px solid #eee',
                paddingBottom: 4
                }}
            >
                {title}
            </div>

            {/* Custom Children */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {children}
            </div>

            {/* Right Handles (outputs)*/}
            {outputs.map((outputs) => (
                <Handle
                    key = {outputs.id}
                    type = "source"
                    position = {Position.Right}
                    id = {`${id}-${outputs.id}`}
                />
            ))}
        </div>
    )
}