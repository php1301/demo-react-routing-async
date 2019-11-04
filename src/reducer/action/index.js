import * as ActionType from "./actionType";
import Axios from "axios";
const actThemNguoiDung = user => {
    const userAdmin = JSON.parse(localStorage.getItem("userAdmin"));
    //lay access token
    return dispatch => {
        Axios({
            method: "POST",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
            data: user,
            headers: {

           Authorization: `Bearer ${userAdmin.accessToken}`
        }
        })
        .then(result => {
            console.log(result.data)
        })
    .catch(err => {
        console.log(err);
    })
    }
}
const actOnLoginAdmin = (user, history) => {
    return dispatch => {
        Axios({
            method: "POST",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            data: user
        })
            .then(result => {
                console.log(result.data);

                if (result.data.maLoaiNguoiDung === 'QuanTri') {
                    localStorage.setItem("userAdmin", JSON.stringify(result.data))
                    history.push("/admin/dashboard")
                }
                else {
                    alert("Ban ko co quyen truy cap")
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
}
const actOnSaveListMovieAPI = () => {
    return dispatch => {
        Axios({
            method: "GET",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP10"
        })
            .then(result => {
                dispatch(actOnSaveListMovie(result.data)) //dispatch  hanh dong onsavelistmovie voi gia tri result.data 
            })
            .catch(err => {
                console.log(err);
            })
    }
} // Goi axios den server neu goi duoc thi thuc hien hanh dong on save list movie, ma hanh dong on save list movie return (làm) 2 thu: la case thuc hien va gia tri no mang di
const actOnSaveListMovie = (listMovies) => {
    return {
        type: ActionType.ON_SAVE_LIST_MOVIE,
        listMovies
    }
} // ham de bao phai lam gi - tra ve case save list movie va chua list movies
const actDetailMoviesApi = (id) => {
    return dispatch => Axios({
        method: "GET",
        url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
    })
        .then(result => {
            dispatch({
                type: ActionType.DETAIL_MOVIE,
                movie: result.data
            })
        })
        .catch(err => {
            console.log(err);
        })
}
export { actOnSaveListMovie, actOnSaveListMovieAPI, actDetailMoviesApi, actOnLoginAdmin, actThemNguoiDung };