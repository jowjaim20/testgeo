

export const createField = (key, required = true, rest) => ({
    key: key,
    required: required,
    ...rest,
})
