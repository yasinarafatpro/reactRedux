import './App.css';
import {useSelector,useDispatch} from "react-redux"
import {bindActionCreators} from "redux";
import {actionCreators} from "./state/index"
function App() {

  const account=useSelector((state)=>state.account)
  const dispatch=useDispatch()

  const {depositMoney,withdrowMoney}=bindActionCreators(actionCreators,dispatch);
  
  return (
    <div className="App">
      <header className="App-header">
        <h3>{account}</h3>
        <button onClick={()=>depositMoney(10)}>Deposit</button>
        <button onClick={()=>withdrowMoney(10)}>Withdrow</button>
      </header>
    </div>
  );
}

export default App;
