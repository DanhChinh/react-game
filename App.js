import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useRef, Profiler, Suspense, useCallback, memo, useContext, createContext} from 'react';
import InpurForm from './clickForm';
import History from './history';
import {GameStateProvider} from './GameStateContext';
import PredictForm from './predictForm';
import UserListComponent from './userList';
import Counter from './counter';

function App(){
  return(
    <GameStateProvider >
      <div className='remote-fixed'>
      <Counter />
      <PredictForm/>
      <InpurForm  />
      <History />
      </div>
      <UserListComponent/>
    </GameStateProvider>
  )

}
export default App;
