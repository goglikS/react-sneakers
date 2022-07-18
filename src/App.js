

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png"/>
          <div>
            <h3>Goglik's Sneakers</h3>
            <p className="opacity-5">All for YOU</p>
          </div>
        </div>

       
        
        <ul className="d-flex">
          <li className="mr-30">
          <img width={18} height={18} src="/img/card.svg"/>
            <span>1300$</span>
          </li>
          <li>
          <img width={18} height={18} src="/img/user.svg"/>

          </li>
        </ul>
    
      </header>
      <div className="content p-40">
        <h1 className="mb-40">All Products</h1>
       <div className="d-flex">
       <div className="card">
        <img  width={133} height={112} src="/img/shop/1.png"/>

          <h5>Мale Sneakers Nike Blazer Mid Suede</h5>
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
        <div className="card">
        <img  width={133} height={112} src="/img/shop/2.jpg"/>

          <h5>Мale Sneakers Nike Blazer Mid Suede</h5>
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
        <div className="card">
        <img  width={133} height={112} src="/img/shop/3.jpg"/>

          <h5>Мale Sneakers Nike Blazer Mid Suede</h5>
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
        <div className="card">
        <img  width={133} height={112} src="/img/shop/4.jpg"/>

          <h5>Мale Sneakers Nike Blazer Mid Suede</h5>
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
        
       </div>
      </div>
    </div>
    
  );
}

export default App;
