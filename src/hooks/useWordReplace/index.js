import { useState } from "react"
import { getNewText } from "./utils/getNewText"

const useWordReplace = () => {
    const [rawText, setRawText] = useState('')
    const [replaceText, setReplaceText] = useState('')
    const [searchText, setSearchText] = useState('')

    const newText = getNewText({ rawText, replaceText, searchText })

    return {
        newText,
        rawText,
        replaceText,
        searchText,
        setRawText,
        setReplaceText,
        setSearchText,
    }
}

export { useWordReplace }