import "./gallery.css"

export default function Gallery() {
    const galleryItems = [
        'https://instaguru.online/wp-content/uploads/2021/09/ustanovka-staroj-versii.jpg',
        'https://filearchive.cnews.ru/img/news/2021/08/12/wapp600.jpg',
        'https://filearchive.cnews.ru/img/news/2021/08/12/wapp600.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZIqWEnJ4mZXTm7CTgLT9giwKbk-LIPpzu6cHi1g9St3i7VIOHUOJN9WRRHhKZI2FB-ZI&usqp=CAU',
        'https://filearchive.cnews.ru/img/news/2019/09/30/wh600.jpg',
        'https://akket.com/wp-content/uploads/2022/02/WhatsApp-s-1-marta-perestanet-zapuskatsya-na-Android-i-iOS-3.jpg',

    ]
    return (
        <div className="container">
            <h2>Image Gallery</h2>
            <div className="gallery-wrapper">
                {
                    galleryItems.map((item) => {
                       return (<img className="gallery-item" src={item} />)
                    })
                }
            </div>
        </div>
    )
}