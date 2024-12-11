 import React, { useState } from 'react';
  import './App.css';
  import NewsBoard from './Components/NewsBoard';
import Navbar from './Components/Navbar';

const App = () => {
  const [category, setCategory] = useState('technology');
  return (
    <div>
      <Navbar setCategory={setCategory} activeCategory={category} />
<NewsBoard category={category}/>
    </div>
  );
};
export default App;

