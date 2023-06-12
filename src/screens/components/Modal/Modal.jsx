import React from 'react'
import "./Modal.css"


function Modal({title, description, image, url}) {
    return (
        <div className="modal-container">
            <div className="modal-content">
                <h2>{title}</h2>
                    <button className="btn align-right">
                        X
                    </button>
                    <img className="span2" src={require(`${image}`)} alt={title}/>
                    <p className="span2">{description}</p>
                    <a href={url} target="_blank" rel="noreferrer" >                    
                    <button className="btn">
                        Go to website
                    </button>
                    </a>
            </div>
        </div>
    )
}

export default Modal