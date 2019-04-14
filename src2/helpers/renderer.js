import React from 'react';
import serialize from 'serialize-javascript';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import StyleContext from 'isomorphic-style-loader/StyleContext';
import Routes from './Routes';

export default (req, store) => {
  const css = new Set()
  const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()));

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <StyleContext.Provider value={{insertCss}}>
          <div>{renderRoutes(Routes)}</div>
        </StyleContext.Provider>          
      </StaticRouter>
    </Provider> 
  );

  return `
    <html>
      <head>
        <link rel="stylesheet" href="https://unpkg.com/@coreui/coreui/dist/css/coreui.min.css">
        <style type="text/css">${[...css].join('')}</style>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
      <script>
        window.INITIAL_STATE = ${serialize(store.getState())}
      </script>
      <script src="bundle.js"></script>
    </html>
  `;
}