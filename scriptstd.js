document.addEventListener('DOMContentLoaded', function () {
    const studentBookList = document.getElementById('studentBookList');
    const searchInput = document.getElementById('searchInput');

    // Функция для отображения книг
    function displayBooks() {
        // Получаем книги из localStorage
        const books = JSON.parse(localStorage.getItem('books')) || [];

        // Очищаем список книг перед добавлением новых
        studentBookList.innerHTML = '';

        // Проходимся по всем книгам и добавляем их в список
        books.forEach((book) => {
            const bookItem = document.createElement('div');
            bookItem.className = 'book-item';
            bookItem.innerHTML = `
                <h2>${book.title}</h2>
                <img src="${book.cover}" alt="Обложка книги">
                <p>Автор: ${book.author}</p>
                <a href="${book.file}" download>Скачать</a>
                <a href="${book.file}" target="_blank">Читать онлайн</a>
            `;
            studentBookList.appendChild(bookItem);
        });
    }
    // Инициализация отображения книг
    displayBooks();

// Функция для отображения книг
function displayBooks(filteredBooks) {
    // Очищаем список книг перед добавлением новых
    studentBookList.innerHTML = '';

    // Если фильтр не передан, используем все книги
    const books = filteredBooks || JSON.parse(localStorage.getItem('books')) || [];

    // Проходимся по всем книгам и добавляем их в список
    books.forEach((book) => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item';
        bookItem.innerHTML = `
            <h2>${book.title}</h2>
            <img src="${book.cover}" alt="Обложка книги">
            <p>Автор: ${book.author}</p>
            <a href="${book.file}" download>Скачать</a>
            <a href="${book.file}" target="_blank">Читать онлайн</a>
        `;
        studentBookList.appendChild(bookItem);
    });
}

// Функция для фильтрации книг по названию
function filterBooks(searchTerm) {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    displayBooks(filteredBooks);
}

// Обработчик события для поискового поля
searchInput.addEventListener('input', function () {
    filterBooks(this.value);
});

// Инициализация отображения книг
displayBooks();

});