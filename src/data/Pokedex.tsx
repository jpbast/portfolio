import FeaturesHighlight from '@/components/FeaturesHighlight';
import Strong from '@/components/Strong';
import TechsList from '@/components/TechsList';
import { Project } from '@/typings/project';

export const Pokedex: Project = {
  title: 'Pokédex',
  shortDescription: 'A App for Pokémon lovers',
  thumbnail: '/projects/pokedex.png',
  text: (
    <div className="flex flex-col gap-3">
      <p>
        This is a personal project built for studying and practising purposes. It's a Pokédex
        containing a detailed information about each Pokémon. All the data is served by the{' '}
        <a href="https://pokeapi.co/" target="_blank">
          <span style={{ textDecoration: 'underline' }}>Poke API</span>
        </a>
        .
      </p>
      <p>The app has two pages:</p>
      <ul className="my-3 flex flex-1 flex-col gap-3" style={{ paddingLeft: 30 }}>
        <li>
          <Strong>Home page: </Strong>
          it shows all Pokémons in a list. You can also find a specific Pokémon by typing its name
          on the search input on the top of the page. If you click on a Pokémon, you'll be navigated
          to the detail page.
        </li>
        <li>
          <Strong>Pokémon detail: </Strong>
          here you can check more information about the Pokémon you want.
        </li>
      </ul>
      <p>
        For further information you can visit{' '}
        <a href="https://github.com/jpbast/pokedex" target="_blank">
          <span style={{ textDecoration: 'underline' }}>here</span>
        </a>{' '}
        for checking both the code base and the README containing more detailed information.
      </p>
      <p>
        For visiting the app, you can go{' '}
        <a href="https://jpbast-pokedex.app" target="_blank">
          <span style={{ textDecoration: 'underline' }}>here</span>
        </a>
        .
      </p>
      <h3 className="mt-3 text-xl font-bold">Technologies</h3>
      <TechsList color={'secondary'} techs={['TypeScript', 'React', 'React Query', 'Ant Design']} />
    </div>
  ),
};
