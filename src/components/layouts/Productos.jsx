import Header from '../helpers/Header'
import data from '../../data/data.json'

const Productos = () => {
  return (
    <section>
      <Header />
      <main>
        <section className='card-container'>
          {data.map((item) => (
            <div className='card-item' key={item.id}>
              <h3>{item.name}</h3>
              <img src={item.image} />
              <h4>{item.price + '$'}</h4>
              <p>{item.type}</p>
            </div>
          ))}
        </section>
      </main>
    </section>
  )
}

export default Productos
