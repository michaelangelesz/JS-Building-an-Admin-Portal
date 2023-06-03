
// Your Code Here

async function main() {

    let response = await fetch('http://localhost:3001/listBooks')

    let books = await response.json()

    books.forEach(renderBook)
}

function renderBook(book){
    let root = document.querySelector('#root')

    let li = document.createElement('li')
    li.textContent = book.title
}

main();