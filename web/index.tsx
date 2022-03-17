import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from '@src/app'
import { history, HistoryRouter } from '@utils/router'


import './src/assets/styles/common.less'
import './src/assets/styles/reset.less'


render(
    <HistoryRouter history={history}>
        <App />
    </HistoryRouter>
    ,
    document.getElementById('app')
); 
