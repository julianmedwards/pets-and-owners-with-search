'use strict'

document.onload = initSearch()

function initSearch() {
    document.getElementById('search').addEventListener('submit', search)

    document
        .getElementById('search-results')
        .addEventListener('hidden.bs.offcanvas', (event) => {
            event.currentTarget.querySelector('.offcanvas-body').innerHTML = ''
        })
}

async function search(event) {
    event.preventDefault()

    const results = await searchRequest(
        document.getElementById('search').querySelector('input').value
    )

    const resultsMenu = document.getElementById('search-results')
    buildSearchResults(resultsMenu.querySelector('.offcanvas-body'), results)

    const bsOffCanvas = bootstrap.Offcanvas.getOrCreateInstance(resultsMenu)
    bsOffCanvas.show()
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

function buildSearchResults(wrapper, results) {
    if (results.owners.length === 0 && results.pets.length === 0) {
        wrapper.append(
            (document.createElement('h5').textContent = 'No results found.')
        )
    }

    if (results.owners.length > 0) {
        const header = document.createElement('h5')
        header.textContent = 'Owners'
        wrapper.append(header)
        wrapper.append(buildResultsGroup(results.owners, 'owners'))
    }

    if (results.pets.length > 0) {
        const header = document.createElement('h5')
        header.textContent = 'Pets'
        wrapper.append(header)
        wrapper.append(buildResultsGroup(results.pets, 'pets'))
    }
}

function buildResultsGroup(data, groupName) {
    const wrapper = document.createElement('ul')
    wrapper.classList.add('list-group', 'list-group-flush')
    data.forEach((result) => {
        const el = buildResult(result, groupName)
        el.classList.add(groupName)
        wrapper.append(el)
    })

    return wrapper
}

function buildResult(data, groupName) {
    const resultEl = document.createElement('a')
    resultEl.classList.add(
        'list-group-item',
        'list-group-item-action',
        'link-primary'
    )
    resultEl.textContent = data.name

    resultEl.setAttribute('href', `/${groupName}/${data.id}`)

    return resultEl
}
