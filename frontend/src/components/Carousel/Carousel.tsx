import { useState } from 'react'
import './carousel.css'

const Carousel = ({components}) => {
    const [currentSlide, setCurrentSlide] = useState(0)

    return (
        <div className='carouselContainer'>
            <i className="far fa-arrow-circle-left arrow prev"></i>

            <i className="far fa-arrow-circle-right arrow next"></i>

            {components.map((comp, i) => {
                return (
                    <div className={i === currentSlide ? "slide current": "slide"} key={i}>
                        {i === currentSlide &&
                            <div className='slideContents'>
                                <img className='componentImage' src={comp.image} alt='project image'/>

                                <div className='componentInfo'>
                                    <p className='componentTitle'>{comp.title}</p>
                                    <p className='componentDescription'>{comp.description}</p>
                                </div>
                            </div>
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default Carousel
