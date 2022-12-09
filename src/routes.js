// determine router base
let routeBase = '';
if(!import.meta.env.VITE_SKIP_BASE_BATH || import.meta.env.VITE_SKIP_BASE_BATH === 'false') {
    routeBase = '/react-thenetninja';
}

export default {
    home  : `${routeBase}/`,
    create: `${routeBase}/create`
};
