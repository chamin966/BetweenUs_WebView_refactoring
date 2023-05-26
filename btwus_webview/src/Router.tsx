import CoupleTest from 'Pages/CoupleTest';
import CoupleTestResult from 'Pages/CoupleTestResult';
import FriendTest from 'Pages/FriendTest';
import FriendTestResult from 'Pages/FriendTestResult';
import TestChoice from 'Pages/TestChoice';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InitialIntro from './IntroPage/InitialIntro';
import CoupleTestIntro from './IntroPage/CoupleTestIntro';
import FriendTestIntro from './IntroPage/FriendTestIntro';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TestChoice />} />
        <Route path='/InitialIntro' element={<InitialIntro />} />
        <Route path='/FriendTestIntro' element={<FriendTestIntro />} />
        <Route path='/FriendTest:number' element={<FriendTest />} />
        <Route path='/FriendTestResult' element={<FriendTestResult />} />
        <Route path='/CoupleTestIntro' element={<CoupleTestIntro />} />
        <Route path='/CoupleTest:number' element={<CoupleTest />} />
        <Route path='/CoupleTestResult' element={<CoupleTestResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
