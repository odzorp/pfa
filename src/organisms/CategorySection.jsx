import React, { useState } from 'react';
import styles from '../css modules/CategorySection.module.css';

const CategorySection = ({ onAddExpense }) => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!amount) {
      alert('Please enter amount.');
      return;
    }
    onAddExpense(category, amount);
    setCategory('');
    setAmount('');
  };

  const labelStyle = {
    fontSize: '18px',
    marginBottom: '12px',
    color: '#333',
  };

  const selectStyle = {
    width: '80%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #FFE7D1',
    borderRadius: '4px',
    boxSizing: 'border-box',
    marginLeft: '31px',
  };

  return (
    <div className={styles.container}>
      <p className={styles.headTxt}>Add Expenditure</p>
      <form style={{ width: '100%' }} onSubmit={handleAddExpense}>
        <select
          id="category"
          style={selectStyle}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Category...</option>
          <option value="Food">Food</option>
          <option value="Transportation">Transportation</option>
          <option value="Rent">Rent</option>
          <option value="Clothing">Clothing</option>
          <option value="Others">Others</option>
        </select>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginLeft: '32px',
            marginBottom: '28px',
          }}
        >
          <label className={styles.label} htmlFor="">
            Amount
          </label>
          <input
            className={styles.amtInput}
            type="number"
            name=""
            id=""
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className={styles.btn}>Add</button>
      </form>
    </div>
  );
};

export default CategorySection;
