
const addToLocalStorage = () => {

    let inputKey = document.getElementById('storage-id')
    const key = inputKey.value;

    let inputValue = document.getElementById('storage-value')
    let value = inputValue.value

    localStorage.setItem(key, value)
    inputKey.value = ''
    inputValue.value = ''

}
