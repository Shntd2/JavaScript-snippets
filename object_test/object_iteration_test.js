const book = {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy'
  };

for (const key in book) {
    if (book.hasOwnProperty(key)) {
    console.log(`${key}: ${book[key]}`);
    }
}