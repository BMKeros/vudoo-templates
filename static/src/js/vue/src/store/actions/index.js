const context = require.context('./', false, /\.js$/);
const keys = context.keys().filter(item => item !== './index.js');

const actions = keys.map(context);

export default actions;