let = showTheme = () => {
    switch (document.getElementById('changeTheme').value) {
        case 'light':
            document.querySelector('#theme').style.background = '#E0E0E0';
            document.querySelector('#theme').style.color = 'black';
            break;
        case 'dark':
            document.querySelector('#theme').style.background = '#404040';
            document.querySelector('#theme').style.color = 'white';
            break;
        case 'blue':
            document.querySelector('#theme').style.background = '#0066cc';
            document.querySelector('#theme').style.color = 'black'
            break;
        default:
            break;
    }
}