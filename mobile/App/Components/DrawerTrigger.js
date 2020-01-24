import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// withNavigation allows components to dispatch navigation actions
import { withNavigation } from 'react-navigation';

// DrawerActions is a specific type of navigation dispatcher
import { DrawerActions } from 'react-navigation-drawer';

class DrawerTrigger extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.trigger}
        onPress={() => {
          this.props.navigation.dispatch(DrawerActions.openDrawer())
        }}
      >
        <Ionicons
          name={'md-arrow-round-forward'}
          size={47}
          color={'grey'}
        />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  trigger: {
    marginLeft: 27.5,
    borderRadius: 30,
    width: 60,
    height: 60,
  }
});

export default withNavigation(DrawerTrigger);