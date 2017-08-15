import React from 'react';
import {
  AppRegistry,
  AmbientLight,
  asset,
  DirectionalLight,
  Pano,
  Text,
  View,
  Cylinder,
} from 'react-vr';

export default class react_vr_sandbox extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          Hello
        </Text>
        <Text
          style={{
            position: 'absolute',
            transform: [{translate: [0, 0, -2]}],
            layoutOrigin: [0.5, 0.5],
            backgroundColor: '#2E008B'
          }}
          fontSize={0.4}>
          Office
        </Text>
        <Cylinder
          radiusTop={0.3}
          radiusBottom={0.8}
          dimHeight={2}
          segments={36}
          style={{
            color: '#fff',
            backgroundColor: '#000',
            transform: [{translate: [1, 1, -1]}],
          }}
          lit
        />
        <AmbientLight
          intensity={0.3}
          style={{
            color: 'red'
          }}
        />
        <DirectionalLight
          intensity={2}
          style={{
            color: 'blue',
            transform: [{translate: [1, 0, -1.5]}]
          }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('react_vr_sandbox', () => react_vr_sandbox);
