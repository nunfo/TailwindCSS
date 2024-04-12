import facebookLogo from '../assets/images/icon-facebook.svg'
import twitterLogo from '../assets/images/icon-twitter.svg'
import instagramLogo from '../assets/images/icon-instagram.svg'
import youtubeLogo from '../assets/images/icon-youtube.svg'
import iconUp from '../assets/images/icon-up.svg'
import iconDown from '../assets/images/icon-down.svg'

const networkLogos = {
  facebook: facebookLogo,
  twitter: twitterLogo,
  instagram: instagramLogo,
  youtube: youtubeLogo
}

const networkColors = {
  facebook: "bg-facebook",
  twitter: "bg-twitter",
  instagram: "bg-instagram-gradient",
  youtube: "bg-youtube"
}

export const OverviewCard = ({ network, user, audience, audienceType, isUp, today }) => {
  return (
    <article className={`md:w-1/2-g-4 xl:w-[calc(25%-16px)] bg-light-grayish-blue dark:bg-dark-desaturated-blue rounded-md text-center max-w-[500px] mb-5 mx-auto overflow-hidden hover:brightness-95 dark:hover:brightness-125 cursor-pointer`}>
      <div className={`${networkColors[network]} h-[4px] mb-8`}></div>
      <div className="flex items-center place-content-center gap-2 mb-6">
        <img src={networkLogos[network]} alt={`logo ${network}`} />
        <p className="text-dark-grayish-blue dark:text-desaturated-blue text-xs font-bold">{user}</p>
      </div>
      <p className="text-very-dark-blue dark:text-white text-5xl font-bold mt-2">{audience}</p>
      <p className="uppercase text-dark-grayish-blue dark:text-desaturated-blue text-xs tracking-[5px] mt-2 mb-6">{audienceType}</p>
      <div className="flex items-center place-content-center gap-1 mb-6">
        <img src={isUp ? iconUp : iconDown} />
        <p className={`${isUp ? 'text-lime-green' : 'text-bright-red'} text-xs font-bold`}>{today} Today</p>
      </div>
    </article>
  )
}

export const OverviewTodayCard = ({ network, stats, statsType, isUp, porcentage }) => {
  return (
    <article className={`md:w-[calc(50%-16px)] xl:w-[calc(25%-16px)] bg-light-grayish-blue dark:bg-dark-desaturated-blue rounded-md text-center max-w-[500px] mb-5 mx-auto hover:brightness-95 dark:hover:brightness-125 cursor-pointer p-6`}>
      <div className="flex items-center justify-between gap-2 mb-4">
        <p className="text-dark-grayish-blue dark:text-desaturated-blue text-sm font-bold">{statsType}</p>
        <img src={networkLogos[network]} alt={`logo ${network}`} />
      </div>
      <div className="flex justify-between">
        <p className="text-very-dark-blue dark:text-white text-3xl font-bold">{stats}</p>
        <div className='flex items-center gap-0.5'>
          <img src={isUp ? iconUp : iconDown} />
          <p className={`${isUp ? 'text-lime-green' : 'text-bright-red'} text-xs font-bold`}>{porcentage} %</p>
        </div>
      </div>
    </article>
  )
}
