const host = 'https://www.burtyang.top:8080/';

//搜索接口
const songsearchUrl = `${host}songsearch`;
//获取歌曲接口
const playUrl = `${host}play`;
//搜索框关键词提示接口
const searchTipUrl = `${host}searchtip`;

//书库接口
const host1 = 'https://www.burtyang.top:8081';
const loginUrl = `${host1}/api/login`;
const addBookUrl = `${host1}/api/addbook`;
const bookListUrl = `${host1}/api/booklist`;
const bookDetailUrl = `${host1}/api/bookdetail`;
const bookTopUrl = `${host1}/api/booktop`;
const bookAddComment = `${host1}/api/bookaddcomment`;
const bookCommentList = `${host1}/api/bookcommentlist`;


module.exports = {
	songsearchUrl,
	playUrl,
	searchTipUrl,
	loginUrl,
	addBookUrl,
	bookListUrl,
	bookDetailUrl,
	bookTopUrl,
	bookAddComment,
	bookCommentList
}