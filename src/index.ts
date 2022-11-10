import { App } from '../types';
import { pages } from './pages';

const pageRepresentations = [
	{path: '/', page: pages.home},
	{path: '/search', page: pages.search}
]

const app: App = ({
	pages: pageRepresentations
})