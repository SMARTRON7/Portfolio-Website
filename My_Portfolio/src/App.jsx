import { Header, Footer } from "./components"
import { Outlet } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop"


function App() {
  return (
    <div className='w-full min-h-screen flex flex-wrap content-between bg-darkblue'>
      <div className='w-full block mt-3'>
        <ScrollToTop />
        <div className="flex justify-center ">
          <Header />
        </div>
        <main>
          <Outlet />
        </main>
        <div className="flex justify-center">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
