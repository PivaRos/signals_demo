import {Signal} from '@preact/signals-react';
import React from 'react';
import {Text, View} from 'react-native';

interface CustomFooterProps {
  count: Signal<number>;
}

const CustomFooter = ({count}: CustomFooterProps) => {
  return (
    <View>
      <Text>this is footer</Text>
      <Text>The count is {count.value}</Text>
    </View>
  );
};

export default CustomFooter;
