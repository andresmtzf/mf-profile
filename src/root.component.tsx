import CardUser from './components/CardUser'

export default function Root(props) {
  return (
    <>
      {props.name} is mounted!
      <section>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <div className=''>
            <CardUser></CardUser>
          </div>
        </div>
      </section>
    </>
  )
}
