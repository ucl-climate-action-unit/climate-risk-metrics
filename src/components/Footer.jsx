import { Wrapper } from '.'
import { Data4ChangeLOGO, UCLClimateActionUnitLOGO } from '../icons'
import dataFixed from '../data/fixed_content.json'

export function Footer() {
  const { foooter_title, footer_body, credits } = dataFixed

  return (
    <Wrapper classes="bg-dark pt-20 text-light pb-20">
      <div className="flex justify-end lg:gap-6">
        <div className="md:w-2/3">
          <div className="mb-64 max-w-[790px]">
            <h1 className='font-bold text-5xl mb-11 text-light"'>{foooter_title}</h1>
            <div>{footer_body}</div>
          </div>
          <div className="flex items-center">
            <UCLClimateActionUnitLOGO />
            <Data4ChangeLOGO />
          </div>
          <p>{credits}</p>
        </div>
      </div>
    </Wrapper>
  )
}
