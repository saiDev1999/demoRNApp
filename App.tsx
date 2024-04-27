/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import * as Sentry from '@sentry/react-native';

import WebViewComponent from './src/pages/webView/web-view';
import {Button, View} from 'react-native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  Sentry.init({
    dsn: 'https://3f80d1f1a95f6a8f9672faf849af5e4a@o4507148488146945.ingest.us.sentry.io/4507148489785344',
    // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
    // We recommend adjusting this value in production.
    tracesSampleRate: 1.0,
    _experiments: {
      // profilesSampleRate is relative to tracesSampleRate.
      // Here, we'll capture profiles for 100% of transactions.
      profilesSampleRate: 1.0,
    },
  });

  const fetchPosts = () => {
    //Producing code
    let newPromise = new Promise((resolve, reject) => {
      //Mock the server
      setTimeout(function () {
        let data = {
          posts: ['post1', 'post2'],
          status: false,
        };
        if (data.status) {
          resolve(data.posts);
        } else {
          reject('server is busy , try after some');
        }
      }, 1000);
    });

    return newPromise;
  };

  const fetchPostsAsync = async ()=>{
    try{
    const posts =await fetchPosts()
    }catch(err){
      console.log(err)
    }
  }
  return (
    <>
      <View>
        <Button title="click me" onPress={fetchPostsAsync} />
      </View>
    </>
  );
}

export default Sentry.wrap(App);
