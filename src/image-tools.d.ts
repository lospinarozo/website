interface Picture {
    sources: Record<string, string>;
    img: {
        src: string;
        w: number;
        h: number;
    }
}

declare module '*&imagetools' {
    const out: Picture;
    export default out;
}

declare module '*?imagetools' {
    const out: Picture;
    export default out;
}