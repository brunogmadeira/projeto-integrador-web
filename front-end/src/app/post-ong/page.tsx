import { HeaderNavigation } from '@/components/header/header-navigation';
import Banner from './components/Banner';
import Title from './components/Title';
import NamePet from './components/name-pet';
import AnimalDropdown from './components/animal-dropdown';
import RacaDropdown from './components/raca-dropdown';

export default function PostOngPage() {
  return (
    <div>
      <HeaderNavigation />
      <Banner />
      <Title />
      <NamePet />
      <AnimalDropdown />
      <RacaDropdown />
    </div>
  );
}