import './App.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { WordReplacePage } from './pages/WordReplacePage';

function App() {
  return (
    <Container className="App">
      <Typography variant="h1" gutterBottom>Feito com amor para ajudar minha esposa</Typography>
      <WordReplacePage />
    </Container>
  );
}

export default App;
