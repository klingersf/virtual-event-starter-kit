# Gsx2Json

### criar credencial
https://handsondataviz.org/google-sheets-api-key.html

novo projeto
https://www.youtube.com/watch?v=0bntGJ0bx9M


## link exemplos
https://sheets.googleapis.com/v4/spreadsheets/176X5hPlYLpKIXhwCFTxTHL4rBJlt4zYnDkmlQm_AelE/values/P%C3%A1gina1?key=

https://sheets.googleapis.com/v4/spreadsheets/1I3tEfgYtWKNYK9vqTmsCGfZfbHckS0-odDIgEilHiOQ/values/Sheet1?key=AIzaSyDjvbRIW5fbE1zXIC3VwiRjadb8uFUaAz4


```
Example Response
There are two sections to the returned data - Columns (containing each column as a data array), and Rows (containing each row of data as an object.

{
    columns: {
        name: [
            "Nick",
            "Chris",
            "Barry"
        ],
        age: [
            21,
            27,
            67;
        ]
    },
    rows: [
        {
            name: "Nick",
            age: 21
        },
        {
            name: "Chris",
            age: 27
        },
        {
            name: "Barry",
            age: 67
        }
    ]
}

```