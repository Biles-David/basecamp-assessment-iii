import React, { Component } from 'react';

export default class Pictures extends Component {
    render() {
      return (
          <div className='pic'>
              <img src= 'https://www.geek.com/wp-content/uploads/2016/02/Sword-Art-Online-625x352.jpg' height={400} width={800}className='Poster' alt='sao'/>   
          </div>
      );
    }
  }