import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from '@src/app'
import { history, HistoryRouter } from '@utils/router'


render(
    <HistoryRouter history={history}>
        <App />
    </HistoryRouter>
    ,
    document.getElementById('app')
); 
