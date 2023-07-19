import '../styles/styles.css'

const CardUser = () => {
  return (
    <>
      <section className='first-section'>
        <div className='main-card'>
          <div className='main-card__user'>
            <div>
              <p className='main-card__title'>Lorem ipsum</p>
              <p className='main-card__name'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, consequatur sunt,
                doloribus commodi saepe, eum itaque atque dicta
              </p>
            </div>
          </div>

          <div className='main-card__dates'>
            <p id='daily' className='main-card__frequency main-card__frequency--active'>
              Lorem ipsum
            </p>
            <p id='weekly' className='main-card__frequency'>
              Lorem ipsum
            </p>
            <p id='monthly' className='main-card__frequency'>
              Lorem ipsum
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default CardUser
