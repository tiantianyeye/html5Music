<template>
	<div class='music-container'>
		<!--头部块-->
		<div class='header-div'>
			<!-- #ifdef H5 -->
			<div class='marginTop44'></div>
			<!-- #endif -->
			<!--搜索-->
			<div class='header-top1'>
				<div class='top-left'>
					<span class='text1'>M</span>
					<span class='text2'>我的音乐</span>
				</div>
				<div class='top-right'>
					<input type="text" placeholder="歌手/歌名"
						v-model='keyword'
						placeholder-style="color:#e5e5e5;"
						@confirm='onSearchKeyword' />
					<i class='iconfont icon-sousuo' @click='onSearchKeyword'/>
					<!--提示语框-->
					<div class='tip-div' v-show='showSeahchDiv'>
						<ul>
							<li v-for='(item,i,key) in searchTipList' :key='key'
								@click='toSearchSong(item.HintInfo)'>
								{{item.HintInfo}}
							</li>
						</ul>
					</div>
				</div>
			</div>
			<!--轮播图-->
			<div class='header-top2'>
				<swiper 
					circular="true" indicator-dots="true" autoplay="true" 
					interval="3000" duration="500"
					indicator-color="#2ca2f9" indicator-active-color="#d1c90e"
				>
					<swiper-item v-for='(img,index,key) in swiperImgs' :key='key'>
						<view class="swiper-item">
							<image :src="img" mode="scaleToFill"></image>
						</view>
					</swiper-item>
				</swiper>
			</div>
		</div>
		
		<!--空白符-->
		<div class='space-div'></div>
		
		<!--渲染列表搜索出来的盒子-->
		<div class='music-div' v-show='songList && songList.length>0'>
			<ul>
				<li v-for='(item,i,key) in songList' :key='key'
					@click.stop='getSongDetailInfo(i)'>
					<div class='text'>
						<p>{{item.SongName}}</p>
						<p class='singer'>{{item.SingerName}}</p>
					</div>
				</li>
			</ul>
		</div>
		<!--渲染推荐的歌曲-->
		<div class='music-div' v-show='songList.length==0'>
			<ul>
				<li v-for='(item,i,key) in recommendMusic' :key='key'
					@click.stop='toSearchSong(item)'>
					<div class='text'>
						<p>{{item}}</p>
					</div>
				</li>
			</ul>
		</div>
		
		
		<!--播放旋转盒子-->
		<div class='play-div' v-if='playDivShow' @click='openPlayer'>
			<div class='img-div' :class='{run:isPlaying}'>
				<image :src='musicDetailInfo.img'></image>
			</div>
			<div class='music-info'>
				<p>{{musicDetailInfo.song_name}}</p>
				<p class='singer'>{{musicDetailInfo.author_name}}</p>
			</div>
			<div class='play-components'>
				<i class='iconfont icon-kuaijin-copy prev' @click.stop='prevSong'></i>
				<i class='iconfont lay'
					:class="[isPlaying? 'icon-Icon-pause': 'icon-zanting']"
					@click.stop='onMusicTap'></i>
				<i class='iconfont icon-kuaijin next' @click.stop='nextSong'></i>
			</div>
		</div>
		
		<!--没有更多-->
		<MyNoMore :toShow='nomore && !firstInit' />		
		
	</div>
</template>

<script>
import MyNoMore from '../../components/myNoMore.vue';
import {get} from '../../utils/index.js';
import {searchTipUrl,songsearchUrl,playUrl} from '../../config.js';
import { mapGetters, mapActions } from 'vuex';
export default {
	data(){
		return {
			keyword: '',  //搜索关键词
			swiperImgs: [  //轮播图
				'/static/img/banner1.jpg',
				'/static/img/banner2.jpg',
				'/static/img/banner3.jpg'
			],
			//推荐的歌
			recommendMusic: [
				'38度6', '沙漠骆驼', '离人愁', '我们不一样',
				'逆流成河', '带你去旅行'
			],
			nomore: false,  //没有更多
			firstInit: true,  //第一次加载
			currentPage: 1,  //当前页码
			showSeahchDiv: false,  //是否显示searchtip框
			searchTipList: [],  //search提示语列表
			chooseIndex: 0,  //选择的歌曲
			bgAudioMannager: '',  //背景音频管理器 
			playDivShow: false,  //播放盒子显示
		}
	},
	computed: {
		...mapGetters([
			'songList',  //歌曲列表
			'musicDetailInfo',  //歌曲详细信息
			'isPlaying'  //是否在播放
		])
	},
	components: {
		MyNoMore
	},
	mounted(){
		//获取背景音乐管理器
		this.bgAudioMannager = this.globalData.bgAudioMannager;  
		this.setMusicMonitor();
	},
	methods: {
		//根据关键词搜索提示
		onSearchKeyword(){
			var self = this;
			var keyword = this.keyword.trim();
			if(keyword){
				self.showSeahchDiv = true;
				get(searchTipUrl, {
					keyword,
				})
				.then((res)=>{
					self.searchTipList = res[0].RecordDatas;
					if(self.searchTipList.length==0){
						self.showSeahchDiv = false
					}
				})
				.catch((ex)=>{
					console.log(ex);
				});
			}
		},
		//点击提示框的关键词搜索歌曲列表
		toSearchSong(keyword){
			this.keyword = keyword;
			this.showSeahchDiv = false;
			this.searchTipList = [];
			this.initData();
			this.getSongList();
		},
		//获取歌曲列表
		getSongList(){
			var self = this;
			if(this.nomore){  //不能加载更多
				return;
			};
			get(songsearchUrl, {
				page: self.currentPage,
				pagesize: 20,
				keyword: self.keyword,
				platform: "WebFilter",
				userid: -1,
				iscorrection: 1,
				privilege_filter: 0,
				filter: 2
			})
			.then((res)=>{
				//console.log(res);
				var pages = Math.ceil(res.total/20);
				/*******/
				var listData = res.lists;
				var songList = [...self.songList, ...listData];
				self.$store.dispatch('setSongList', songList);
				self.firstInit = false;
				self.currentPage++;
				if(self.currentPage > pages && pages>1){
					self.nomore = true;
				}
				self.$forceUpdate();
			});
		},
		//初始化数据
		initData(){
			this.currentPage = 1;  //查询当前页码数
			this.nomore = false;    //是否不可以加载
			this.firstInit = true;  //第一次加载
			this.$store.dispatch('setSongList', []);  //列表
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
			this.playDivShow = true;
			this.$store.dispatch('setMusicPlay');
			var musicDetail = this.musicDetailInfo;
			this.bgAudioMannager.stop();
			this.bgAudioMannager.title = musicDetail.song_name;
			this.bgAudioMannager.singer = musicDetail.author_name;
			this.bgAudioMannager.coverImgUrl = musicDetail.img;
			this.bgAudioMannager.src = musicDetail.play_url;
			this.bgAudioMannager.play();
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
		//打开音乐播放器页面详情页面
		openPlayer(){
			var self = this;
			uni.navigateTo({
				url: '/pages/musicplayer/index?index='+self.chooseIndex
			});
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
			//音乐结束停止
			this.bgAudioMannager.onEnded(()=>{
				self.$store.dispatch('setMusicPause');
				//音乐停止，播放下一首
				var index = self.chooseIndex+1;  //歌曲序列号
				index = index>= self.songList.length? 0: index;
				self.chooseIndex = index;
				self.getSongDetailInfo(index);
			});
		}
	},
	//下拉刷新
	onPullDownRefresh() {
		uni.hideLoading();
		uni.stopPullDownRefresh();
		uni.hideNavigationBarLoading();
		this.initData();
		this.getSongList();
	},
	//到达底部，加载更多
	onReachBottom() {
		this.getSongList();
	}
}
</script>

<style scoped lang='less'>
@import '../../style/default.less';
.music-container{
	color:#333;
	font-size:14px;
	.header-div{
		position: fixed;
		width: 100%;
		top: 0;
		left:0;
		.marginTop44{
			margin-top:44px; 
		}
		.header-top1{
			border-top:1px solid #e5e5e5;
			width:100%;
			height:50px;
			display: flex;
			align-items: center;
			padding: 0 10px;
			box-sizing: border-box;
			background: @mainColor;
			color: #fff;
			.top-left{
				flex:1;
				span.text1{
					font-size:22px;
					border-radius:50%;
					border:2px solid #fff;
					display:inline-block;
					width:28px;
					height:28px;
					line-height:28px;
					text-align: center;
					vertical-align: middle;
				}
				span.text2{
					font-size:16px;
					margin-left:5px;
					vertical-align: middle;
				}
			}
			.top-right{
				flex:2;
				position: relative;
				display: flex;
				height:100%;
				align-items: center;
				input{
					border-radius:5px;
					border: 1px solid #fff;
					flex: 6;
					height: 28px;
					color: #fff;
					padding: 0 5px;
					box-sizing: border-box;
				}
				/**设置输入框的placeholder样式**/
				i{
					flex:1;
					text-align: center;
					font-size: 26px;
				}
				/**提示语**/
				.tip-div{
					width:100%;
					position: absolute;
					padding:5px 10px;
					top:40px;
					left:0;
					background: #fff;
					border-radius:8px;
					padding:10px;
					box-sizing: border-box;
					z-index:2;
					color:#333;
					border:1px solid @mainColor;
					ul{
						li+li{
							border-top:1px solid #e5e5e5;
							line-height: 30px;
						}
					}
				}
			}
		}
		.header-top2{
			swiper{
				height: 150px;
				image{
					width:100%;
					height:150px;
				}
			}
		}
	}
	/**空白符**/
	.space-div{
		height: 200px;
	}
	/**歌曲渲染列表**/
	.music-div{
		background: #FFFFFF;
		ul{
			li:nth-child(1){
				border-top: #BEBEBE solid 1px;
			}
			li{
				border-bottom: #BEBEBE solid 1px;
				box-sizing: border-box;
				padding: 0 10px;
				height:60px;
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				p{
					width: 100%;
				}
				p.singer{
					color: #007AFF;
					font-size:12px;
				}
			}
		
		}
	}
}	
/**显示播放信息盒子**/
.play-div{
	position: fixed;
	width:100%;
	height: 85px;
	bottom:0;
	left:0;
	display: flex;
	align-items: center;
	padding:5px;
	box-sizing: border-box;
	background: rgba(0,0,0,0.8);
	color: #fff;
	.img-div{
		flex: 1;
		height: 100%;
		padding:5px;
		box-sizing: border-box;
		align-item: center;
		justify-content:center;
		image{
			width: 120upx;
			height: 120upx;
			border-radius:50%;
		}
	}
	.img-div.run{
		animation:running 5s linear infinite;
	}
	.music-info{
		flex:3;
		height: 100%;
		.singer{
			font-size:14px;
			color: #e5e5e5;
		}
	}
	.play-components{
		flex:2;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		i{
			font-size: 70upx;
		}
	}
}
@keyframes running{
	from{
		transform: rotate(0deg);
	}
	to{
		transform: rotate(360deg);
	}
}
</style>