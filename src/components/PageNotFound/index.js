import React from 'react';

const PageNotFound = ({staticContext = {}}) => {
  staticContext.pageNotFound = true;
  return<h1>Oops, the route you requested does not exist.</h1>
}

export default {
  component: PageNotFound
}