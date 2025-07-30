import { Outlet } from "react-router-dom"

function App() {
  return <div className="max-w-[480px] h-[100vh] mx-auto">
    <Outlet />
  </div>
}

export default App;