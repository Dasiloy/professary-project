import { useAppContext } from '../context/AppContext';
import { Container } from '@chakra-ui/react';

// json formatter
// json view
// json placeholder

export default function Home() {
  console.log(useAppContext());
  return <Container></Container>;
}
