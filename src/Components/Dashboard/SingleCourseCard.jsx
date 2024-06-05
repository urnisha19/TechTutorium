import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleCourseCard = ({ course }) => {
  const {_id, courseTitle, category, level, description, duration, price, image_url } = course;
 

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{courseTitle}</h2>
        <h3 className="text-xl font-semibold">{category}</h3>
        <h3 className="text-xl font-semibold">{level}</h3>
        <h3 className="text-xl font-semibold">{price}</h3>
        <h3 className="text-xl font-semibold">{duration}</h3>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link to={`/course/${_id}`}>See details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCourseCard;