function HeroImage({src, alt}: {
    src: Picture,
    alt: string
}) {
    return (
        <div className="w-full min-w-screen flex items-center justify-center h-60 md:h-90 overflow-clip">
            <picture className="block w-full h-full">
                <source
                    type="image/webp"
                    srcSet={src.sources.webp}
                />

                <img
                    alt={alt}
                    src={src.img.src}
                    srcSet={src.sources.jpg}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                />
            </picture>
        </div>
    )
}

export default HeroImage