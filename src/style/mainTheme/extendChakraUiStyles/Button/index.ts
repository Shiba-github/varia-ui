export const buttonStyle = {
    Button: {
        // 1. We can update the base styles
        baseStyle: {
            fontWeight: 'bold', // Normally, it is "semibold"
        },
        // 2. We can add a new button size or extend existing
        sizes: {
            xl: {
                h: '56px',
                fontSize: 'lg',
                px: '32px',
            },
        },
        // 3. We can add a new visual variant
        variants: {
            'with-shadow': {
                bg: 'red.400',
                boxShadow: '0 0 2px 2px #efdfde',
            },
            // 4. We can override existing variants
            bg: 'red.300',
            // 5. We can add responsive variants
            base: {
                bg: 'yellow.500',
                fontSize: 'md',
            },
            sm: {
                bg: 'teal.500',
                fontSize: 'lg',
            },
            md: {
                bg: 'orange.500',
                fontSize: 'xl',
            },
        },
        // 6. We can overwrite defaultProps
        defaultProps: {
            size: 'lg', // default is md
            variant: 'sm', // default is solid
            colorScheme: 'green', // default is gray
        },
    },
}
