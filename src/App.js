import React, { Component } from "react";
import {View, StyleSheet, ScrollView} from "react-native";
import {
  Text,
  Accordion,
  AnimatedProgressBar,
  ColorText,
  IconButton,
  ThermoScore,
} from "@cara-care/caramel";

class App extends Component {

  render() {
    return (
      <ScrollView>
        <View style={{padding: 24}}>
          <Text type="header1">Caramel for web</Text>

          <Text type="header2" style={styles.headers}>Accordion</Text>
          <Accordion
            list={[
              {
                image: require('./logo.png'),
                name: 'Accordion1',
                description: 'Lorem ipsum dolor sit amet.',
              },
              {
                image: require('./logo.png'),
                name: 'Accordion2',
                description: 'Lorem ipsum dolor sit amet.',
              },
            ]}
            animate />

          <Text type="header2" style={styles.headers}>AnimatedProgressBar</Text>
          <AnimatedProgressBar
              style={{width: '100%', marginBottom: 50}}
              percentage={50}
              foreground={{height: 30, borderRadius: 24}}
              background={{height: 30, borderRadius: 24}}
          />

          <Text type="header2" style={styles.headers}>ColorText</Text>
          <ColorText
            linkEvents={[
              () => alert('The first link is pressed!'),
              () => alert('The second link is pressed!'),
            ]}
            linkTextStyle={{
              textDecorationLine: 'underline',
              color: 'darkblue',
              fontWeight: 'bold',
            }}>
            [b]Lorem ipsum dolor[/b] sit amet, consectetur
            [color=#FA5544]adipiscing elit, sed do eiusmod[/color] tempor
            incididunt ut [u]labore et dolore magna[/u] aliqua. Ut enim ad
            [s]minim veniam, quis[/s] nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. And here is a [link]link[/link]! And
            another [link]link[/link]!
            sit[br]amet,[br]consectetur
          </ColorText>

          <Text type="header2" style={styles.headers}>IconButton</Text>
          <IconButton
            style={{width: '100%'}}
            onPress={() => alert('I really do!')}
            text={'I have icons'}
            leftIcon={require('./logo.png')}
            rightIcon={require('./logo.png')}
          />

          <Text type="header2" style={styles.headers}>Texts</Text>
          <Text type="header1" style={{marginTop: 10}}>
            Lorem ipsum dolor sit amet
          </Text>
          <Text type="header2" style={{marginTop: 10}}>
            Lorem ipsum dolor sit amet
          </Text>
          <Text type="header3" style={{marginTop: 10}}>
            Lorem ipsum dolor sit amet
          </Text>
          <Text type="header4" style={{marginTop: 10}}>
            Lorem ipsum dolor sit amet
          </Text>
          <Text type="normal" style={{marginTop: 10}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida
            aliquet fringilla. Duis vestibulum, felis eget interdum auctor, mauris
            mi feugiat purus, at venenatis elit nisi quis turpis. Etiam finibus ut
            mi volutpat sagittis.
          </Text>
          <Text type="small" style={{marginTop: 10}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida
            aliquet fringilla. Duis vestibulum, felis eget interdum auctor, mauris
            mi feugiat purus, at venenatis elit nisi quis turpis. Etiam finibus ut
            mi volutpat sagittis.
          </Text>

          <Text type="header2" style={styles.headers}>ThermoScore</Text>
          <View style={{flexDirection: 'row'}}>
            <ThermoScore
              style={{marginHorizontal: 16}}
              middleCount={2}
              firstPercentage={60}
              firstColor={'#FA5544'}
            />
            <ThermoScore
              style={{marginHorizontal: 16}}
              middleCount={2}
              firstPercentage={60}
              secondPercentage={30}
              firstColor={'#FA5544'}
              secondColor={'#f9c450'}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  headers: {
    marginTop: 24,
  }
});