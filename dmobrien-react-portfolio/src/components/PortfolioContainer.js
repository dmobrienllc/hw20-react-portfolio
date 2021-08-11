import { React, useState, useEffect } from 'react';
import Navigation from './Navigation';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

export default function PortfolioContainer() {
    const defaultPage = 'About';
    const [currentPage, setCurrentPage] = useState(defaultPage);
    
    const renderPage = () => {
        switch (currentPage) {
            case 'Home':
                return <Home />
                break;
            case 'Portfolio':
                return <Portfolio />
                break;
            case 'Blog':
                return <Blog />
                break;
            case 'Contact':
                return <Contact />
                break;
            case 'Resume':
                return <Resume />
                break;
            default:
                return <Home />
                break;
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    )
}