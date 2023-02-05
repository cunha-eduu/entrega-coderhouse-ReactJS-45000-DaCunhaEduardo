import './Banner.css'

const Banner = () => {
    return (
        <div className='banner titulo'>
            <div>
                <h1 className='banner__h1'>MedShop</h1>
            </div>
            <div>
                <h2 className='banner__h2'>El portal de Equipos Médicos más grande de Argentina</h2>
            </div>
            <img src={process.env.PUBLIC_URL+'/banner1.png'} alt="Banner MedShop" class="banner" />
        </div>
    )
}

export default Banner;