import { useState } from "react";

import images from "../../helpers/images";

let imgs = [
    images.business_1,
    images.business_2,
    images.business_3,
    images.business_4
];


let num = 0;

export default function HeaderImage() {
    const [imgSrc, setImgSrc] = useState(imgs[num]);

    setTimeout(() => {

        if (num >= imgs.length - 1) {
            num = 0;
        } else {
            num++;
        }
        setImgSrc(imgs[num])
    }, 2000)



    console.log('HeaderImage src', imgSrc)
    return (
        <img src={imgSrc} className="absolute top-0 left-0 h-full w-full -z-50 brightness-50" />
    )
}



