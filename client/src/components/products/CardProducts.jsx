import productos from '../../assets/images/productos.png'

export const CardProducts = ({id, name, description, price}) => {
  return (
    <>
         <div className="col-md-4" key={id}>
              <div className="card text-center mb-4" style={{ width: "70%" }}>
                <div className="card-header">
                <img src={productos} className="card-img-top" alt="product" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">{description}</p>
                  <div className="container text-center">
                  <button type="button" className="btn btn-success"> $ {price}</button>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}
