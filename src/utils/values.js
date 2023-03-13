import EEI_data from '../data/EEI_data.json'
import STC_data from '../data/STC_data.json'
import UWI_data from '../data/UWI_data.json'
import { round } from 'lodash'
const data = { EEI: EEI_data, STC: STC_data, UWI: UWI_data }

const filterGlobal = (data) => {
  return data.filter((d) => d.region === 'global')
}

export const formatValue = (value, metricId) => round(parseFloat(value), metricId === 'UWI' ? 1 : 2)

const computeCurrent = (prev, current) => {
  return +prev.year >= +current.year && +prev.month > +current.month ? prev : current
}

export const computeGlobalValueByYear = (year, metricId) => {
  return formatValue(
    filterGlobal(data[metricId])
      .filter((d) => +d.year === +year)
      .reduce((prev, current) => (+prev.month > +current.month ? prev : current)).value,
    metricId
  )
}
export const computeCurrentRegionValues = (metricId) => {}
export const computeYearValues = (metricId) => {
  let decemberValues = []
  data[metricId].forEach((datum) => {
    const lastValue = data[metricId]
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
  const currentGlobalDatum = filterGlobal(data[metricId]).reduce((prev, current) =>
    computeCurrent(prev, current)
  )
  return formatValue(currentGlobalDatum.value, metricId)
}
