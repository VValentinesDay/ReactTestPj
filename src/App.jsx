import './App.css'
import Header from './components/Header'
import ArrayOut from './components/ArrayOut';
import BlockOut from './components/BlocOut';

export default function App() {
  return (
    <div>
     <Header/>

      <main>
       <ArrayOut></ArrayOut>
       <BlockOut></BlockOut>
        <section><strong>TEST</strong>
        {/* {testData["Arg_1"]} */}
        </section>
      <h1>Hello</h1>
      </main>
    </div>
  )
}

