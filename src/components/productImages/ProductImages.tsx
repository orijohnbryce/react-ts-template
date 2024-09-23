import React, { useEffect, useState } from 'react'
import { getProductImages } from '../../client/productApi';

type Props = {
    pid: number;
}

const ProductImages = (props: Props) => {
    const [images, setImages] = useState<string[]>([])

    useEffect(() => {
        getProductImages(props.pid).then((images_) => {
            setImages(images_);
        })
    }, [])

    return (
        <div>
            {images.map((im: string) => {
                return <img key={im} style={{ maxWidth: '100px' }} src={`https://orstore1.s3.amazonaws.com/${im}`} alt='product-image' />
            })}
        </div>
    )
}

export default ProductImages