import Links from './screens/Links';
import * as information from './information.json';

function App() {
  return (
    <Links information={information.default}/>
  );
}

export default App;
