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
	props:{
		loading:{
			type:Boolean,
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
		this.$axios.get('../commandList.json').then((res) => {
			this.commandList = res.data.list
		})
		let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
		if (flag) {
			this.column = 2
		}else{
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