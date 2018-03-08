import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { MapView } from 'expo';

class MapScreen extends Component {
  state = {
    mapLoaded: false,
    region: {
      longitude: -122.4324,
      latitude: 37.78825,
      longitudeDelta: 0.0421,
      latitudeDelta: 0.0922
    }
  };

  componentDidMount() {
    this.setState({ mapLoaded: true });
  }

  onRegionChangeComplete = region => {
    this.setState({ region });
  };

  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <MapView
        region={this.state.region}
        style={{ flex: 1 }}
        onRegionChangeComplete={this.onRegionChangeComplete}
      />
    );
  }
}

export default MapScreen;
