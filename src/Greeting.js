import React from 'react';

import { LocaleConsumer } from './context/LocaleContext';

const Greeting = () => {
  return (
    <LocaleConsumer>
      {(context) => (
      	// console.log(context.estado),
        context.estado.locale === 'en' ? <h1>Welcome!</h1> : <h1>Bienvenue!</h1>
      )}
    </LocaleConsumer>
  );
};

export default Greeting;