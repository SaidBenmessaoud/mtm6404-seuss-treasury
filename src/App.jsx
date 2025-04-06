// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import Books from './pages/Books';
import BookDetails from './pages/BookDetails';
import Quotes from './pages/Quotes';

function App() {
  return (
    <div>
      <nav style={{ padding: '1rem', background: '#eef' }}>
        <Link to="/books" style={{ marginRight: '1rem' }}>Books</Link>
        <Link to="/quotes">Quotes</Link>
      </nav>

      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </div>
  );
}

export default App;
