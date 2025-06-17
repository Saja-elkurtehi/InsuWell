import Header from '../components/Header';
import React from 'react';
import DiaryActions from '../components/DiaryActions/DiaryActions';
import PieChartCard from '../components/PieChartCard'; 
import WaterIntakeCard from '../components/WaterIntakeCard'; 
import WeightBMICard from '../components/WeightBMICard'; 
import AverageGICard from '../components/AverageGICard'; 
import InsulinDosageCard from '../components/InsulinDosageCard';
import Calendar from '../components/Calendar';
import BloodSugarCard from '../components/BloodSugarCard';

import './Home.css';
import Navbar from '../components/Navbar';


export default function Home() {
    return (
        <>
            <Navbar/>
            <div className="container">
              
                <div className="dashboard-grid">
                <div className="meals-card">
                        <DiaryActions />
                    </div>
                    <div className="calendar-card">
                        <Calendar />
                    </div>
                    <PieChartCard />
                    <WaterIntakeCard />
                    <AverageGICard />
                    <WeightBMICard />
                    <BloodSugarCard />
                    <InsulinDosageCard />
        
                </div>
            </div>
        </>
    );
}
