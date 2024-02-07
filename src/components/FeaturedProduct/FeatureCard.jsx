/* eslint-disable react/prop-types */

const FeatureCard = ({item}) => {
  return (
    <div className="card w-[300px] mx-2 bg-cyan-100 shadow-xl">
      <figure className="w-[300px] h-[200px]"><img src={import.meta.env.VITE_REACT_APP_UPLOAD_URL+item?.attributes.img1.data.attributes.url} alt={item?.attributes.title} /></figure>
      <div className="card-body">
        <h2 className="card-title">
          {item?.attributes.title}
          <div className="badge badge-secondary">FEATURED</div>
        </h2>
        <p>{item?.attributes.description.length > 25 ? item?.attributes.description.substring(0, 25).concat("...") : item?.attributes.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard