function fetchBooks() {
  // Return the fetch call to allow promise chaining
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json()) // Invoke json() to parse the response
    .then(json => renderBooks(json));  // Pass the parsed JSON data to renderBooks
}


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
