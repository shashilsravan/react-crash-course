import Book from './components/Book'
import './App.css'
function App() {
  return (
    <div className="booksarena">
      <Book title="Python Book" author="Shashil" src="https://images-eu.ssl-images-amazon.com/images/I/81s6DUyQCZL._AC_UL200_SR200,200_.jpg" />
      <Book title="Java Book" author="Sravan"/>
      <Book title="Machine learning Book" author="Rohit" src="https://images-eu.ssl-images-amazon.com/images/I/91VokXkn8hL._AC_UL200_SR200,200_.jpg"/>
      <Book title="Deep learning Book" author="Andrew" src="https://images-eu.ssl-images-amazon.com/images/I/61MrRA4qE0L._AC_UL200_SR200,200_.jpg"/>
      <Book title="Data science Book" author="Sachin" src="https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg"/>
    </div>
  );
}

export default App;
