import { useCallback } from "react"
import { useWordReplace } from "../../hooks/useWordReplace"

const useModel = () => {
    const {
        newText,
        rawText,
        replaceText,
        searchText,
        setRawText,
        setReplaceText,
        setSearchText,
    } = useWordReplace()

    const onRawTextChange = useCallback(setRawText, [setRawText])
    const onReplaceTextChange = useCallback(setReplaceText, [setReplaceText])
    const onSearchTextChange = useCallback(setSearchText, [setSearchText])

    return {
        newText,
        rawText,
        replaceText,
        searchText,
        onRawTextChange,
        onReplaceTextChange,
        onSearchTextChange,
    }
}

export { useModel }