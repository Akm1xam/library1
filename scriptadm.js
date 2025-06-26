document.addEventListener('DOMContentLoaded', function () {
    const uploadForm = document.getElementById('uploadForm');
    const adminBookList = document.getElementById('adminBookList');

    // Загрузка книг из localStorage
    let books = JSON.parse(localStorage.getItem('books')) || [];
    // Отображение загруженных книг
    function displayBooks() {
        adminBookList.innerHTML = '';
        books.forEach((book, index) => {
            const bookItem = document.createElement('div');
            bookItem.className = 'book-item';
            bookItem.innerHTML = `
                <img src="${book.cover}" alt="Обложка книги">
                <div>
                    <h3>${book.title}</h3>
                    <p>Автор: ${book.author}</p>
                </div>
            `;
            adminBookList.appendChild(bookItem);
        });
    }

    // Обработка загрузки новой книги
    uploadForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const title = document.getElementById('bookTitle').value;
        const author = document.getElementById('bookAuthor').value;
        const coverFile = document.getElementById('bookCover').files[0];
        const bookFile = document.getElementById('bookFile').files[0];

        if (title && author && coverFile && bookFile) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const cover = e.target.result;
                const book = {
                    title: title,
                    author: author,
                    cover: cover,
                    file: bookFile.name
                };
                books.push(book);
                localStorage.setItem('books', JSON.stringify(books));
                displayBooks();
                uploadForm.reset();
            };
            reader.readAsDataURL(coverFile);
        }
    });

    // Инициализация отображения книг
    displayBooks();
});