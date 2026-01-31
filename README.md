# 🧠 VectorShift Frontend Technical Assessment

This repository contains my solution to the **VectorShift Frontend
Technical Assessment**.

The project demonstrates improvements in **component architecture**,
**UI consistency**, **dynamic behavior**, and **backend integration**
for a node-based pipeline builder.

------------------------------------------------------------------------

## 🚀 Tech Stack

- **Frontend:** React + ReactFlow
- **Backend:** Python + FastAPI

------------------------------------------------------------------------

## ▶️ How to Run the Project

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

## ✅ Part 1 --- Node Abstraction

### Problem

The original node implementations (Input, Output, LLM, Text) contained
large amounts of duplicated layout, handle logic, and styling. Creating
a new node required copying entire files and modifying small pieces,
which is not scalable.

Additionally, five new nodes were created to demonstrate that the abstraction supports nodes with different handle combinations and UI structures.

### Solution

Created a reusable `BaseNode` component that abstracts:

- Node container layout
- Title rendering
- Input/Output handle positioning
- Shared styles

All existing nodes were refactored to use this abstraction.

### Result

New nodes can now be created in \~15 lines instead of \~150 lines,
making the system scalable and easy to maintain.

------------------------------------------------------------------------

## 🎨 Part 2 --- Styling

(To be completed)

------------------------------------------------------------------------

## ✍️ Part 3 --- Text Node Logic

(To be completed)

------------------------------------------------------------------------

## 🔗 Part 4 --- Backend Integration

(To be completed)

------------------------------------------------------------------------

## 🧩 Key Design Decisions

- Avoided code duplication via component abstraction
- Designed nodes as "layout + content" instead of independent components
- Maintained separation of concerns between structure and logic

------------------------------------------------------------------------

## 📌 What This Demonstrates

- React component architecture
- Reusability and scalability thinking
- UI consistency
- Dynamic rendering with handles
- Full-stack integration
- Graph algorithm implementation (DAG check)
