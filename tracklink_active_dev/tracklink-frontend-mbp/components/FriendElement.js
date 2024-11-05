import * as React from "react";

import {Avatar, Box, Button, Tooltip} from "@mui/material";
import {useRightToggle} from "@/context/contextToggleVerboseFriends";
import {useNavigation} from "@/context/contextNavigation";

export default function FriendElement({ name, imagePath, size }) {

    // Routing
    const { navigateTo, isNavigating } = useNavigation();
    const handleNavigate = (destination) => {
        if (isNavigating) {
            return;
        }
        navigateTo(destination);
    };

    // Toggle drawer
    const { isToggled = true } = useRightToggle();

    // Tooltip opacity
    const tooltipOpacity = isToggled ? 0 : 1;


    if (size === undefined)
        size = 55;

    return (
        <>
            <Box>
                <Tooltip
                    title={name}
                    placement="left"
                    PopperProps={{
                        sx: {
                            '&[data-popper-placement]': {
                                opacity: tooltipOpacity,
                            },
                        },
                    }}
                    arrow // Optional: adds an arrow to the tooltip
                >
                    <Button
                        color='white'
                        onClick={() => handleNavigate('/user')}
                    >
                        <Avatar
                            alt={name}
                            src={String(imagePath)}
                            sx={{ width: size, height: size }}
                        />
                    </Button>
                </Tooltip>
            </Box>
        </>
    )
}