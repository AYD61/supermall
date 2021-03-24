module.exports = {
	configureWebpack:{
		resolve: {
			alias: {
				//vue3.x才可以用@   @表示src
				'assets': '@/assets',
				'common': '@/common',
				'components': '@/components',
				'network': '@/network',
				'views': '@/views',
			}
		}
	}
}