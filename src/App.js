import './App.css';
import ContactsBook from "./components/ContactsBook"
import {useReducer} from "react"
import {ContextApp, InitialState, reducer} from "./reducers"

function App() {

	const [state, dispatch] = useReducer(reducer, InitialState)

  return (
    <div className="App">
	    <ContextApp.Provider value={{state, dispatch}}>
		    <ContactsBook/>
	    </ContextApp.Provider>
    </div>
  );
}

export default App;
