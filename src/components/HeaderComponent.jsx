import "../style/headerComponents.css";

export const HeaderContainer = (props) => {
  return (
    <div className="headerWrapper">
      <div className="headerWrapper__title title">Курс валют:</div>
      <div className="headerWrapper__headerBlock headerBlock">
        {props.rates?.map((rate, id) => {
          return (
            <div key={id} className="elements">
              <div className="elements__text"> {rate.ccy}</div>
              <div className="elements__text">
                {Math.round(rate.buy * 100) / 100}
              </div>
              <div className="elements__text">/</div>
              <div className="elements__text">
                {Math.round(rate.sale * 100) / 100}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
