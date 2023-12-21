
const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.postimg.cc/bvf8mKBY/blog.png" className="w-full rounded-xl" />
                <div className="absolute h-full rounded-xl flex items-center left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h1 className='text-6xl font-bold'>Let's Checkout Our Blogs</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis eveniet nostrum atque eligendi obcaecati modi quia doloribus dicta natus voluptatem.</p>
                        <div>
                            <button className="btn btn-secondary mr-3">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Blog</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;