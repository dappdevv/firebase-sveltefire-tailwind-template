import Home from './Views/Home.svelte';
import About from './Views/About.svelte';
import NotFound from './Views/NotFound.svelte';

const routes = {
    '/': Home,
    '/about': About,
    '*': NotFound
}

export default { routes }