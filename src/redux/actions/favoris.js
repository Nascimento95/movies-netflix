export const putFavorisFunc = (dataState) => dispatch => {
    console.log('je suis dan la funct action')
    dispatch({
        type:'PUTFAVORIS',
        payload : dataState
    })
}