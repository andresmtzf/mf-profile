import Item from './components/Item'
import './styles/styles.css'

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
          <div className='second-section'>
            <Item></Item>
            <Item></Item>
          </div>
        </div>
      </section>
    </>
  )
}
