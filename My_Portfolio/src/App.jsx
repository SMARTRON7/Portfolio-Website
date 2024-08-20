import { Header, Footer } from "./components"
import { Outlet, useNavigate } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop"
import { useEffect, useState } from "react";

function App() {

  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Start fade-out animation and navigate to /home after 2 seconds
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fade-out effect
      setTimeout(() => {
        setLoading(false); // Hide the loading spinner
        navigate('/home'); // Redirect to /home
      }, 500); // Delay to allow fade-out to complete
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <div className='w-full min-h-screen flex flex-wrap content-between bg-darkblue'>
        <div className='w-full block mt-3'>
          <ScrollToTop />
          <div className="w-full flex justify-center ">
            <Header />
          </div>
          <main className="flex-grow">
            {loading ? (
              <div className="flex items-center justify-center h-screen bg-gray-900 absolute inset-0 z-50">
                <div
                  className={`w-16 h-16 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'
                    }`}
                ></div>
              </div>
            ) : (
              <Outlet />
            )}
          </main>
          <div className="w-full flex justify-center">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
