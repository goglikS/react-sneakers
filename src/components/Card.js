function Card()
{
    return (
<div className="card">
       <div className="favorite">
       <img src="/img/favorite.svg"/>
       </div>
        <img  width={133} height={112} src="/img/shop/1.png"/>
          <h5>Male Sneakers <br/> Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>PRICE:</span>
              <b>59.99$</b>
            </div>
            <button className="button">
              <img width={18} height={18} src="/img/add.svg"/>
            </button>
          </div>
</div>
);
}
export default Card;