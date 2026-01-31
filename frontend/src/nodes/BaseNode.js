import { Handle, Position } from "reactflow";

export const BaseNode = ({
    id,
    title,
    inputs = [],
    outputs = [],
    children
}) => {
    return (
        <div style = {{width: 200, minHeight: 80, border: "1px solid black", padding: 10}}>
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
            <div>
                <strong>{title}</strong>
            </div>

            {/* Custom Children */}
            <div>
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