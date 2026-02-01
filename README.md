# VectorShift Frontend Technical Assessment

This repository contains my solution to the **VectorShift Frontend
Technical Assessment**.

The project demonstrates improvements in **component architecture**,
**UI consistency**, **dynamic behavior**, and **backend integration**
for a node-based pipeline builder.

------------------------------------------------------------------------

## Tech Stack

- **Frontend:** React + ReactFlow
- **Backend:** Python + FastAPI

------------------------------------------------------------------------

## How to Run the Project

### Frontend

``` bash
cd frontend
npm install
npm start
```

Open: http://localhost:3000

------------------------------------------------------------------------

### Backend

``` bash
cd backend
python -m venv venv
.\venv\Scripts\activate
pip install fastapi uvicorn python-multipart
uvicorn main:app --reload
```

Open: http://127.0.0.1:8000

------------------------------------------------------------------------

## Part 1 --- Node Abstraction

### Problem

The original node implementations (Input, Output, LLM, Text) contained
large amounts of duplicated layout, handle logic, and styling. Creating
a new node required copying entire files and modifying small pieces,
which is not scalable.

Additionally, five new nodes were created to demonstrate that the abstraction supports nodes with different handle combinations and UI structures.

### Solution

Created a reusable `baseNode` component that abstracts:

- Node container layout
- Title rendering
- Input/Output handle positioning
- Shared styles

All existing nodes were refactored to use this abstraction.

### Result

New nodes can now be created in \~15 lines instead of \~150 lines,
making the system scalable and easy to maintain.

------------------------------------------------------------------------

## Part 2 --- Styling

### Problem

The original UI had minimal styling and inconsistent layout across nodes. Each node defined its own container styles, making global UI improvements difficult and repetitive.

### Approach

Because of the abstraction created in Part-1, styling could be applied centrally inside the `baseNode` component instead of modifying each node individually.

The following improvements were made:

- Rounded card layout with soft shadows
- Consistent spacing and typography across all nodes
- Unified input and select field styling via global CSS
- Styled draggable toolbar buttons for a modern look
- Improved React Flow background grid appearance
- Styled Submit button for UI consistency

### Result

All existing nodes and the five newly created nodes automatically inherited the same clean design without any node-specific styling. This demonstrates the effectiveness of the abstraction created in Part-1.

------------------------------------------------------------------------

## Part 3 --- Text Node Logic

### Problem

The original Text node allowed free-form input but lacked dynamic behavior.
As text grew, visibility was limited, and there was no way to reference external values inside the text.

### Solution

Enhanced the Text node with two key capabilities:

- **Auto-resizing input:**
The Text node now dynamically adjusts its height as the user types, improving readability for longer content.

- **Variable detection with dynamic handles:**
Users can define variables using {{variableName}} syntax.
Each valid variable automatically generates a corresponding input handle on the left side of the node.

**Key implementation details:**
- Variables are derived using a strict JavaScript identifier regex
- Handles are generated deterministically and updated in real time
- Duplicate variables are ignored, and removed variables remove their handles

### Result

The Text node now behaves like a true templating component:
- Content is easier to work with
- External values can be injected cleanly
- Node connections remain stable and predictable

------------------------------------------------------------------------

## Part 4 --- Backend Integration

### Problem

The pipeline builder operated entirely on the frontend, with no way to validate or analyze the constructed graph.

### Solution

Implemented full frontend-backend integration using FastAPI:

- **Frontend**

- Added a Submit button that sends the current pipeline’s nodes and edges to the backend
- Displays backend analysis results in a clear, user-friendly alert

- **Backend**

- Added a `POST /pipelines/parse` endpoint
- **Computes:**
  - total number of nodes
  - total number of edges
  - whether the pipeline forms a Directed Acyclic Graph (DAG)
- Uses Kahn’s algorithm for reliable cycle detection
- Configured CORS to allow communication with the React frontend

### Result

Users can now:
- Build pipelines visually
- Submit them for analysis
- Instantly see structural validation results

------------------------------------------------------------------------

## Key Design Decisions

- Avoided code duplication via component abstraction
- Designed nodes as "layout + content" instead of independent components
- Maintained separation of concerns between structure and logic

------------------------------------------------------------------------

## What This Demonstrates

- React component architecture
- Reusability and scalability thinking
- UI consistency
- Dynamic rendering with handles
- Full-stack integration
- Graph algorithm implementation (DAG check)
