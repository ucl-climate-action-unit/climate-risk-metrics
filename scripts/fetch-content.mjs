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
    const findSheet = (sheetName) => {
      return data.sheets.find((s) => s.properties.title === sheetName)?.data[0]?.rowData
    }
    const mapIterativeContent = (sheetName) => {
      return findSheet(sheetName)?.map((row) => {
        const type = row.values[0]?.formattedValue
        return {
          type: type,
          content: row.values[1]?.formattedValue,
          alt: type === 'image' ? row.values[2]?.formattedValue : undefined,
          metric: sheetName === 'decades_content' ? row.values[2]?.formattedValue : undefined,
        }
      })
    }
    const fixedContent = Object.fromEntries(
      findSheet('fixed_content').map((row) => [
        row.values[0]?.formattedValue,
        row.values[1]?.formattedValue,
      ])
    )
    const mapData = (sheetName) => {
      return findSheet(sheetName)?.map((row) => {
        return {
          year: row.values[0]?.formattedValue,
          month: row.values[1]?.formattedValue,
          region: row.values[3]?.formattedValue,
          value: row.values[2]?.formattedValue,
        }
      })
    }
    fs.writeFileSync('src/data/fixed_content.json', JSON.stringify(fixedContent, null, 2))
    fs.writeFileSync(
      'src/data/EEI_content.json',
      JSON.stringify(mapIterativeContent('EEI_content'), null, 2)
    )
    fs.writeFileSync(
      'src/data/STC_content.json',
      JSON.stringify(mapIterativeContent('STC_content'), null, 2)
    )
    fs.writeFileSync(
      'src/data/UWI_content.json',
      JSON.stringify(mapIterativeContent('UWI_content'), null, 2)
    )
    fs.writeFileSync(
      'src/data/decades_content.json',
      JSON.stringify(mapIterativeContent('decades_content'), null, 2)
    )
    fs.writeFileSync(
      'src/data/about_the_metrics.json',
      JSON.stringify(mapIterativeContent('about_the_metrics'), null, 2)
    )

    fs.writeFileSync('src/data/EEI_data.json', JSON.stringify(mapData('EEI_data'), null, 2))
    fs.writeFileSync('src/data/STC_data.json', JSON.stringify(mapData('STC_data'), null, 2))
    fs.writeFileSync('src/data/UWI_data.json', JSON.stringify(mapData('UWI_data'), null, 2))
    // fs.writeFileSync('src/data/STC_data.json', JSON.stringify(mapData('STC_data'), null, 2))
    // fs.writeFileSync('src/data/UWI_data.json', JSON.stringify(mapData('UWI_data'), null, 2))
  })
