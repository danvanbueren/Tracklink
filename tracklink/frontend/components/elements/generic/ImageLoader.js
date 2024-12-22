import React from "react";
import { Box, Skeleton } from "@mui/material";

export default function ImageLoader({
                                        src = [
                                            "https://picsum.photos/400",
                                            "https://picsum.photos/4000",
                                        ],
                                        title = "Image",
                                        width = "1280px",
                                        height = "720px",
                                        objectFit = "cover"
                                    }) {

    const [loadedSrc, setLoadedSrc] = React.useState(null);
    const [currentResolution, setCurrentResolution] = React.useState(0);

    React.useEffect(() => {
        let isMounted = true;

        const loadImage = async (url, onLoad) => {
            const img = new Image();
            img.src = url;

            img.onload = () => {
                if (isMounted) {
                    const resolution = img.width * img.height;
                    onLoad(url, resolution);
                }
            };
        };

        const sources = Array.isArray(src) ? src : [src];

        sources.forEach((source) => {
            loadImage(source, (url, resolution) => {
                if (isMounted) {
                    if (resolution > currentResolution) {
                        setCurrentResolution(resolution);
                        setLoadedSrc(url);
                    }
                }
            });
        });

        return () => {
            isMounted = false;
        };
    }, [src, currentResolution]);

    return (
        <Box
            sx={{
                width: width,
                height: height,
                overflow: "hidden",
                position: "relative",
                display: "inline-block"
            }}
        >
            {loadedSrc ? (
                <img
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: objectFit,
                    }}
                    alt={title}
                    src={loadedSrc}
                />
            ) : (
                <Skeleton
                    variant="rectangular"
                    animation="wave"
                    sx={{
                        width: "100%",
                        height: "100%"
                    }}
                />
            )}
        </Box>
    );
}