import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {CustomFooter, CustomHeader} from './src/components';
import {count} from './src/signals/counter';

const App = () => {
  return (
    <SafeAreaView>
      <Text>{count.value}</Text>
      <CustomHeader count={count} />
      <CustomFooter count={count} />
    </SafeAreaView>
  );
};

export default App;
