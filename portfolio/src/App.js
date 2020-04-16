import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: 'Darcey Meus',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Think. Consult. Do.',
        subTitle: 'Delivering results tailored to your needs',
        text: 'Browse below!'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Get in Touch'
      }
    }
  }

  render() {
    return (
      <div>Hello From React</div>
    );
  }

}

export default App;
