import { PageRepresentation } from '../../types';
import { home, Queries as HomeQueries } from './home';
import { search, Queries as SearchQueries } from './search';

export type Queries = HomeQueries & SearchQueries

export const pages: ReadonlyArray<PageRepresentation> = [
	{path: '/', page: home},
	{path: '/search', page: search}
]