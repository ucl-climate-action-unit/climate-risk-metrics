export const altTextVisualizations = (id, content, number) => {
  const alt = `Metric ${id === 'EEI' ? 1 : id === 'STC' ? 2 : 3}, ${
    content[`card_${id}_inf_name`]
  }. This metric represents ${content[`card_${id}_sci_name`]}, which is currently ${
    (id === 'EEI' || id === 'STC') && number > 0 ? `+${number}` : `x${number}`
  } ${content[`card_${id}_number_detail`]}, while its natural state would be ${
    id === 'EEI' || id === 'STC' ? `0` : `1`
  } ${content[`card_${id}_number_detail`]}
    `
  return alt
}
