import axios from 'axios'
import fs from 'fs'

const sheetId = {
  EEI: '16knUV_0DJYuOg5RCC2l2kj2ERrtdgs6zYnubjwjO8WY',
  STC: '100JuEh4Jl6a1Rzyd6ENN8gypdqnit0b4YvX3yS6dsfs',
  UWI: '1EN1n8ZpNSep5UiNg8w7hsNauOnMl93CJ-NgFX-VBQqo',
}
const apiKey = 'AIzaSyCovL3X7sblbLZ4LQA7V_nI7Kd41rXNyco'

const url = (id) =>
  `https://sheets.googleapis.com/v4/spreadsheets/${sheetId[id]}?includeGridData=true&key=${apiKey}`

axios
  .get(url('EEI'))
  .then((res) => res.data)
  .then((data) => {
    const json = data.sheets[0].data[0].rowData
      .filter((row) => row.values.some((r) => r.formattedValue))
      .map((row) => {
        return {
          year: row.values[0]?.formattedValue,
          month: row.values[1]?.formattedValue,
          value: row.values[3]?.formattedValue,
        }
      })
    fs.writeFileSync('src/data/EEI_Global.json', JSON.stringify(json, null, 2))
  })
axios
  .get(url('STC'))
  .then((res) => res.data)
  .then((data) => {
    data.sheets.forEach((sheet) => {
      const json = sheet.data[0].rowData
        .filter((row) => row.values.some((r) => r.formattedValue))
        .map((row) => {
          return {
            year: row.values[0]?.formattedValue,
            month: row.values[1]?.formattedValue,
            value: row.values[4]?.formattedValue,
            total: row.values[3]?.formattedValue,
          }
        })
      fs.writeFileSync(`src/data/STC_${sheet.properties.title}.json`, JSON.stringify(json, null, 2))
    })
  })
axios
  .get(url('UWI'))
  .then((res) => res.data)
  .then((data) => {
    data.sheets.forEach((sheet) => {
      const json = sheet.data[0].rowData
        .filter((row) => row.values.some((r) => r.formattedValue))
        .map((row) => {
          return {
            year: row.values[0]?.formattedValue,
            value: row.values[3]?.formattedValue,
          }
        })
      fs.writeFileSync(`src/data/UWI_${sheet.properties.title}.json`, JSON.stringify(json, null, 2))
    })
  })
