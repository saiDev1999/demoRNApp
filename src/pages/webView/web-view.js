import {View} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';

const WebViewComponent = () => {
  const webURL = 'https://pmtestingwebviewwithoutlogin.netlify.app';

  return <View style={{flex: 1}}>{<WebView source={{uri: webURL}} />}</View>;
};

export default WebViewComponent;
