import { Fragment } from "react"
import PropTypes from "prop-types"
import "../PopularPostCard/style.scss"
import { NavLink } from "react-router-dom"
import { ENDPOINT, trueDate } from "../../../constants/index"

const PopularPostsCard = ({title, description, createdAt, user, photo, _id}) => {
  return (
    <Fragment>
      <NavLink to={`blogs?${_id}`} className="card__box">
        <div className="card__img__box">
          <img src={`${ENDPOINT}upload/${photo?._id}.jpg`} alt="" />
        </div>
        <div className="card__contents__box"> 
          <p className="card__cread__info">By <span>{user?.first_name} {user?.last_name}</span> { trueDate(createdAt) } </p>
          <h3 className="card__title">{title}</h3>
          <p className="card__description">{description}</p>
        </div>
      </NavLink>
    </Fragment>
  )
}

PopularPostsCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string, 
  createdAt: PropTypes.string, 
  user: PropTypes.object, 
  photo: PropTypes.object, 
  _id: PropTypes.string

}

export default PopularPostsCard