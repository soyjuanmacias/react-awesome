import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({
    baseStyle: {
        control: {
            // borderColor: "primary.1000",
            // bg: "primary.1000",
            // _checked: {
            //     bg: "primary.1000",
            // },
        },
    },
});

const Checkbox = defineStyleConfig({
    baseStyle,
    defaultProps: {
        colorScheme: "primary",
    },
});

export default Checkbox;
