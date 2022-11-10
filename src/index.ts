import { App } from '../types';
import { pages } from './pages';

const pageRoutes = [
	{path: '/', page: pages.home},
	{path: '/search', page: pages.search}
]

const app: App = ({
	userFacingViews: pageRoutes,
	userFacingCommands: []
})