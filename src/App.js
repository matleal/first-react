import React, { useState } from 'react';

import Counter from './Counter';
import Albuns from './Albuns';
import Users from './Users';

const defaultPage = 'albuns';

const pages = {
  albuns: {
    text: 'Albuns',
    component: Albuns,
  }, 
  counter: {
    text: 'Contador',
    component: Counter,
  },
  users: {
    text: 'Usuarios',
    component: Users,
  },
}

function App() {
  const [page, setPage] = useState(defaultPage);

  const handleOnChangePage = page => {
    setPage(page)
  }

  const Page = pages[page].component;

  const pageNames = Object.keys(pages)
  
  return (
    <>
      { 
        pageNames.map(page => <button onClick={() => handleOnChangePage(page)}>{pages[page].text}</button>)
      }

      { Page && <Page /> }
    </>
    
  );
}

export default App;
