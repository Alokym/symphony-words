/**
 * Created by vst on 5/14/2016.
 */

import './app.scss';

const HelloWorld = (props) =>
  <h1>
    Hello, {props.name}! {' '}
    <i className="fa fa-fort-awesome"/>
  </h1>;

ReactDOM.render(<HelloWorld name="World" />,
  document.getElementById('viewport'));