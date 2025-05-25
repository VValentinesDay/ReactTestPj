import './App.css'
import Header from './components/Header/Header'
import ArrayOut from './components/ArrayOut';
import BlockOut from './components/BlocOut';
import IntroSection from './components/IntroSection';
import TabSection from './components/TabSection';
import FeedBackSection from './components/FeedBackSection';
import { useState } from 'react';

export default function App() {
  
  // Активное состояние - фидбэк
const [tab, setTab] = useState('feedback')

  return (
    <>
     <Header/>
      <main>
      <IntroSection></IntroSection>
      <TabSection active={tab} onChange={(current) => setTab(current)}></TabSection>

        {/* Если tab = main, то можно показать  */}
        
        {tab == 'main' && 
        (<>
          <ArrayOut></ArrayOut>
          <BlockOut></BlockOut>
        </>)}

        {tab == 'feedback' && <> <FeedBackSection></FeedBackSection>  </>} 


 
      </main>
    </>
  )
}

