<template>
	<div class='musicplayer-div'>
		<!--背景图片-->
		<image class='bgImg' :src="musicDetailInfo.img" ></image>
		<!--歌曲内容-->
		<div class='music-div'>
			<div class='geci-div'>
				<div class='pos-div' :style="{top: topDistance+'px'}">
					<p v-for='(item,i,key) in lyricsArr.lyricsList'
						:key='key' 
						:class="{'active': i<lyricsArr.lyricsList.length-1
							? (currentTime>3000 
								&& currentTime>=lyricsArr.timeArrs[i] 
								&& currentTime<=lyricsArr.timeArrs[i+1])
							: currentTime> lyricsArr.timeArrs[i]}">
						{{item}}
					</p>
				</div>
			</div>
		</div>
		<!--控制按钮组-->
		<div class='controls-group-div'>
			<!--进度条-->
			<div class='progress-div'>
				<span>{{dealCurrentTime}}</span>
				<progress :percent="currentPrecent" stroke-width='5'
					backgroundColor='#dcdcdc' activeColor='#3195fd'/>
				<span>{{dealTotalTime}}</span>
			</div>
			<!--控制按钮组-->
			<div class='control-div'>
				<div class='space'></div>
				<div class='control-btn'>
					<i class='iconfont icon-kuaijin-copy' @click.stop='prevSong'></i>
					<i class='iconfont icon-shangyishou' @click.stop='isRewind(true)'></i>
					<i class='iconfont icon-Icon-pause'
						:class="[isPlaying?'icon-Icon-pause': 'icon-zanting']"
						@click.stop='onMusicTap'></i>
					<i class='iconfont icon-kuaijin1' @click.stop='isRewind(false)'></i>
					<i class='iconfont icon-kuaijin' @click.stop='nextSong'></i>
				</div>
				<i class='iconfont icon-xiazai download' @click.stop='downloadSong'></i>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
import {get,showToast,secondToMinute} from '../../utils/index.js';
import {playUrl} from '../../config.js';
export default {
	data(){
		return {
			songDetail: '',  //歌曲详细信息
			chooseIndex: 0,  //所选择的歌曲序列号
			currentTime: 0,  //当前播放的时间、 毫秒
			tempCurrentTime: 0,  //当前播放的时间  毫秒，临时变量
			dealTotalTime: 0,  //处理后的总时间
			bgAudioMannager: '',  //背景音乐管理器
			topDistance: 0,  //距离顶部的距离
		}
	},
	onShow(){
		this.chooseIndex = this.$root.$mp.query.index;  //播放歌曲的序列号
		var self = this;
		uni.setNavigationBarTitle({
			title: self.musicDetailInfo.audio_name
		});
		this.bgAudioMannager = this.globalData.bgAudioMannager;
		this.dealTotalTime = secondToMinute(this.musicDetailInfo.timelength);
		this.setBgMusic();
		this.setMusicMonitor();
	},
	computed: {
		...mapGetters([
			'songList',  //歌曲列表
			'musicDetailInfo',  //歌曲详细信息
			'isPlaying'  //是否在播放
		]),
		dealCurrentTime(){  //处理后的当前时间
			return secondToMinute(this.currentTime);
		},
		//当前时间的百分比
		currentPrecent(){
			if(!this.dealCurrentTime){
				return 0;
			}else{
				return Math.round(this.currentTime*100/this.musicDetailInfo.timelength);
			}
		},
		//分割歌词
		lyricsArr(){
			//歌词部分 string
			var lyrics = this.musicDetailInfo.lyrics;
			var lyricsSplit = lyrics.split('[').slice(1);
			//时间数组
			var timeArrs = [];
			//歌词数组
			var lyricsList = [];
			lyricsSplit.map((item,i)=>{
				item = item.trim().split(']');
				var timeArr = item[0].split(':');
				//毫秒
				var time = Number(timeArr[0])*60*1000 + Number(timeArr[1].split('.')[0])*1000
							+Number(timeArr[1].split('.')[1]); 
				timeArrs.push(time);
				lyricsList.push(item[1]);
			});
			return {
				timeArrs,
				lyricsList
			}
		}
	},
	methods: {
		//设置背景音乐
		setBgMusic(){
			var musicDetail = this.musicDetailInfo;
			this.bgAudioMannager.title = musicDetail.song_name;
			this.bgAudioMannager.singer = musicDetail.author_name;
			this.bgAudioMannager.coverImgUrl = musicDetail.img;
			this.bgAudioMannager.src = musicDetail.play_url;
		},
		//播放歌曲，获取歌曲详细信息
		getSongDetailInfo(index){
			var self = this;
			self.chooseIndex = index;
			var hash = self.songList[index].FileHash;
			get(playUrl, {
				r: "play/getdata",
				hash
			})
			.then((res)=>{
				//console.log(res);
				//播放音乐
				self.$store.dispatch('setSongDetailInfo', res);
				self.playMusic();
			});
		},
		//播放音乐
		playMusic(){
			this.$store.dispatch('setMusicPlay');
			var musicDetail = this.musicDetailInfo;
			this.bgAudioMannager.stop();
			this.bgAudioMannager.title = musicDetail.song_name;
			this.bgAudioMannager.singer = musicDetail.author_name;
			this.bgAudioMannager.coverImgUrl = musicDetail.img;
			this.bgAudioMannager.src = musicDetail.play_url;
			this.bgAudioMannager.play();
		},
		//上一首歌曲
		prevSong(){
			var index = this.chooseIndex-1;
			index = index<0? 0: index;
			this.getSongDetailInfo(index);
		},
		//下一首歌曲
		nextSong(){
			var index = this.chooseIndex+1;
			index = index>=this.songList.length ? 0: index;
			this.getSongDetailInfo(index);
		},
		//快退、快进
		isRewind(rewing){
			if(!this.isPlaying){ //暂停中
				return;
			};
			var curTime = this.bgAudioMannager.currentTime;
			var toastTip;
			if(rewing){  //快退
				curTime -= 5;
				curTime = curTime<0? 0: curTime;
				toastTip = '快退5s';
			}else{  //快进
				curTime += 5;
				curTime = curTime>this.bgAudioMannager.duration? this.bgAudioMannager.duration: curTime;
				toastTip = '快进5s';
			}
			this.bgAudioMannager.seek(curTime);
			showToast(toastTip);
		},
		//点击播放暂停按钮
		onMusicTap(){
			if (!this.isPlaying){
				this.bgAudioMannager.play();  //播放播放
				this.$store.dispatch('setMusicPlay');
			}else{
				this.bgAudioMannager.pause();  //暂停音乐
				this.$store.dispatch('setMusicPause');
			}
		},
		//监听音乐播放情况
		setMusicMonitor: function () {
			//注意这里一定要用这个这个API，不然真机没法生效
			//监听音乐播放
			var self = this;
			this.bgAudioMannager.onPlay(()=>{
				self.$store.dispatch('setMusicPlay');
			});
			//监听音乐暂停
			this.bgAudioMannager.onPause(()=>{
				self.$store.dispatch('setMusicPause');
			});
			//用户在系统音乐播放面板点击上一曲事件
			this.bgAudioMannager.onPrev(()=>{
				self.prevSong();
			});
			//用户在系统音乐播放面板点击下一曲事件
			this.bgAudioMannager.onNext(()=>{
				self.nextSong();
			});
			//背景音频播放进度更新事件
			this.bgAudioMannager.onTimeUpdate(()=>{
				//时间毫秒数
				self.currentTime = self.bgAudioMannager.currentTime*1000;
				if(self.currentTime>4000 && this.tempCurrentTime!=this.currentTime){
					self.tempCurrentTime = self.currentTime;
					//计算滚动
					self.lyricsArr.timeArrs.forEach((item,i)=>{
						if(parseInt(item/1000) == parseInt(self.currentTime/1000)){
							self.topDistance = -25*(i-4);
							return;
						}
					});
				}
			});
			//音乐结束停止
			this.bgAudioMannager.onEnded(()=>{
				self.$store.dispatch('setMusicPause');
				//音乐停止，播放下一首
				var index = self.chooseIndex+1;  //歌曲序列号
				index = index>= self.songList.length? 0: index;
				self.chooseIndex = index;
				self.getSongDetailInfo(index);
			});
		},
		//下载歌曲
		downloadSong(){
			var mp3 = this.musicDetailInfo.play_url;
			uni.showModal({
				title: '音乐下载地址',
				content: mp3,
				showCancel: true,
				confirmText: '复制',
				success(res){
					if(res.confirm){  //点击了复制按钮
						uni.setClipboardData({
							data: mp3,
							success(){
								showToast('复制成功','success');
							},
							fail(){
								showToast('复制失败，请重新复制');
							}
						});
					}
				}
			});
			/****
			uni.downloadFile({
				url: mp3,
				success(res){
					console.log(res);
					var tempFilePath = res.tempFilePath;
					//保存文件
					uni.saveFile({
						tempFilePath: tempFilePath,
						success(res){
							var savedFilePath = res.savedFilePath;
							console.log(savedFilePath)
							uni.showToast({
								title: `下载成功\n路径:${savedFilePath}`,
								icon: 'none',
								duration: 3000
							});
						},
						fail() {
							showToast('下载失败，请重试');
						}
					})
				},
				fail() {
					showToast('下载失败，请重试');
				}
			});***/
		}
	}
}
</script>

<style scoped lang='less'>
page{
	width:100%;
	height: 100vh;
}
.musicplayer-div{
	position: relative;
	height: 100%;
	color: #fff;
	/**背景图片**/
	.bgImg{
		position: absolute;
		z-index: 0;
		width:100vw;
		height: 100vh;
	}
	/**歌曲内容**/
	.music-div{
		position: absolute;
		z-index: 1;
		width:100vw;
		height: 100vh;
		box-sizing: border-box;
		background: rgba(0,0,0,.6);
		text-align: center;
		display: flex;
		padding: 0 20upx;
		padding-top: 60upx;
		padding-bottom: 200upx;
		
		/**歌词内容**/
		.geci-div{
			width: 100%;
			height: 100%;
			overflow: hidden;
			position: relative;
			.pos-div{
				position: absolute;
				width:100%;
				min-height:100%;
				top:0;
				p{
					color:#999;
					font-size:12px;
					line-height: 25px;
				}
				p.active{
					font-size:14px;
					color: #fff;
				}
			}
		}
	}
	/**控制按钮组**/
	.controls-group-div{
		position: absolute;
		z-index: 2;
		bottom: 0; left:0;
		width:100%;
		height: 200upx;
		/**进度条**/
		.progress-div{
			height:50upx;
			display: flex;
			align-items: center;
			padding: 0 10px;
			box-sizing: border-box;
			span{
				flex:1;
				text-align: center;
			}
			progress{
				flex: 7;
				padding:0 5px;
				box-sizing: border-box;
			}
		}
		/**按钮组**/
		.control-div{
			height:150upx;
			display: flex;
			align-items: center;
			padding: 10upx;
			box-sizing: border-box;
			.space{
				flex:1;
			}
			i{
				font-size:70upx;
			}
			.control-btn{
				height:100%;
				flex: 4;
				display: flex;
				justify-content: space-around;
				align-items: center;
			}
			i.download{
				flex:1;
				text-align: center;
			}
			
		}
		
	}
}
</style>