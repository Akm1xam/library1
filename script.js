const users = [
    { username: "admin", password: "123" },
    { username: "student", password: "456" },
];

    document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

  
    const user = users.find(u => u.username === username && u.password === password);


if (user) {
    if (user.username === 'admin', user.password === '123') {
        window.location.href = 'admin.html';
    } 
    if (user.username === 'student', user.password === '456') {
        window.location.href = 'student.html';
    }
    } else {
        
        alert('Неверный логин или пароль');
    }
});
