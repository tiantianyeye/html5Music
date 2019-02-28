export default {
    //获取歌曲列表
    songList: (state) => {
        return state.songList;
    },
	//获取歌曲相信信息
	musicDetailInfo: (state) => {
		return state.songDetailInfo;
	},
	//获取歌曲播放状态
	isPlaying: (state) => {
		return state.isPlaying;
	},
}