import { useMemo } from "react"

const useViewModel = props => {
    const {
        newText,
        rawText,
        replaceText,
        searchText,
        onRawTextChange,
        onReplaceTextChange,
        onSearchTextChange,
    } = props

    const newTextInputProps = useMemo(() => ({
        id: 'newText',
        label: 'Resultado',
        value: newText,
        InputProps:{
        readOnly: true,
        },
    }), [newText])

    const rawTextInputProps = useMemo(() => ({
        id: 'rawText',
        label: 'Texto original',
        placeholder: 'Digite aqui...',
        value: rawText,
        onChange: e => onRawTextChange(e.target.value),
    }), [rawText, onRawTextChange])

    const replaceTextInputProps = useMemo(() => ({
        id: 'replaceText',
        label: 'Por',
        placeholder: 'Digite aqui...',
        value: replaceText,
        onChange: e => onReplaceTextChange(e.target.value),
    }), [replaceText, onReplaceTextChange])


    const searchTextInputProps = useMemo(() => ({
        id: 'searchText',
        label: 'Substituir',
        placeholder: 'Digite aqui...',
        value: searchText,
        onChange: e => onSearchTextChange(e.target.value),
    }), [searchText, onSearchTextChange])

    return {
        newTextInputProps,
        rawTextInputProps,
        replaceTextInputProps,
        searchTextInputProps,
    }
}

export { useViewModel }