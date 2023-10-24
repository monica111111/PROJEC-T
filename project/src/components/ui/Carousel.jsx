import { useState } from "react"
import "./carousel.css"

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const items = [
        'https://images.livemint.com/img/2022/11/06/1600x900/whatsapp_1667730553959_1667730554289_1667730554289.JPG',
        'https://s0.rbk.ru/v6_top_pics/media/img/6/30/756661664036306.jpg',
        'https://www.popsci.com/uploads/2023/03/07/why-you-should-set-up-whatsapp-web.jpg?auto=webp&width=1440&height=810',
    ]

    const prevSlide = () => {
        setCurrentIndex((prevSlide) => prevSlide === 0 ? items.length - 1 : prevSlide - 1)
    }
    const nextSlide = () => {
        setCurrentIndex((prevSlide) => prevSlide === items.length - 1 ? 0 : prevSlide + 1 )
    }
    return (
        <div className="carousel">
            <div onClick={prevSlide} className="prev-button">
                
            </div>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                >
                    <img src={item} alt="" />
                
                </div>
            ))}
            <div onClick={nextSlide} className="next-button">
                
            </div>
        </div>
    )
}