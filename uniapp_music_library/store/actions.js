export default {
	//设置歌曲列表
	setSongList: ({commit, getters}, songList) => {
		commit('SET_SONGLIST', songList);
	},
	//设置单首歌曲详细信息
	setSongDetailInfo: ({commit, getters}, songDetail) => {
		commit('SET_SONGDETAIL', songDetail);
	},
	//暂停歌曲
	setMusicPause: ({commit, getters}) => {
		commit('SET_MUSICPAUSE');
	},
	//播放歌曲
	setMusicPlay: ({commit, getters}) => {
		commit('SET_MUSICPLAY');
	}
}