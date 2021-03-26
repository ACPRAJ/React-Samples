import "./App.css"
import { ChildA } from "./Components/Context Optimization/ChildrenContext"
import { ParentContext } from "./Components/Context Optimization/ParentContext"

function App() {
  return (
    <div className="App">
      <ParentContext>
        <ChildA />
      </ParentContext>
    </div>
  )
}

export default App
