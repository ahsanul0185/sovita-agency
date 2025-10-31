import Image from "next/image"

export default function Banner_image({ image_url, image_alt, ...props}) {
    return <Image className="mx-auto" {...props} src={image_url} width={'100%'} height={'100%'} alt={image_alt} />;
}