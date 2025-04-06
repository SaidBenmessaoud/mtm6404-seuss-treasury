import { useEffect, useState } from 'react';

function Quotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/quotes/random/10')
      .then(res => res.json())
      .then(data => {
        console.log("💬 Citations reçues :", data);
        setQuotes(data);
      });
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Quotes</h2>
      <div className="quotes-grid">
        {quotes.map((quote, index) => (
          <div key={index} className="quote-card">
            <p className="quote-text">“{quote.text}”</p>
            <p className="quote-source">— {quote.bookTitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quotes;
