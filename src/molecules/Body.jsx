import React,{useState} from 'react';
import styles from '../css modules/Body.module.css';
import OverviewBox from '../organisms/OverviewBox';
import Header from './Header';
import Box2 from '../organisms/Box2';
import Box3 from '../organisms/Box3';
import DashSection from '../organisms/DashSection';
import CategorySection from '../organisms/CategorySection';



const Body = () => {
    const [expenses, setExpenses] = useState([]);
  
    const handleAddExpense = (category, amount) => {
      const newExpense = {
        category,
        amount,
        date: new Date(),
      };
      setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
      console.log(`Category: ${category}, Amount: ${amount}`);
    };
  
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.OverBox}>
          <OverviewBox />
          <Box2 />
          <Box3 />
        </div>
        <div className={styles.sections}>
          <DashSection expenses={expenses} />
          <CategorySection onAddExpense={handleAddExpense} />
        </div>
      </div>
    );
  };
  

export default Body;
