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

    // let png = require.context("./assets/img/png/", false, /.*\.png$/);
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
          <nav id="collapsibleNav" class="navbar-expand-lg fixed-top">
            <nav class="container-fluid navbar navbar-expand navbar-light bg-white">

              <div class="navbar-brand">
                <a title="We Care You" href="home.html">
                  <img src="./assets/img/logo/small-logo.png"></img></a>
              </div>


              <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse"
                data-target="#collapsibleNav" aria-controls="collapsibleNavId" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse narbar">
                <ul class="pl-5 navbar-nav mr-auto">

                  <li class="nav-item active">
                    <a class="nav-link" title="Trang Chủ" href="home.html">
                      <span class="menu-icon">
                        <img src="./assets/img/png/experience-icon.png"></img>
                      </span> Trang Chủ</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" title="Dịch Vụ" href="dichvu.html">
                      <span class="menu-icon">
                        <img src="./assets/img/svg/care-service.svg"></img>
                      </span>Dịch Vụ </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" title="Thông Tin Phòng Khám" href="office-info.html">
                      <span class="menu-icon">
                        <img src="./assets/img/png/medicine-thumb.png "></img>
                      </span>Thông Tin Phòng Khám</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" title="Đội Ngũ Bác Sĩ" href="doctor.html">
                      <span class="menu-icon">
                        <img src="./assets/img/png/stethoscope-thumb.png"></img>
                      </span>Đội Ngũ Bác Sĩ </a>
                  </li>
                </ul>
                <div class="btn-toolbar mb-1">
                  <div class="btn-group mr-2">
                    <button class="btn btn-success" data-toggle="modal" data-target="#booking-form"
                    >Đặt Hẹn Khám Ngay</button>
                  </div>

                  <div class="btn-group mr-2">
                    <button class="btn btn-primary" data-toggle="modal">Tải Ứng Dụng Ngay</button>
                  </div>
                </div>
              </div>
            </nav>

            <div id="signin-out-gr-button" class="container-fluid btn-group d-flex justify-content-end">

              <div class="btn-group mr-2">
                <button class="btn btn-light btn-sm rounded-bottom" data-toggle="modal"
                  data-target="#signin-form"><b>Đăng Nhập</b>
                </button>
              </div>

              <div class="btn-group mr-2">
                <button class="btn btn-light btn-sm rounded-bottom" data-toggle="modal"
                  data-target="#signup-form"><b>Đăng Ký</b></button></div>
            </div>
          </nav>
        </section>

        <section id="form-modal">
          <div class="modal fade" id="signin-form" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">

              <div class="modal-content form-elegant">

                <div class="modal-header text-center">
                  <h3 class="modal-title w-100 dark-grey-text font-weight-bold my-3" id="myModalLabel">
                    <strong>Đăng Nhập</strong></h3>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div class="modal-body mx-4">

                  <div class="md-form mb-5">
                    <input type="email" id="Form-email1" class="form-control validate"></input>
                    <label data-error="wrong" data-success="right" for="Form-email1">Tài khoản</label>
                  </div>

                  <div class="md-form pb-3">
                    <input type="password" id="Form-pass1" class="form-control validate"></input>
                    <label data-error="wrong" data-success="right" for="Form-pass1">Mật khẩu</label>
                    <p class="font-small blue-text d-flex justify-content-end">Quên <a href="#"
                      class="blue-text ml-1" data-toggle="modal" data-target="#forgot-pass"
                      data-dismiss="modal">
                      mật khẩu?</a></p>
                  </div>

                  <div class="text-center mb-3">
                    <button id="main-button" type="button" class="btn btn-block btn-rounded z-depth-1a">Đăng
                                Nhập</button>
                  </div>
                  <p class="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> hoặc
                  đăng nhập
                            bằng:</p>

                  <div class="row my-3 d-flex justify-content-center">

                    <button type="button" class="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i
                      class="fab fa-facebook-f text-center"></i></button>

                    <button type="button" class="btn btn-white btn-rounded z-depth-1a"><i
                      class="fab fa-google-plus-g"></i></button>
                  </div>
                </div>

                <div class="modal-footer mx-5 pt-3 mb-1">
                  <p class="font-small grey-text d-flex justify-content-end">Chưa có tài khoản ? <a href="#"
                    class="blue-text ml-1" data-toggle="modal" data-target="#signup-form"
                    data-dismiss="modal">
                    Đăng Ký</a></p>
                </div>
              </div>

            </div>
          </div>

          <div class="modal fade" id="signup-form" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
            aria-hidden="true">

            <div class="modal-dialog" role="document">

              <div class="modal-content form-elegant">

                <div class="modal-header text-center">
                  <h3 class="modal-title w-100 dark-grey-text font-weight-bold my-3" id="myModalLabel">
                    <strong>Đăng Ký Tài Khoản</strong></h3>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div class="modal-body mx-4">

                  <div class="modal-footer mx-5 pt-3 mb-1">
                    <p class="grey-text d-flex justify-content-end">Bạn là một bác sĩ ?<a href="#"
                      class="yellow-text ml-1" data-toggle="modal" data-target="#doctor-signup-form"
                      data-dismiss="modal">
                      Đăng ký ở đây</a></p>
                  </div>

                  <div class="md-form mb-5">
                    <input type="email" id="Form-email1" class="form-control validate"></input>
                    <label data-error="wrong" data-success="right" for="Form-email1">Họ & tên đầy đủ</label>
                  </div>

                  <div class="md-form pd-1">
                    <input type="password" id="Form-pass1" class="form-control validate"></input>
                    <label data-error="wrong" data-success="right" for="Form-pass1">Số điện thoại</label>
                  </div>

                  <div class="md-form pd-1">
                    <input type="password" id="Form-pass1" class="form-control validate"></input>
                    <label data-error="wrong" data-success="right" for="Form-pass1">Tạo một mật khẩu</label>
                  </div>

                  <div class="md-form pd-1">
                    <input type="password" id="Form-pass1" class="form-control validate"></input>
                    <label data-error="wrong" data-success="right" for="Form-pass1">Nhập lại mật khẩu</label>
                  </div>

                  <form>
                    <label><input type="checkbox" name="personality" checked></input> Nhận thông tin & khuyến mãi của
                                chúng tôi qua email</label><br></br>
                  </form>

                  <div class="text-center mb-3">
                    <button id="main-button" type="button" class="btn btn-block  btn-rounded z-depth-1a">Đăng
                                Ký</button>
                  </div>

                </div>

                <div class="modal-footer mx-5 pt-3 mb-1">
                  <p class="font-small grey-text d-flex justify-content-end">Khi bấm nút đăng ký, bạn đã đồng ý
                            với các<a href="#" class="blue-text ml-1">
                      điều khoản</a></p>
                </div>
              </div>

            </div>
          </div>

          <div class="modal fade" id="doctor-signup-form" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">

              <div class="modal-content form-elegant">

                <div class="modal-header text-center">
                  <h3 class="modal-title w-100 dark-grey-text font-weight-bold my-3" id="myModalLabel">
                    <strong>Đăng Ký Tài Khoản</strong></h3>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div class="modal-body mx-4">

                  <div class="modal-footer mx-5 pt-3 mb-1">
                    <p class="   grey-text d-flex justify-content-end"><a href="#" class="blue-text ml-1"
                      data-toggle="modal" data-target="#signup-form" data-dismiss="modal">
                      Không phải là bác sĩ ?</a></p>
                  </div>

                  <div class="md-form mb-5">
                    <input type="email" id="Form-email1" class="form-control validate"></input>
                    <label data-error="wrong" data-success="right" for="Form-email1">Họ & tên đầy đủ</label>
                  </div>

                  <div class="md-form pd-1">
                    <input type="password" id="Form-pass1" class="form-control validate"></input>
                    <label data-error="wrong" data-success="right" for="Form-pass1">Số điện thoại</label>
                  </div>

                  <div class="md-form pd-1">
                    <input type="password" id="Form-pass1" class="form-control validate"></input>
                    <label data-error="wrong" data-success="right" for="Form-pass1">Tạo một mật khẩu</label>
                  </div>

                  <div class="md-form pd-1">
                    <input type="password" id="Form-pass1" class="form-control validate"></input>
                    <label data-error="wrong" data-success="right" for="Form-pass1">Nhập lại mật khẩu</label>
                  </div>

                  <form>
                    <label><input type="checkbox" name="personality" checked></input> Nhận thông tin & khuyến mãi của
                                chúng tôi qua email</label><br></br>
                  </form>

                  <div class="text-center mb-3">
                    <button id="main-button" type="button" class="btn btn-block  btn-rounded z-depth-1a">Đăng
                                Ký</button>
                  </div>

                </div>

                <div class="modal-footer mx-5 pt-3 mb-1">
                  <p class="font-small grey-text d-flex justify-content-end">Khi bấm nút đăng ký, bạn đã đồng ý
                            với các<a href="#" class="blue-text ml-1">
                      điều khoản</a></p>
                </div>
              </div>

            </div>
          </div>

          <div class="modal fade" id="booking-form" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">

              <div class="modal-content form-elegant">

                <div class="modal-header text-center">
                  <h2 class="modal-title w-100 dark-grey-text font-weight-bold my-3"><strong>Đặt Lịch Khám Tại Nhà
                            </strong></h2>

                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>

                </div>

                <h5 class="modal-header dark-grey-text text-center">Đội ngũ Chăm sóc Khách hàng của chúng tôi sẽ
                liên lạc
                        để cung cấp thông tin khi thuận tiện và sớm nhất cho bạn.</h5>

                <h6 class="modal-header d-flex justify-content-center blue-text "><b>Liên hệ với chúng tôi tại:</b>
                </h6>
                <p id="phone-number" class="container-fluid">
                  <span class="fa fa-phone d-flex justify-content-center">1900 1009</span> </p>

                <div class="modal-body mx-3">

                  <div class="md-form">
                    <input type="text" id="input-name" class="form-control validate"></input>
                    <label data-error="wrong" data-success="right" for="Form-email1">Họ và tên</label>
                  </div>

                  <div class="md-form pb-3">
                    <input type="number" id="input-phone" class="form-control validate"></input>
                    <label data-error="wrong" data-success="right" for="Form-pass1">Số điện thoại</label>
                  </div>

                  <div class="md-form">
                    <textarea type="text" id="input-note" class="form-control validate" cols="10"
                      rows="4"></textarea>
                    <label class="pl-2" data-error="wrong" data-success="right" for="Form-pass1">Ghi chú</label>
                  </div>

                  <div class="row my-3 d-flex justify-content-center">
                    <div class="text-center mr-3">
                      <button id="cancel-button" type="button" data-dismiss="modal"
                        class="btn btn-lg btn-block btn-rounded z-depth-1a">
                        Hủy</button>
                    </div>

                    <div class="text-center mr-3">
                      <button id="main-button" type="button"
                        class="btn btn-lg btn-block btn-rounded z-depth-1a">Gửi</button>
                    </div>
                  </div>

                </div>

                <div class="modal-footer mx-5 pt-3 mb-1">
                  <p class="font-small grey-text d-flex justify-content-end">Chưa có tài khoản ? <a
                    class="blue-text ml-1" data-toggle="modal" data-target="#signup-form"
                    data-dismiss="modal">
                    Đăng Ký</a></p>
                </div>
              </div>

            </div>
          </div>

          <div class="modal fade" id="forgot-pass" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">

              <div class="modal-content form-elegant">

                <div class="modal-header text-center">
                  <h6 class="modal-title w-100 dark-grey-text font-weight-bold my-3" id="myModalLabel">
                    Nhập email/số điện thoại bạn đã đăng ký cho tài khoản. <br></br>
                            Chúng tôi sẽ gửi một email/otp với hướng dẫn để lấy lại mật khẩu của bạn.</h6>

                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div class="modal-body mx-3">
                  <div class="md-form">
                    <input type="email ; number" id="forgot-pass" class="form-control validate"></input>
                    <label data-error="wrong" data-success="right" for="Form-pass1">Số điện thoại/Email</label>
                  </div>
                </div>

                <div class="row justify-content-md-center mb-3">
                  <button id="main-button" type="button" class="btn z-depth-1a d-flex">Gửi</button>
                </div>

              </div>
            </div>
          </div>
        </section>
      
        <section id="home-top">
        <div id="home-top-bkgrd" class="jumbotron jumbotron-fluid">
            <div class="container">
                <div class="col">

                    <div>
                        <h1>hẹn ngay bác sĩ chuyên khoa</h1>
                    </div>
                    <div>
                        <h1><b>đến nhà</b></h1>
                    </div>

                    <div class="row">
                        <ul>
                            <button class="btn" data-toggle="modal" data-target="#booking-form"><b>ĐẶT HẸN KHÁM</b></button>
                        </ul>
                        <ul class="col align-self-center">
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
