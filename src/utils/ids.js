import about_the_metrics from '../data/about_the_metrics.json'
import decades_content from '../data/decades_content.json'
import EEI_content from '../data/EEI_content.json'
import STC_content from '../data/STC_content.json'
import UWI_content from '../data/UWI_content.json'

export const METRIC_IDS = [
  { id: 'EEI', label: 'Imbalance' },
  { id: 'STC', label: 'Speed' },
  { id: 'UWI', label: 'Unusualness' },
]
export const SECTIONS = [
  { id: 'EEI', label: EEI_content[1].content },
  { id: 'STC', label: STC_content[1].content },
  { id: 'UWI', label: UWI_content[1].content },
  { id: 'decades_content', label: decades_content[1].content },
  { id: 'about_the_metrics', label: about_the_metrics[1].content },
]
