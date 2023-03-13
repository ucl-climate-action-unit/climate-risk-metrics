export function RegionsViz({ id }) {
  return (
    <div className="flex w-full gap-4 bg-EEI bg-opacity-10 p-6 rounded-lg lg:mb-14 mb-8">
      {/* {DECADES.map((year) => {
        const value = computeGlobalValueByYear(year, id)
        return (
          <CardMinimal
            id={id}
            key={year}
            year={year}
            value={value}
            unit={fixed_content[`card_${id}_number_detail`]}
          >
            {id === 'EEI' && <RotationChart axis={false} value={value} />}
          </CardMinimal>
        )
      })} */}
    </div>
  )
}
