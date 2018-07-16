import React from 'react';
import { Provider } from 'react-redux';

import {store} from 'Store';
import ChatPage from 'Pages/chat/containers/ChatPage';
import './reset.scss';
import './style.scss';

export const App = () => (
  <Provider store={store}>
    <ChatPage></ChatPage>
  </Provider>
)