import "../styles/styles.css";

const Item = () => {
  return (
    <>
      <div style={{ width: "auto" }}>
        <div className="card">
          <div className="card__background"></div>
          <div className="card__details">
            <div className="card__activity">
              <p className="card__title">Producto</p>
            </div>
            <div className="card__time">
              <p className="card__hours">00.00</p>
              <p className="card__previous">Previous - 00.00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
