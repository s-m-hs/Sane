import './Styles/App.css';
import Header from './Components/Header/Header';
import { useRoutes } from 'react-router-dom';
import routes from './routes';

function App() {
let router=useRoutes(routes)

  return (
    <div className="container App">
<Header/>
<h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
{router}

    </div>
  );
}

export default App;
