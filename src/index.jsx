import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'antd/dist/antd.min.css';
import GlobalStyles from './globalstyles/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <App />
        </GlobalStyles>
    </React.StrictMode>,
);
