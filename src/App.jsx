import { Outlet } from "react-router-dom"

function App() {
  return <div className="border-x max-w-[480px] h-[100vh] mx-auto relative">
    <Outlet />
  </div>
}

export default App;