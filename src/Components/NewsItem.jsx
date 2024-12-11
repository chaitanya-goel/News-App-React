import React from 'react'
import image from '../Assets/news .jpeg'

const NewsItem = ({title,description,src,url}) => {
  return (

    <div className="card bg-dark text-light mt-3 d-inline-block my-1 mx-1 px-2 py-2" style={{maxWidth:"345px"}}>
  <img src={src?src:image} style={{height:"200px", width:"330px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"News is Not Accurate on Current Event. It is Wrong Information About News"}</p>
    <a href={url } className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
  </div>
</div>

  )
}

export default NewsItem
