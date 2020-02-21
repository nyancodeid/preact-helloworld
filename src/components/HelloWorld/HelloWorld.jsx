import { Component } from 'preact';
import style from './style.css';

export default class HelloWorld extends Component {
  componentDidMount () {
    console.log(`component Hello World berhasil dimuat`);
  }

  render ({ name }) {
    return (
      <h1 class={style.heading}>Hello World, dan Hai {name}</h1>
    );
  }
}