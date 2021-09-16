import React, { useState } from 'react';

import Counter from './pages/Counter';
import Albuns from './pages/Albuns';
import Users from './pages/Users';
import Template from './templates/Template';

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
  
  return (
      <Template pages={pages} activePage={page} onChangePage={handleOnChangePage}>
        { Page && <Page /> }
      </Template>
  );
}

export default App;
