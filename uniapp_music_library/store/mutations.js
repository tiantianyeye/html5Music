export default {
	//设置歌曲列表
	SET_SONGLIST(state, songList){
		state.songList = songList;
	},
	//设置歌曲详细信息
	SET_SONGDETAIL(state, songDetailInfo){
		state.songDetailInfo = songDetailInfo;
	},
	//暂停音乐
	SET_MUSICPAUSE(state){
		state.isPlaying = false;
	},
	//播放音乐
	SET_MUSICPLAY(state){
		state.isPlaying = true;
	}
}