import React, { Component } from 'react';
import './App.css';
import './assets/style/home-style.css'
import './assets/style/form-style.css'


class App extends Component {
  componentDidMount() {
    let req = require.context("./assets/img/background", false, /.*\.jpg$/);
    req.keys().forEach(function (key) {
      req(key);
    });

    // let png = require.context("./assets/img/png", false, /.*\.png$/);
    // png.keys().forEach(function (key) {
    //   req(key);
    // });


    // let svg = require.context("./assets/img/svg", false, /.*\.svg$/);
    // svg.keys().forEach(function (key) {
    //   req(key);
    // });
  }

  render() {
    return (
      <div className="App">
        <section id="nav-bar">
          <nav id="collapsibleNav" className="navbar-expand-lg fixed-top">
            <nav className="container-fluid navbar navbar-expand navbar-light bg-white">

              <div className="navbar-brand">
                <a title="We Care You" href="home.html">
                  <img src="./assets/img/logo/small-logo.png"></img></a>
              </div>


              <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse"
                data-target="#collapsibleNav" aria-controls="collapsibleNavId" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse narbar">
                <ul className="pl-5 navbar-nav mr-auto">

                  <li className="nav-item active">
                    <a className="nav-link" title="Trang Chủ" href="home.html">
                      <span className="menu-icon">
                        <img src="./assets/img/png/experience-icon.png"></img>
                      </span> Trang Chủ</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" title="Dịch Vụ" href="dichvu.html">
                      <span className="menu-icon">
                        <img src="./assets/img/svg/care-service.svg"></img>
                      </span>Dịch Vụ </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" title="Thông Tin Phòng Khám" href="office-info.html">
                      <span className="menu-icon">
                        <img src="./assets/img/png/medicine-thumb.png "></img>
                      </span>Thông Tin Phòng Khám</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" title="Đội Ngũ Bác Sĩ" href="doctor.html">
                      <span className="menu-icon">
                        <img src="./assets/img/png/stethoscope-thumb.png"></img>
                      </span>Đội Ngũ Bác Sĩ </a>
                  </li>
                </ul>
                <div className="btn-toolbar mb-1">
                  <div className="btn-group mr-2">
                    <button className="btn btn-success" data-toggle="modal" data-target="#booking-form"
                    >Đặt Hẹn Khám Ngay</button>
                  </div>

                  <div className="btn-group mr-2">
                    <button className="btn btn-primary" data-toggle="modal">Tải Ứng Dụng Ngay</button>
                  </div>
                </div>
              </div>
            </nav>

            <div id="signin-out-gr-button" className="container-fluid btn-group d-flex justify-content-end">

              <div className="btn-group mr-2">
                <button className="btn btn-light btn-sm rounded-bottom" data-toggle="modal"
                  data-target="#signin-form"><b>Đăng Nhập</b>
                </button>
              </div>

              <div className="btn-group mr-2">
                <button className="btn btn-light btn-sm rounded-bottom" data-toggle="modal"
                  data-target="#signup-form"><b>Đăng Ký</b></button></div>
            </div>
          </nav>
        </section>

        <section id="form-modal">
          <div className="modal fade" id="signin-form" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">

              <div className="modal-content form-elegant">

                <div className="modal-header text-center">
                  <h3 className="modal-title w-100 dark-grey-text font-weight-bold my-3" id="myModalLabel">
                    <strong>Đăng Nhập</strong></h3>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div className="modal-body mx-4">

                  <div className="md-form mb-5">
                    <input type="email" id="Form-email1" className="form-control validate"></input>
                    <label data-error="wrong" data-success="right" for="Form-email1">Tài khoản</label>
                  </div>

                  <div className="md-form pb-3">
                    <input type="password" id="Form-pass1" className="form-control validate"></input>
                    <label data-error="wrong" data-success="right" for="Form-pass1">Mật khẩu</label>
                    <p className="font-small blue-text d-flex justify-content-end">Quên <a href="#"
                      className="blue-text ml-1" data-toggle="modal" data-target="#forgot-pass"
                      data-dismiss="modal">
                      mật khẩu?</a></p>
                  </div>

                  <div className="text-center mb-3">
                    <button id="main-button" type="button" className="btn btn-block btn-rounded z-depth-1a">Đăng
                                Nhập</button>
                  </div>
                  <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> hoặc
                  đăng nhập
                            bằng:</p>

                  <div className="row my-3 d-flex justify-content-center">

                    <button type="button" className="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i
                      className="fab fa-facebook-f text-center"></i></button>

                    <button type="button" className="btn btn-white btn-rounded z-depth-1a"><i
                      className="fab fa-google-plus-g"></i></button>
                  </div>
                </div>

                <div className="modal-footer mx-5 pt-3 mb-1">
                  <p className="font-small grey-text d-flex justify-content-end">Chưa có tài khoản ? <a href="#"
                    className="blue-text ml-1" data-toggle="modal" data-target="#signup-form"
                    data-dismiss="modal">
                    Đăng Ký</a></p>
                </div>
              </div>

            </div>
          </div>

          <div className="modal fade" id="signup-form" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
            aria-hidden="true">

            <div className="modal-dialog" role="document">

              <div className="modal-content form-elegant">

                <div className="modal-header text-center">
                  <h3 className="modal-title w-100 dark-grey-text font-weight-bold my-3" id="myModalLabel">
                    <strong>Đăng Ký Tài Khoản</strong></h3>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div className="modal-body mx-4">

                  <div className="modal-footer mx-5 pt-3 mb-1">
                    <p className="grey-text d-flex justify-content-end">Bạn là một bác sĩ ?<a href="#"
                      className="yellow-text ml-1" data-toggle="modal" data-target="#doctor-signup-form"
                      data-dismiss="modal">
                      Đăng ký ở đây</a></p>
                  </div>

                  <div className="md-form mb-5">
                    <input type="email" id="Form-email1" className="form-control validate"></input>
                    <label data-error="wrong" data-success="right" for="Form-email1">Họ & tên đầy đủ</label>
                  </div>

                  <div className="md-form pd-1">
                    <input type="password" id="Form-pass1" className="form-control validate"></input>
                    <label data-error="wrong" data-success="right" for="Form-pass1">Số điện thoại</label>
                  </div>

                  <div className="md-form pd-1">
                    <input type="password" id="Form-pass1" className="form-control validate"></input>
                    <label data-error="wrong" data-success="right" for="Form-pass1">Tạo một mật khẩu</label>
                  </div>

                  <div className="md-form pd-1">
                    <input type="password" id="Form-pass1" className="form-control validate"></input>
                    <label data-error="wrong" data-success="right" for="Form-pass1">Nhập lại mật khẩu</label>
                  </div>

                  <form>
                    <label><input type="checkbox" name="personality" checked></input> Nhận thông tin & khuyến mãi của
                                chúng tôi qua email</label><br></br>
                  </form>

                  <div className="text-center mb-3">
                    <button id="main-button" type="button" className="btn btn-block  btn-rounded z-depth-1a">Đăng
                                Ký</button>
                  </div>

                </div>

                <div className="modal-footer mx-5 pt-3 mb-1">
                  <p className="font-small grey-text d-flex justify-content-end">Khi bấm nút đăng ký, bạn đã đồng ý
                            với các<a href="#" className="blue-text ml-1">
                      điều khoản</a></p>
                </div>
              </div>

            </div>
          </div>

          <div className="modal fade" id="doctor-signup-form" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content form-elegant">

                <div className="modal-header text-center">
                  <h3 className="modal-title w-100 dark-grey-text font-weight-bold my-3" id="myModalLabel">
                    <strong>Đăng Ký Tài Khoản</strong></h3>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body mx-4">
                  <div className="modal-footer mx-5 pt-3 mb-1">
                    <p className="   grey-text d-flex justify-content-end"><a href="#" className="blue-text ml-1"
                      data-toggle="modal" data-target="#signup-form" data-dismiss="modal">
                      Không phải là bác sĩ ?</a></p>
                  </div>

                  <div className="md-form mb-5">
                    <input type="email" id="Form-email1" className="form-control validate"></input>
                    <label data-error="wrong" data-success="right" for="Form-email1">Họ & tên đầy đủ</label>
                  </div>

                  <div className="md-form pd-1">
                    <input type="password" id="Form-pass1" className="form-control validate"></input>
                    <label data-error="wrong" data-success="right" for="Form-pass1">Số điện thoại</label>
                  </div>

                  <div className="md-form pd-1">
                    <input type="password" id="Form-pass1" className="form-control validate"></input>
                    <label data-error="wrong" data-success="right" for="Form-pass1">Tạo một mật khẩu</label>
                  </div>

                  <div className="md-form pd-1">
                    <input type="password" id="Form-pass1" className="form-control validate"></input>
                    <label data-error="wrong" data-success="right" for="Form-pass1">Nhập lại mật khẩu</label>
                  </div>

                  <form>
                    <label><input type="checkbox" name="personality" checked></input> Nhận thông tin & khuyến mãi của
                                chúng tôi qua email</label><br></br>
                  </form>

                  <div className="text-center mb-3">
                    <button id="main-button" type="button" className="btn btn-block  btn-rounded z-depth-1a">Đăng
                                Ký</button>
                  </div>

                </div>
                <div className="modal-footer mx-5 pt-3 mb-1">
                  <p className="font-small grey-text d-flex justify-content-end">Khi bấm nút đăng ký, bạn đã đồng ý
                            với các<a href="#" className="blue-text ml-1">
                      điều khoản</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      
        <section id="home-top">
        <div id="home-top-bkgrd" className="jumbotron jumbotron-fluid">
            <div className="container">
                <div className="col">

                    <div>
                        <h1>hẹn ngay bác sĩ chuyên khoa</h1>
                    </div>
                    <div>
                        <h1><b>đến nhà</b></h1>
                    </div>

                    <div className="row">
                        <ul>
                            <button className="btn" data-toggle="modal" data-target="#booking-form"><b>ĐẶT HẸN KHÁM</b></button>
                        </ul>
                        <ul className="col align-self-center">
                            <div>
                                <h3><b>CHỈ TỪ 350.000Đ</b></h3>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
      </div>
    );
  }
}

export default App;
