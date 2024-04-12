import data from '../../data/data.json'
import { OverviewCard, OverviewTodayCard } from './OverviewCard'

const convertNumberToK = (number) => {
  if (number >= 10000 && number < 1000000) {
    return (number / 1000) + 'K'; // convert to K for number from > 1000 < 1 million 
  } else if (number > 1000000) {
    return (number / 1000000) + 'M'; // convert to M for number from > 1 million 
  } else if (number < 10000) {
    return number; // if value < 1000, nothing to do
  }
}


export const OverviewContainer = () => {
  return (
    <section className="bg-white dark:bg-very-dark-blue p-6 md:flex md:flex-wrap gap-4">
      {
        data['overview'].map((item) =>
          <OverviewCard
            key={item.id}
            network={item.network}
            user={item.user}
            audience={convertNumberToK(item.audience)}
            audienceType={item.audienceType}
            isUp={item.isUp}
            today={item.today}
          />
        )
      }
    </section>
  )
}


export const OverviewTodayContainer = () => {
  return (
    <section className="bg-white dark:bg-very-dark-blue p-6 pt-0">
      <h2 className="text-dark-grayish-blue dark:text-white text-2xl font-bold mb-4">Overview - Today</h2>
      <div className="md:flex md:flex-wrap gap-4">
        {
          data['overview-today'].map((item) =>
            <OverviewTodayCard
              key={item.id}
              network={item.network}
              stats={convertNumberToK(item.stats)}
              statsType={item.statsType}
              isUp={item.isUp}
              porcentage={item.porcentage}
            />
          )
        }
      </div>
    </section>
  )
}
