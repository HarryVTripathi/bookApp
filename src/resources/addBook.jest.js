const addBook = require('./addBook');

it('adds a book to the json file', () => {
    expect(addBook(req, res)).toBe("ADDED");
})