import { EEISection, Wrapper } from '.'

export function DeepeningSection({}) {
  return (
    <Wrapper classes="bg-light pt-20">
      <div className="flex lg:gap-6 pt-14">
        <div className="flex-1 w-1/3">
          <nav class="navbar navbar-inverse navbar-fixed-top">
            <ul class="nav navbar-nav">
              <li>
                <a href="#section1">Section 1</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex-initial w-2/3" dataSpy="scroll" dataTarget=".navbar" dataOfsett="50">
          <EEISection />
        </div>
      </div>
    </Wrapper>
  )
}
