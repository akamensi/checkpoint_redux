
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddTasks from './Comp/AddTasks';
import Buttons from './Comp/Buttons';
import Listtasks from './Comp/ListTasks';
import IsDoneTasks from './Comp/IsDoneTasks';
import NotDoneTasks from './Comp/NotDoneTasks';
import { useDispatch } from 'react-redux';
import { DeleteAll } from './Redux/Action';
import Button from 'react-bootstrap/Button';

function App() {
  const dispatch=useDispatch()
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <Buttons/>
      <br />
      <br />
      <AddTasks/>
      <br />
      <br />
      <Routes>
      <Route path='/' element={<Listtasks/>} />
      <Route path='/IsDoneTasks' element={<IsDoneTasks/>} />
      <Route path='/NotDoneTasks' element={<NotDoneTasks/>} />
      </Routes>
      <br />
      <br />
      <Button variant="outline-danger" onClick={()=>dispatch(DeleteAll())}>Delete All</Button>
      
      </div>
  );
}

export default App;
