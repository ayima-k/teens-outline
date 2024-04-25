import React from "react";
import Logo from '../images/logo-white.png'
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div
      className="container-fluid bg-secondary text-white mt-5 py-5 px-sm-3 px-md-5"
    >
      <div className="row pt-5 d-flex justify-content-between">
        <div className="col-lg-3 col-md-6 mb-5">
          <a
            href=""
            className="navbar-brand font-weight-bold text-primary m-0 mb-4 p-0"
            style={{fontSize: '40px', lineHeight: '40px'}}
          >
            <span className="text-white"><img className="logo" style={{width: '190px', height: '70px'}}src={Logo} alt=""/></span>
          </a>
          <p>
            Данный сайт создан для учеников, которые хотят подготовиться к различным общим и международным тестированиям, а так же для обычных пользователей, интересующихся темой саморазвития. Все предоставленные ресурсы находятся в свободном для всех доступе и сформированы специально для удобного и понятного использования.
          </p>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h3 className="text-primary mb-4">Связь с нами</h3>
          <div className="d-flex">
            <h4 className="fa fa-map-marker-alt text-primary"></h4>
            <div className="pl-3">
              <h5 className="text-white">Адрес</h5>
              <p>Гапар Айтиева, 71, Osh, Kyrgyzstan</p>
            </div>
          </div>
          <div className="d-flex">
            <h4 className="fa fa-envelope text-primary"></h4>
            <div className="pl-3">
              <h5 className="text-white">Email</h5>
              <p>elmyrza.do@gmail.com</p>
            </div>
          </div>
          <div className="d-flex">
            <h4 className="fa fa-phone-alt text-primary"></h4>
            <div className="pl-3">
              <h5 className="text-white">Тел. номер</h5>
              <p>+996 990 990 349</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h3 className="text-primary mb-4">Быстрый доступ</h3>
          <div className="d-flex flex-column justify-content-start">
            <Link to='/' className="text-white mb-2"><i className="fa fa-angle-right mr-2"></i>Главная</Link
            >
            <Link to="/career" className="text-white mb-2"><i className="fa fa-angle-right mr-2"></i>Профориентация</Link
            >
            <Link to="/flex" className="text-white mb-2"><i className="fa fa-angle-right mr-2"></i>Flex</Link
            >
            <Link to="/self-d" className="text-white mb-2"><i className="fa fa-angle-right mr-2"></i>Саморазвитие</Link
            >
            <Link to="/tests" className="text-white mb-2"><i className="fa fa-angle-right mr-2"></i>Тесты</Link
            >
          </div>
        </div>
      </div>
      <div
        className="container-fluid pt-5"
        style={{borderTop: '1px solid rgba(23, 162, 184, 0.2)'}}
      >
        <p className="m-0 text-center text-white">
          &copy;
          <a className="text-primary font-weight-bold" href="#">Teen's outline</a>.
          All Rights Reserved.
          Designed by
          <span className="text-primary font-weight-bold"> ANTIHACKERS</span>
        </p>
      </div>
    </div>
  )
}