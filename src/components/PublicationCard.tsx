import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "#components/ui/card";
import {Link} from "react-router-dom";
import {Button} from "#components/ui/button";
import * as React from "react";

function PublicationCard({image, imageAltText, title, description, href}: {
    image: Picture, imageAltText?: string, title: string,
    description?: React.ReactNode,
    href?: string
}) {
    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="relative w-full h-90 md:h-120 lg:h-90 overflow-hidden">
                <picture className="block w-full h-full">
                    <source
                        type="image/webp"
                        src={image.sources.webp}
                    />

                    <img
                        alt={imageAltText}
                        src={image.img.src}
                        srcSet={image.sources.jpg}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                    />
                </picture>
                <div className="absolute inset-0 bg-black/10 pointer-events-none"/>
            </div>
            <CardHeader className="grow">
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardFooter>
                {href !== undefined ? <Link to={href} target="_blank" className="w-full"><Button className="w-full">View
                        publication</Button></Link>
                    : <Button className="w-full" disabled={true}>Not available</Button>}
            </CardFooter>
        </Card>
    )
}

export default PublicationCard;