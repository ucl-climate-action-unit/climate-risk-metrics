import EEI_data from '../data/EEI_data.json'
import STC_data from '../data/STC_data.json'

const filterGlobal = (data) => {
  return data.filter((d) => d.region === 'global')
}

const formatValue = (value) => parseFloat(value).toFixed(2)

const computeCurrent = (prev, current) => {
  return +prev.year >= +current.year && +prev.month > +current.month ? prev : current
}

export const computeEEIcurrentValueGlobal = () => {
  const EEICurrentGlobalData = filterGlobal(EEI_data).reduce((prev, current) =>
    computeCurrent(prev, current)
  )
  return formatValue(EEICurrentGlobalData.value)
}
export const computeSTCcurrentGlobalValue = () => {
  const STCCurrentGlobalData = filterGlobal(STC_data).reduce((prev, current) =>
    computeCurrent(prev, current)
  )
  return formatValue(STCCurrentGlobalData.value)
}
