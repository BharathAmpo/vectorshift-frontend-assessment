// textNode.js

import { useState, useMemo, useRef, useLayoutEffect } from 'react';
import { BaseNode } from './baseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '');

  const variables = useMemo(() => {
    const regex = /\{\{([a-zA-Z_$][a-zA-Z0-9_$]*)\}\}/g;
    const matches = new Set();
    let match;

    while ((match = regex.exec(currText)) !== null) {
      matches.add(match[1]);
    }

    return Array.from(matches);
  }, [currText]);

  const inputHandles = variables.map((name) => ({
    id: name
  }));

  const textareaRef = useRef(null);
  useLayoutEffect(() => {
    if (!textareaRef.current) return;

    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  }, [currText]);



  return (
    <BaseNode
      id={id}
      title="Text"
      inputs={inputHandles}
      outputs={[{ id: 'output' }]}
    >
      <label>
        Text:
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          style={{
          resize: 'none',
          width: '100%',
          overflow: 'hidden'
        }}
        />
      </label>
    </BaseNode>
  );
};
