const unCommonAPI = {
	navigate(url) {
		uni.navigateTo({
			url
		})
	},
	showToast({
		title,
		icon,
		image,
		mask,
		duration
	}) {
		uni.showToast({
			title,
			icon,
			image,
			mask,
			duration: 1500
		})
	},
	hideToast() {
		uni.hideToast()
	},
	showLoading({
		title,
		mask
	}) {
		uni.showLoading({
			title,
			mask
		})
	},
	hideLoading(){
			uni.hideLoading()
	}
}

export default unCommonAPI
