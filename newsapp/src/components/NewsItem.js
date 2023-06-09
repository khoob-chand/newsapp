import React, { Component } from 'react'

export class NewsItem extends Component {


  
  render() {
    let {title ,description ,url  ,link ,author ,date}=this.props;
    

    
    return (
      <div className="card" style={{ width: '18rem', height: '26rem'}}>
      <img src={url} 
          className="card-img-top" alt="image load"/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={link} target="_blank" rel="noreferrer"  className="btn btn-primary">Read More ....</a>
        <p className="card-text"><small className="text-body-secondary">{author} and published at {new Date(date).toGMTString()}</small></p>
      </div>
    </div>
    )
  }
}

export default NewsItem
