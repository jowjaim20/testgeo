import googleChromeMenu from "@public/images/blog/googleChrome/googleChromeMenu.png";
import React from "react";


export function ImageSection(props) {
    const {src, description, alt, imgTitle} = props;

    return (
        <div className={'image-section'}>
                <p className='mb-4'>
                    {description}
                </p>
                <div className='flex justify-center'>
                    <img
                        src={src}
                        alt={alt}
                        title={imgTitle}
                    />
                </div>
        </div>
    )
}