import Header from '../components/Header'
import React from 'react';
import DiaryActions from '../components/DiaryActions/DiaryActions';
import PieChartCard from '../components/PieChartCard'; 
import WaterIntakeCard from '../components/WaterIntakeCard'; 

export default function About() {
    return (
        <>
            <Header />
            <div className="container">
                <DiaryActions />
                <PieChartCard />
                <WaterIntakeCard />
            </div>
        </>
    )
}