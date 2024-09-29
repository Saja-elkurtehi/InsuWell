import Header from '../components/Header'
import React from 'react';
import DiaryActions from '../components/DiaryActions/DiaryActions';
import PieChartCard from '../components/PieChartCard'; 
import WaterIntakeCard from '../components/WaterIntakeCard'; 
import WeightBMICard from '../components/WeightBMICard'; 
import AverageGICard from '../components/AverageGICard'; 

export default function About() {
    return (
        <>
            <Header />
            <div className="container">
                <DiaryActions />
                <PieChartCard />
                <WaterIntakeCard />
                <AverageGICard />
                <WeightBMICard />
            </div> 
        </>
    )
}