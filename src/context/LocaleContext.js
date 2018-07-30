import React from 'react';

// Contexto
const LocaleContext = React.createContext();

// Consumidor para Componentes
const LocaleConsumer = LocaleContext.Consumer;

// Proveedor para el componente del index
class LocaleProvider extends React.Component {
  constructor(props) {
    super(props);

    this.changeLocale = () => {
      this.setState(state => {
        const newLocale = state.locale === 'en' ? 'fr' : 'en';
        return {
          locale: newLocale
        };
      });
    };

    this.state = {
      locale: 'en',
      changeLocale: this.changeLocale
    };
  }

  render() {
    return (
      <LocaleContext.Provider value={{estado : this.state}}>
        {this.props.children}
      </LocaleContext.Provider>
    );
  }
}

// exportar Provider y Consumer
export {LocaleProvider, LocaleConsumer};