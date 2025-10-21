// App.jsx
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Support from './components/Support.jsx';
import NotFound from './components/NotFound.jsx';
import MainHeader from './components/MainHeader.jsx'
import Breadcrumb from './components/Breadcrumb.jsx'
import BackButton from './components/BackButton.jsx'
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <BackButton />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">R</span>
                </div>
                <span className="text-xl font-bold text-gray-800">React Router</span>
              </div>
            </div>
            
            <ul className="flex gap-1 md:gap-2">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => 
                    isActive 
                      ? "bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-sm" 
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium transition-all duration-200"
                  }
                >
                  🏠 Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => 
                    isActive 
                      ? "bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-sm" 
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium transition-all duration-200"
                  }
                >
                  ℹ️ About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => 
                    isActive 
                      ? "bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-sm" 
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium transition-all duration-200"
                  }
                >
                  📧 Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/support"
                  className={({ isActive }) => 
                    isActive 
                      ? "bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-sm" 
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium transition-all duration-200"
                  }
                >
                  🆘 Support
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Breadcrumb />

      <Routes>
        <Route path="/" element={<MainHeader />} >
          {/* default route */}
          <Route index element={<Home></Home>}></Route> 
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
