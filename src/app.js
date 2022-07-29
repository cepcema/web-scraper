
const feedDisplay = document.querySelector('#feed')
//<a href="https://www.w3schools.com">Visit W3Schools.com!</a> 
fetch('http://localhost:8000/results')
    .then(response => {return response.json()})
    .then(data => {
        data.forEach(article => {
            const articleItem = `
            <table class="styled-table">
    <thead>
        <tr>
            <th>Title</th>
            <th>URL</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${article.title}</td>
            <td><a href=${article.url}>-------Click for full article--------.</a> </td>
        </tr>
    </tbody>
</table>
`
            feedDisplay.insertAdjacentHTML("beforeend", articleItem)
        })
    })
    .catch(err => console.log(err))