<template>
	<div class="row functionFor">
		<waterfall :data="commandList" :col="column">
			<template>
				<div v-for="(item, index) of commandList" :key="index">
					<div class="thumbnail">
						<img :src="item.img" alt="...">
						<div class="caption">
							<h3>{{ item.title }}</h3>
							<p><b>命令：</b>{{ item.command }}</p>
							<p><b>来源：</b>{{ item.source }}</p>
						</div>
					</div>
				</div>
			</template>
		</waterfall>

	</div>
</template>

<script>

export default {
	props: {
		loading: {
			type: Boolean,
		}
	},
	data() {
		return {
			commandList: [],
			commandType: [],
			column: 4
		}
	},
	mounted() {
		// 模拟后端数据
		this.commandList = [
			{
				"title": "亲亲",
				"command": "kiss/亲 @**",
				"source": "petpet",
				"img": "https://img1.imgtp.com/2022/07/12/XDwav6cp.gif"
			},
			{
				"title": "舔",
				"command": "rub/舔/prpr @**",
				"source": "petpet",
				"img": "https://img1.imgtp.com/2022/07/12/o7HyOQ25.gif"
			},
			{
				"title": "扔",
				"source": "petpet",
				"command": "扔/throw @**",
				"img": "https://img1.imgtp.com/2022/07/12/fOTsfPpD.gif"
			},
			{
				"title": "摸头",
				"source": "petpet",
				"command": "摸/petpet @**",
				"img": "https://img1.imgtp.com/2022/07/12/6LAO1k0j.gif"
			},
			{
				"title": "玩",
				"source": "petpet",
				"command": "玩/play @**",
				"img": "https://img1.imgtp.com/2022/07/12/lSZQq3va.gif"
			},
			{
				"title": "推",
				"source": "petpet",
				"command": "滚/推/roll @**",
				"img": "https://img1.imgtp.com/2022/07/12/jzUUFbXb.gif"
			},
			{
				"title": "啃",
				"source": "petpet",
				"command": "啃/咬/bite @**",
				"img": "https://img1.imgtp.com/2022/07/12/DY4AK4hf.gif"
			},
			{
				"title": "抱",
				"source": "petpet",
				"command": "抱/twist @**",
				"img": "https://img1.imgtp.com/2022/07/12/LzMC9KRD.gif"
			},
			{
				"title": "捣",
				"source": "petpet",
				"command": "捣/pound @**",
				"img": "https://img1.imgtp.com/2022/07/12/vtmufmMz.gif"
			},
			{
				"title": "锤",
				"source": "petpet",
				"command": "锤/thump @**",
				"img": "https://img1.imgtp.com/2022/07/12/lzM25cLh.gif"
			},
			{
				"title": "敲",
				"source": "petpet",
				"command": "敲/knock @**",
				"img": "https://img1.imgtp.com/2022/07/12/P1s9BBGM.gif"
			},
			{
				"title": "吸",
				"source": "petpet",
				"command": "吸/suck @**",
				"img": "https://img1.imgtp.com/2022/07/12/IFqkMZJq.gif"
			},
			{
				"title": "锤",
				"source": "petpet",
				"command": "锤/hammer @**",
				"img": "https://img1.imgtp.com/2022/07/12/W1kui0oK.gif"
			},
			{
				"title": "粘",
				"source": "petpet",
				"command": "粘/tightly @**",
				"img": "https://img1.imgtp.com/2022/07/12/6kVjtySE.gif"
			},
			{
				"title": "阿尼亚喜欢",
				"source": "petpet",
				"command": "阿尼亚/喜欢/anyasuki @**",
				"img": "https://img1.imgtp.com/2022/07/13/BYccZihN.png"
			},
			{
				"title": "远离",
				"source": "petpet",
				"command": "不要靠近/远离/dont_touch @**",
				"img": "https://img1.imgtp.com/2022/07/13/P1DwgPT0.png"
			},
			{
				"title": "垃圾桶探头",
				"source": "petpet",
				"command": "垃圾桶/探头/垃圾/garbage @**",
				"img": "https://img1.imgtp.com/2022/07/13/DeGW2x9M.gif"
			},
			{
				"title": "壁纸",
				"source": "petpet",
				"command": "壁纸/撕/wallpaper @**",
				"img": "https://img1.imgtp.com/2022/07/13/EKLbdUiJ.png"
			},
			{
				"title": "纳米科技",
				"source": "petpet",
				"command": "纳米科技/nanomachine-son @**",
				"img": "https://img1.imgtp.com/2022/07/13/K5EU2ROe.gif"
			},
			{
				"title": "完美",
				"source": "petpet",
				"command": "完美/perfect @**",
				"img": "https://img1.imgtp.com/2022/07/13/MFdtr05B.png"
			},
			{
				"title": "击剑",
				"source": "petpet",
				"command": "击剑/fencing/🤺 @**",
				"img": "https://img1.imgtp.com/2022/07/13/rHxBqqwF.gif"
			},
			{
				"title": "需要",
				"source": "petpet",
				"command": "需要/need @**",
				"img": "https://img1.imgtp.com/2022/07/13/ECtNbFRe.png"
			},
			{
				"source": "petpet",
				"title": "警察",
				"command": "警察/police @**",
				"img": "https://img1.imgtp.com/2022/07/13/Gv7J65El.png"
			},
			{
				"source": "petpet",
				"title": "画",
				"command": "画/painter @**",
				"img": "https://img1.imgtp.com/2022/07/13/2WuO0cIq.png"
			},
			{
				"source": "DrawMeme",
				"title": "Pxxnhub生成器",
				"command": "#ph+文字/#ph+文字+文字",
				"img": "https://img1.imgtp.com/2022/07/13/ugxwPcgX.png"
			},
			{
				"source": "DrawMeme",
				"title": "灰白照生成器",
				"command": "#bw +文字+图片（若没有图片则要求获取）",
				"img": "https://img1.imgtp.com/2022/07/13/GvBcgOmY.png"
			},
			{
				"source": "DrawMeme",
				"title": "图像腐蚀",
				"command": "#erode+图片/#erode+数字+数字+数字+图片",
				"img": "https://img1.imgtp.com/2022/07/13/MRkrzLBY.png"
			},
			{
				"source": "DrawMeme",
				"title": "5k兆",
				"command": "#5000兆|#5k兆+文字/#5000兆|#5k兆+文字+文字",
				"img": "https://img1.imgtp.com/2022/07/13/GvBcgOmY.png"
			},
			{
				"source": "DrawMeme",
				"title": "0%生成器",
				"command": "#0+图片",
				"img": "https://img1.imgtp.com/2022/07/13/9owbK6zi.png"
			},
			{
				"source": "DrawMeme",
				"title": "osu生成器",
				"command": "#osu+文字",
				"img": "https://img1.imgtp.com/2022/07/13/YtqZQjUc.png"
			},
			{
				"source": "DrawMeme",
				"title": "大理石滤镜",
				"command": "#marble + 图片",
				"img": "https://img1.imgtp.com/2022/07/13/8LldV3Si.png"
			},
			{
				"source": "DrawMeme",
				"title": "flash假闪照",
				"command": "#flash + 图片",
				"img": "https://img1.imgtp.com/2022/07/13/yz9K9quc.png"
			},
			{
				"source": "摸鱼人日历",
				"title": "摸鱼日历",
				"command": "摸鱼",
				"img": "https://img1.imgtp.com/2022/07/13/UPYyAYrr.png"
			},
			{
				"source": "忘了(●'◡'●)",
				"title": "epic白嫖",
				"command": "白嫖",
				"img": "https://img1.imgtp.com/2022/07/13/0mocheDt.png"
			}
		]
		let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
		if (flag) {
			this.column = 2
		} else {
			this.column = 4
		}
		this.detectScreenSize();
		window.onresize = () => {
			this.detectScreenSize();
		}

	},
	methods: {
		// 检测屏幕大小
		detectScreenSize() {
			if (document.body.clientWidth < 970) {
				this.column = 2
			} else {
				this.column = 4
			}
		}
	},

}
</script>

<style scoped>
.functionFor {
	overflow-y: auto;
	max-height: 100%;
	scrollbar-width: none;
	/* firefox */
	-ms-overflow-style: none;
	/* IE 10+ */
}

@media screen and (max-width: 970px) {
	.functionFor {
		overflow-y: inherit;
	}
}

.functionFor::-webkit-scrollbar {
	display: none;
}
</style>
<style>
.thumbnail {
	margin: 0 2.5px 5px 2.5px !important;
}
</style>