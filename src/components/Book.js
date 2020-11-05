import React from 'react'
import './Book.css'
export default function Book(props) {
    console.log('props :>> ', props);
    const {title, src, author} = props;
    const clickHandler = (e) => {
        // e.target.disabled == true
    }
    return (
        <div className="book">
            <div className="image-section">
                <img src={src ? src : "https://images-eu.ssl-images-amazon.com/images/I/61r-WomIz0L._AC_UL200_SR200,200_.jpg"} alt=""/>
            </div>
            <div className="text-section">
                <div className="heading">{title}</div>
                <div className="writer">{author}</div>
                <span>paperback</span> <br />
                <button type="submit" onClick={clickHandler}> Add to cart </button>
            </div>
        </div>
    )
}
