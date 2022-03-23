const pluginBookshop = require("@bookshop/eleventy-bookshop");
const pluginCloudCannon = require('eleventy-plugin-cloudcannon');

module.exports = function (eleventyConfig) {
	eleventyConfig.setUseGitIgnore(false);
	eleventyConfig.setDataDeepMerge(true);

	eleventyConfig.addPlugin(pluginBookshop({
		bookshopLocations: ["../component-lib"]
	}));

	eleventyConfig.cloudcannonOptions = {
		dir: {
			pages: 'pages'
		}
	};

	eleventyConfig.addPlugin(pluginCloudCannon);
};
