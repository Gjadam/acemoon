'use client'
// React infinite logo slider
import Slider from 'react-infinite-logo-slider'

// Components
import Box from './Box';

export default function CollectionsBanner({ collections }) {
    return (
        collections.length > 2 ? (
            <div className="  mt-28 shadow-xl  rotate-1 bg-rose-500 py-5 ">
                <Slider
                    width="300px"
                    duration={30}
                    pauseOnHover={true}
                >
                    {
                        collections.map(collection => (
                            <Slider.Slide>
                                <Box key={collection._id} id={collection._id} text={collection.name} />
                            </Slider.Slide>

                        ))
                    }
                </Slider>
            </div>
        ) : null
    )
}
