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
export const MENU_SECTIONS = [
  { id: 'intro', label: 'Overview' },
  { id: 'EEI', label: EEI_content[1].content },
  { id: 'STC', label: STC_content[1].content },
  { id: 'UWI', label: UWI_content[1].content },
  { id: 'decades_content', label: decades_content[1].content },
  { id: 'about_the_metrics', label: about_the_metrics[1].content },
]
export const SECTIONS = [
  { id: 'EEI', content: EEI_content },
  { id: 'STC', content: STC_content },
  { id: 'UWI', content: UWI_content },
  { id: 'decades_content', content: decades_content },
  { id: 'about_the_metrics', content: about_the_metrics },
]
