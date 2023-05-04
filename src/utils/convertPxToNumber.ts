export const convertPxtoNumber = (value: string): number | undefined => {
    if (value === undefined) return
    if (typeof value === 'string') {
        return parseInt(value.replace('px', ''))
    }
}
