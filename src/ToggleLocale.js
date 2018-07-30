import React from 'react';

import { LocaleConsumer } from './context/LocaleContext';

const ToggleLocale = () => {
  return (
    <LocaleConsumer>
      {(context) => (
      	// console.log(context.estado),
        <button onClick={context.estado.changeLocale}>Change language</button>
      )}
    </LocaleConsumer>
  );
};

export default ToggleLocale;