function Drawer(){
    return(
        <div className="overlay">
        <div className="drawer">
          <h2 className="mb-30 d-flex justify-between cu-p">Basket<img className="cartItemRemove cu-p" src="/img/remove.svg"/>
          </h2>
          <div className="items">
         
         
         
          <div className="cartItem d-flex align-center mb-20">
            <div style={{ backgroundImage : 'url(/img/shop/1.png)' }}
             className="cartItemImg">
            </div>
            
            <div className="mr-20">
              <p className="mb-5"> Male Sneakers <br/> Nike Blazer Mid Suede</p>
              <b>59.99$</b>
            </div>
            <img className="cartItemRemove" src="/img/remove.svg"/>
            

          </div>
          </div>
          
          <div className="cartTotalBlock">
            <ul>
            <li>
              <span>Total:</span>
              <div></div>
              <b>59.99$</b>
            </li>
            <li>
              <span>Tax:</span>
              <div></div>
              <b>5$</b>
            </li>
            </ul>
            <button className="greenButton">Buy<img src="/img/arrowR.svg"/></button>
          </div>
        </div>
        </div>
    );
}

export default Drawer;