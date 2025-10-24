// src/components/Breadcrumb.jsx
import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();
  
  const getBreadcrumbItems = () => {
    const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
    
    if (pathSegments.length === 0) {
      return [{ name: 'Home', path: '/' }];
    }
    
    const items = [{ name: 'Home', path: '/' }];
    
    pathSegments.forEach((segment, index) => {
      const path = '/' + pathSegments.slice(0, index + 1).join('/');
      const name = segment.charAt(0).toUpperCase() + segment.slice(1);
      items.push({ name, path });
    });
    
    return items;
  };
  
  const breadcrumbItems = getBreadcrumbItems();
  
  return (
    <nav className="bg-gray-100 border-b border-gray-200 py-2">
      <div className="max-w-6xl mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <span className="text-gray-400 mx-2">›</span>
              )}
              {index === breadcrumbItems.length - 1 ? (
                <span className="text-gray-600 font-medium">{item.name}</span>
              ) : (
                <Link 
                  to={item.path}
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
