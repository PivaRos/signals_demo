import {Signal} from '@preact/signals-react';
import React from 'react';
import {Button, Text, View} from 'react-native';

interface CustomFooterProps {
  count: Signal<number>;
}

const CustomHeader = ({count}: CustomFooterProps) => {
  return (
    <View>
      <Text>this is header</Text>
      <Button
        title="add to Count"
        onPress={() => {
          count.value = count.value + 1;
        }}
      />
    </View>
  );
};

export default CustomHeader;
