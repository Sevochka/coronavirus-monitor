import * as React from 'react';

type Props = {
  isCountryPage: boolean,
  colorClasses: string[],
  stats: number[],
  titles: string[],
  properties:string[],
  handleStatPartClicked: (propertyName: string) => void;
};

const MainStatCard: React.FC<Props> = (
  {
    isCountryPage,
    colorClasses,
    stats, titles, properties,
    handleStatPartClicked
  }: Props) => {
  const numberWithCommas = (x: number): string =>
    x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const coloredSpanClassName = `stat-part__number ${colorClasses[0]}`;
  const coloredBtnClassName = `stat-part__number btn ${colorClasses[1]}`;

  return (
    <section className="main-stat__card">
      <div className="main-stat__part stat-part">
        {!isCountryPage ? (
          <button
            type="button"
            className={coloredBtnClassName}
            onClick={() => handleStatPartClicked(properties[0])}
          >
            {numberWithCommas(stats[0])}
          </button>
        ) : (
          <span
            className={coloredSpanClassName}
          >
            {numberWithCommas(stats[0])}
          </span>
        )}
        <span className="stat-part__title">{titles[0]}</span>
      </div>
      <div className="main-stat__part stat-part">
        <span className="stat-part__number">
          {!isCountryPage ? (
            <button
              type="button"
              className={coloredBtnClassName}
              onClick={() => handleStatPartClicked(properties[1])}
            >
              {numberWithCommas(stats[1])}
            </button>
          ) : (
            <span
              className={coloredSpanClassName}
            >
              {numberWithCommas(stats[1])}
            </span>
          )}
        </span>
        <span className="stat-part__title">{titles[1]}</span>
      </div>
    </section>
  );
};

export default MainStatCard;