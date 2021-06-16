import { BrowserRouter } from 'react-router-dom'
import Root from './components/Root';
import ReactDOM from 'react-dom';

// connecting router to our app main component all other components are inside it.
// now this home page is our main page where we define all the routes of other pages
ReactDOM.render((
  <BrowserRouter>
    <Root />
  </BrowserRouter>
), document.getElementById('root'))