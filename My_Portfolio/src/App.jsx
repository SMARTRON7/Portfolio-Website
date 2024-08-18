import { Header, Footer } from "./components"
import { Outlet } from "react-router-dom"


function App() {


  return (
    <div className='min-h-screen flex flex-wrap content-between bg-darkblue'>
      <div className='w-full block mt-3'>
        <div className="flex justify-center">
          <Header />
        </div>
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
