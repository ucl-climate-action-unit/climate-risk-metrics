export function Wrapper({ children, classes }) {
  return (
    <div className={classes}>
      <div className="lg:max-w-[1440px] w-screen lg:px-8 md:px-4 px-2 m-auto box-border">
        {children}
      </div>
    </div>
  )
}
