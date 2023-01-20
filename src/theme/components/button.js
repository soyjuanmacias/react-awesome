import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const accessibleColorMap = {
    yellow: {
        bg: "yellow.400",
        color: "black",
        hoverBg: "yellow.500",
        activeBg: "yellow.600",
    },
    cyan: {
        bg: "cyan.400",
        color: "black",
        hoverBg: "cyan.500",
        activeBg: "cyan.600",
    },
};

const baseStyle = defineStyle({
    borderRadius: "4px",
    fontWeight: "normal",
    _active: {
        // fontWeight: "bold",
    },
    _disabled: {
        cursor: "not-allowed",
        borderColor: "gray.500",
    },
});

const variantCustom = defineStyle((props) => {
    const { colorScheme: c } = props;

    const {
        color = "white",
        hoverBg = `${c}.7000`,
        activeBg = `${c}.1000`,
    } = accessibleColorMap[c] ?? {};

    return {
        bg: "primary.1000",
        color: mode(color, `white`)(props),
        _hover: {
            bg: mode(hoverBg, `${c}.300`)(props),
        },
        _disabled: {
            bg: "gray.100",
        },
        _active: {
            bg: mode(activeBg, `${c}.400`)(props),
            fontWeight: "normal",
        },
    };
});

const sizes = {};

const variants = {
    custom: variantCustom,
};

const Button = defineStyleConfig({
    baseStyle,
    sizes,
    variants,
    defaultProps: {
        size: "lg",
        colorScheme: "primary",
    },
});

export default Button;
