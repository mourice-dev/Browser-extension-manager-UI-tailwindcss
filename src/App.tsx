import Header from "./components/Header";
import List from "./components/List";

function App() {
  return (
    <div className=' min-h-screen bg-gradient-to-b from-dark-blue to-Neutral-900'>
      <div className='px-5 md:px-70 pt-8'>
        <Header />
        <List />
      </div>
    </div>
  );
}

export default App;
