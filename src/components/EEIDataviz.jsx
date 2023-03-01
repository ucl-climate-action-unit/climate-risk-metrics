export function EEIDataviz({ content }) {
  return (
    <div>
      {content === 'IMBALANCE_REGION' && (
        <div>
          <br />
          <br />
          imbalance region viz
          <br />
          <br />
        </div>
      )}
      {content === 'IMBALANCE_DECADE' && (
        <div>
          <br />
          <br />
          imbalance decade viz
          <br />
          <br />
        </div>
      )}
    </div>
  )
}
