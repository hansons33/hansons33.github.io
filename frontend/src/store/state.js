const token = localStorage.getItem('token')
const username = localStorage.getItem('username')

export default {
    token,   // token
    username, // 用户名
    transitionName: "", // 动画方向
}