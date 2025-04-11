//1
let json = ["json1", "json2", "json3", "json4", "json5", "json6"]
let dfg = JSON.stringify(json)
console.log(dfg)
//5

let asd = `[
    {
        "surname": "Иванов",
        "name": "Иван",
        "patronymic": "Иванович"

    },


    {
        "surmane": "Петров",

        "name": "Петров",
        "patronymic": "Петрович"
    },

    {
        "surname": "Сидоров",
        "name": "Сидор",
        "patronymic": "Сидорович"


    }
]`

console.log(JSON.parse(asd))




const items = Array.from(querySelectorAll("li"))
console.log(items)
const cities = items.map((item) => {
    return item.textContent
})


console.log(cities)


















let jsont = [{
    "name": "user1",
    " age": 25,
    "salary": 1000
},
{
    "name": "user2",
    " age": 26,
    "salary": 2000
},
{
    "name": "user3",
    " age": 27,
    "salary": 3000
},
]
const emol = JSON.parse(jsont)
const tbody = document.querySelector('#tbodyq')

for (let semol of emol) {

    let tr = document.createEvent('tr')
    tbody.appendChild(tr)
    tr.innerHtml = `
<td>${semol.name}<td>
<td>${semol.age}<td>
<td>${semol.salary}<td>
`
}





