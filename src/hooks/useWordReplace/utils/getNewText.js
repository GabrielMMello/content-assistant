const getNewText =  ({ rawText, replaceText, searchText }) => {
    if (!(replaceText && searchText)) return rawText
    return rawText.replaceAll(searchText, replaceText)
}

export { getNewText }