import axios from 'axios'
import fs from 'fs'
/*
HOW TO CREATE AN API KEY

1. access https://console.cloud.google.com
2. create new project (with same name of the repo)
3. go to "APIs and Services" -> Enabled APIs and Services
4. click "+ ENABLE API"
5. search "Google Sheets API"
6. click ENABLE
7. now go to "APIs and Services" -> Credentials
8. click "+ CREATE CREDENTIALS" -> "API Keys"
9. copy the key
10. open its options
11. set:
  - Name: "Get spreadsheets of ..."
  - Application restriction: "None"
  - API restrictions: 
      Restrict key: 
        "Google Sheets API" 
        (not visible if wasn't enabled in step 6)
12. now use the key to open a spreadsheet:
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}?includeGridData=true&key=${apiKey}`
*/

const sheetId = '10p3heCdHQiosKDVxgor_9OqHJzjLhq07dF2PIDYzs2Y'
const apiKey = 'AIzaSyCovL3X7sblbLZ4LQA7V_nI7Kd41rXNyco'

const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}?includeGridData=true&key=${apiKey}`

axios
  .get(url)
  .then((res) => res.data)
  .then((data) => {
    // console.log(data.sheets)

    const content = Object.fromEntries(
      data.sheets[0].data[0].rowData.map((row) => [
        row.values[0]?.formattedValue,
        row.values[1]?.formattedValue,
      ])
    )

    fs.writeFileSync('src/data/content.json', JSON.stringify(content, null, 2))
  })
