// src/App.tsx
import React, {useEffect} from "react";
import Header from "./components/Header";
import SearchSection from "./components/SearchSection";
import CategoryList from "./components/CategoryList";
import BannerCarousel from "./components/BannerCarousel";
import './index.css'

const App: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="min-h-screen bg-white text-gray-800 mt-20">
            <Header/>
            <main className="max-w-4xl mx-auto px-4">
                <SearchSection/>
                <CategoryList/>
                <BannerCarousel/>
            </main>
        </div>
    );
};

export default App;
