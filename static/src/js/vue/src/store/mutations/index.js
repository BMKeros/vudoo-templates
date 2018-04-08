const context = require.context('./', false, /\.js$/);
const keys = context.keys().filter(item => item !== './index.js');

const mutations = keys.map(context);

export default mutations;