import { accordionAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const custom = definePartsStyle((props) => {
    return {
        container: {
            bg: "white",
            boxShadow: '-1px 0px 40px rgb(0 0 0 / 5%)',
            borderRadius: "4",
            mb: "2",
            border: 'none',
            _dark: {
                bg: "gray.300",
            }
        },
        button: {
            bg: "white",
            borderRadius: "4",
            px:"6",
            py: "5",
            _hover: {
                bg: 'white',
            },
            _dark: {
                bg: "gray.700",
            },
            _focus: {
                color: "primary.500",
            },
        },
    };
});

const variants = {
    custom,
};

const Accordion = defineMultiStyleConfig({
    variants,
    defaultProps: {
        size: "md",
    },
});

export default Accordion;