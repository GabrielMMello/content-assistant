import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"

const View = props => {
    const {
        newTextInputProps,
        rawTextInputProps,
        replaceTextInputProps,
        searchTextInputProps,
    } = props

    return (
        <>
            <Grid container spacing={2} mb={2}>
                <Grid item xs={6}>
                    <TextField {...searchTextInputProps} />
                </Grid>
                <Grid item xs={6}>
                    <TextField {...replaceTextInputProps} />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        multiline
                        {...rawTextInputProps}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        multiline
                        {...newTextInputProps}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export { View }