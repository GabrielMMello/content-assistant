import { useModel } from "./Model"
import { View } from "./View"
import { useViewModel } from "./ViewModel"

const WordReplaceSection = () => {
    const viewModelProps = useModel()
    const viewProps = useViewModel(viewModelProps)

    return <View {...viewProps} />
}

export { WordReplaceSection }