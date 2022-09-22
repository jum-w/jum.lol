import Title from './Title.jsx'
import Calculate from './Calculate.jsx'
import BottomBar from './BottomBar.jsx'

const App = () => {
  return (
    <div className="bg-slate-900 w-full min-h-screen font-mono">
      <Title/>
      <Calculate/>
      <BottomBar/>
    </div>
    
  )
}

export default App;
