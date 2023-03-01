export function Wrapper({ children, classes }) {
  return (
    <div className={classes}>
      <div className="lg:max-w-[1440px] lg:px-8 md:px-4 sm:px-2 m-auto">{children}</div>
    </div>
  )
}
