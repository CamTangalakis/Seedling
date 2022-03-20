import { useEffect, useState } from 'react'
import './carousel.css'

const Carousel = ({components}) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const slideLength = components?.length

    let slideInterval
    let intervalTime = 10000

    const autoScroll = () => {
        slideInterval = setInterval(() => {
            setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
            console.log(currentSlide, '<<<---')
        }, intervalTime)
    }

    useEffect(() => {
        setCurrentSlide(0)
    }, [])

    useEffect(() => {
        autoScroll()
    }, [currentSlide])

    return (
        <div className='carouselContainer'>
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
