import Header from '../components/Header'
import React from 'react';
import DiaryActions from '../components/DiaryActions/DiaryActions';

export default function About() {
    return (
        <>
            <Header />
            <div className="container">
                <h1>Your Diary</h1>
                <DiaryActions />
            </div>
        </>
    )
}