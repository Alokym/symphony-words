/**
 * Created by vst on 5/14/2016.
 */

const App = (props) =>
  <div id="app-wrapper">
    <article id="page-container" className="row">{props.children}</article>
  </div>;

export default App;