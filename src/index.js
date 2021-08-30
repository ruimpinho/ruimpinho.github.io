import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counter';

/*const Item = (props) => {
  return (
    <p>This is an Item component. It's name is {props.name}.</p>
  )
}

const item1 = <p>This is an Item.</p>

const element = <div>
  <h1>Hello, Rui!</h1>
  {item1}
  <Item name={'Rui'} />
  <Item name={'Rui Pinho'} />
  <Item name={'RMAP'} />
  <Item name={'ruimpinho'} />
</div>*/



ReactDOM.render(
    //<Counter />,
    <App />,
    //element,
  document.getElementById('root')
)
