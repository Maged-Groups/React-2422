import images from "../helpers/images";

export default function P404() {

    return (
        <div className="h-screen ">
            <img src={images.img404} alt="404" className="max-w-full max-h-full block m-auto" />
        </div>
    )
}