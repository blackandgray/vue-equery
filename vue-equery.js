
var $ele = {}

$ele.install = function (Vue, options) {

	Vue.prototype.$ele = function (selecter) {
		
		let s = selecter[0]
		let sele = selecter.substring(1)
		let ele

		if ( s == '#' ) {
			ele = document.getElementById(sele)
		} else if ( s == '.' ) {
			ele = document.getElementsByClassName(sele)
		} else {
			ele = document.getElementsByTagName(selecter)
		}

		return ele

	}

}

module.exports = $ele