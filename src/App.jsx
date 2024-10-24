
import './App.css'
import AddBook from './components/AddBook'
import BookList from './components/BookList'
import EditBook from './components/EditBook'

function App() {

  return (
    <>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-evenly',marginTop:'50px'}}>
        <AddBook/>
        <BookList/>
        <EditBook/>
      </div>
    </>
  )
}

export default App
