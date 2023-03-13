import EEI_Global from '../data/EEI_Global.json'
import STC_Global from '../data/STC_Global.json'
import UWI_Global from '../data/UWI_Global.json'
import STC_Australia from '../data/STC_Australia.json'
import STC_East_Asia from '../data/STC_East-Asia.json'
import STC_Europe from '../data/STC_Europe.json'
import STC_Russia from '../data/STC_Russia.json'
import STC_Usa from '../data/STC_USA.json'
import UWI_Australia from '../data/UWI_Australia.json'
import UWI_East_Asia from '../data/UWI_East-Asia.json'
import UWI_Europe from '../data/UWI_Europe.json'
import UWI_Russia from '../data/UWI_Russia.json'
import UWI_Usa from '../data/UWI_USA.json'

import { round } from 'lodash'
const data = {
  EEI: [EEI_Global],
  STC: [STC_Global, STC_Australia, STC_East_Asia, STC_Europe, STC_Russia, STC_Usa],
  UWI: [UWI_Global, UWI_Australia, UWI_East_Asia, UWI_Europe, UWI_Russia, UWI_Usa],
}

export const formatValue = (value, metricId) => round(parseFloat(value), metricId === 'UWI' ? 1 : 2)

const computeCurrent = (prev, current) => {
  return +prev.year >= +current.year && +prev.month > +current.month ? prev : current
}

export const computeGlobalValueByYear = (year, metricId) => {
  return formatValue(
    data[metricId][0]
      .filter((d) => +d.year === +year)
      .reduce((prev, current) => (+prev.month > +current.month ? prev : current)).value,
    metricId
  )
}
export const computeCurrentRegionValues = (metricId) => {}
export const computeYearValues = (metricId) => {
  let decemberValues = []
  data[metricId].forEach((datum) => {
    const lastValue = data[metricId][0]
      .filter((d) => d.year === datum.year)
      .reduce((prev, current) => {
        return +prev.month > +current.month ? prev : current
      })
    if (!decemberValues.find((e) => e.year === datum.year)) {
      decemberValues.push({ ...lastValue, value: formatValue(lastValue.value, metricId) })
    }
  })
  return decemberValues
}

export const computeCurrentGlobalValue = (metricId) => {
  const currentGlobalDatum = data[metricId][0].reduce((prev, current) =>
    computeCurrent(prev, current)
  )
  return formatValue(currentGlobalDatum.value, metricId)
}
