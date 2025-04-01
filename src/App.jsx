import './App.module.css'
import { Btn } from './components/btn'
import { Menu } from './components/menu'

function App() {
  return (
    <>
      <Menu s1="a" s2="b" s3="c"/>
      <main>
        <section id='s1'>
          primeira
          <Btn text='desce' func="#s2"/>
        </section>
        <section id='s2'>
          segunda
          <Btn text='desce' func="#s3"/>
        </section>
        <section id='s3'>
          terceira
          <Btn text='sobe' func="#s1"/>
        </section>
      </main>
    </>
  )
}

export default App
