
export const buyProduct = (payload) => {
    return {
        type: 'buyProduct',
        payload: {
            ...payload,
            quantity: 1
        },
    }
}

export const deleteCart = (payload) => {
    return {
        type: 'deleteCart',
        payload: payload
    }
}

export const increaseCart = (payload) => {
    return {
        type: 'increaseCart',
        payload: payload
    }
}

export const reductionCart = (payload) => {
    return {
        type: 'reductionCart',
        payload: payload
    }
}

export const searchProductText = (payload) => {
    return {
        type: 'searchProductText',
        payload: payload
    }
}

export const searchProductMax = (payload) => {
    return {
        type: 'searchProductMax',
        payload: payload
    }
}

export const searchProductMin = (payload) => {
    return {
        type: 'searchProductMin',
        payload: payload
    }
}

export const searchChangeType = (payload) => {
    return {
        type: 'searchChangeType',
        payload: payload
    }
}

export const addName = (payload) => {
    return {
        type: 'addName',
        payload: payload
    }
}

export const addImage = (payload) => {
    return {
        type: 'addImage',
        payload: payload
    }
}

export const addCost = (payload) => {
    return {
        type: 'addCost',
        payload: payload
    }
}

export const addType = (payload) => {
    return {
        type: 'addType',
        payload: payload
    }
}

export const addNewProduct = (payload) => {
    return {
        type: 'addNewProduct',
        payload: payload
    }
}

export const deleteMyProduct = (payload) => {
    return {
        type: 'deleteMyProduct',
        payload: payload
    }
}