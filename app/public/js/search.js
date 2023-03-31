'use strict'

document.onload = initSearch()

function initSearch() {
    document.getElementById('search').addEventListener('submit', search)
}

async function search(event) {
    event.preventDefault()
    console.log('Searching')

    const results = await searchRequest(
        document.getElementById('search').querySelector('input').value
    )

    console.log(results)
}

async function searchRequest(queryString) {
    const response = await fetch(
        `http://localhost:5000/search/${queryString}`,
        {
            method: 'GET',
        }
    )

    const data = await response.json()

    if (response.ok) {
        return data
    } else {
        console.error('Error fetching search results.')
    }
}
