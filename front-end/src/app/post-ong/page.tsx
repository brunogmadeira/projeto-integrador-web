import { HeaderNavigation } from '@/components/header/header-navigation';
import Banner from './components/banner';
import AnimalDropdown from './components/animal-dropdown';
import RacaDropdown from './components/raca-dropdown';
import Input from './components/Input';

export default function PostOngPage() {
  return (
    <div>
      <HeaderNavigation />
      <Banner />
      <AnimalDropdown />
      <RacaDropdown />
      <Input placeholder="Título" marginBottom="10px" /> 
      <Input placeholder="Nome do Pet" marginTop="23px" />
    </div>
  );
}
