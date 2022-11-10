import { home, Queries as HomeQueries } from './home';
import { Queries as SearchQueries, search } from './search';

export type Queries = HomeQueries
	& SearchQueries

export const pages = {
	home,
	search
}
