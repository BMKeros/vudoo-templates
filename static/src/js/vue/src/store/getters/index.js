const context = require.context('./', false, /\.js$/);
const keys = context.keys().filter(item => item !== './index.js');

const getters = keys.map(context);

export default getters;