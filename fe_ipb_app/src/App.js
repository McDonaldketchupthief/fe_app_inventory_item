import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './screens/TabNavigation';
// import axios from 'axios';
// import React, { useState, useEffect } from 'react';

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigation/>
    </NavigationContainer>
  )
}

export default App;