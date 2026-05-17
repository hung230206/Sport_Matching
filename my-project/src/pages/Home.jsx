import React from "react";
import Header from '../Components/Header'
import PostCard from '../Components/PostCard'
import BottomNav from '../Components/BottomNav'
import './Home.css'

const Home = () => {
    return (
        <div className="app-container">
            <Header />
            <main className="main-content">
                <h1 className="page-title">
                    
                    Bài đăng
                    </h1>
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <BottomNav />
            </main>
        </div>
        

    );
};

export default Home;