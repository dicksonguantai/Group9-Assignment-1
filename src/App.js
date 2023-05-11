import React from 'react';
import Form from './components/Form';
import { Card } from './components/Card'; // Modified import statement

const App = () => {
  return (
    <div>
      <Card
        image="https://picsum.photos/400"
        title="Sample Product"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Form />
    </div>
  );
};

export default App;
