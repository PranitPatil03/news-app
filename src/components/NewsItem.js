import React, { Component } from 'react'

export class NewsItem extends Component {

    constructor() {
        super();
        console.log()
    }

    render() {

        let { title, description, imgUrl, newsUrl, author, date, source } = this.props

        return (
            <div className="container">
                <div className="card">
                <div style={{display: 'flex',justifyContent: 'flex-end',position: 'absolute',right: '0'}}></div>
                    <span class="position-absolute top-0 translate-middle badge rounded-pill bg-secondary" style={{left:"90%",zIndex:"1"}}>
                        {source}
                    </span>
                    <img src={!imgUrl ? "https://www.reuters.com/resizer/GIDjJE7brmF6FuqAiT38D9ILOyk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/N2VZ77IOWRLRPN4S6Q5RJHJPHY.jpg" : imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p class="card-text"><small class="text-muted">by {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem

