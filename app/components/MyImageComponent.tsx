"use client";
import React from "react";
import Image, { ImageProps } from "next/image";
export type MyCustomImageProps = Omit<ImageProps, "loader">;

const MyCustomImage = (props: MyCustomImageProps) => {
    const src = props.src;
    return (
        <Image
            {...props}
            alt={props.alt}
            width={100}
            height={100}
            loader={({ src, width, quality }) => {
                const url = new URL(src);
                url.searchParams.append("src", src);
                url.searchParams.append("w", width + "");
                url.searchParams.append("q", quality + "");
                return url.toString();
            }}
        />
    );
};

export default MyCustomImage;
