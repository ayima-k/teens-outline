import React from "react";
import { Link } from "react-router-dom";
import Book1 from '../../components/images/book1.jpeg'

export const SelfD = () => {

  function redirect() {
    window.location.href = "book1.html";
  }

  function redirect1() {
    window.location.href = "time.html";
  }

  function redirect3() {
    window.location.href = "fein.html";
  }

  function redirect2() {
    window.location.href = "orat.html";
  }

  function redirect4() {
    window.location.href = "focus.html";
  }

  return (
    <>
      <div className="container-fluid bg-secondary mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{minHeight: '400px'}}
        >
          <h3 className="display-4 font-weight-bold text-white">Саморазвитие</h3>
          <div className="d-inline-flex text-white">
            <p className="m-0"><Link to='/' className="text-white" style={{textDecoration: 'underline'}}>Главная</Link></p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container">
          <div className="row rowmd" style={{display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-between'}}>
            <div className="card cardS cardSam" style={{width: '47%', height: '400px'}}>
              <div className="card-body" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h2>Что такое саморазвитие?</h2>
                <p>Саморазвитие — это процесс стремления к личностному и профессиональному развитию, активное улучшение себя, приобретение новых знаний, навыков и опыта с целью стать лучшей версией себя.</p>
              </div>
            </div>
            <div className="card cardS mb-3" style={{width: '50%', height: '400px'}}>
              <div className="card-body card-bodyS" style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between'}}>
                <img src={Book1} style={{width: '200px', height: '300px', objectFit: 'cover', paddingBottom: '1rem', borderRadius: '30px'}} alt="" />
                <div className="lg-card">
                  <h5 className="card-title">Будь лучшей версией себя</h5>
                  <p className="card-text">"Будь лучшей версией себя" — стремление к постоянному росту и самосовершенствованию, основанное на личных усилиях для достижения высших потенциальных возможностей и благополучия.</p>
                  <p className="card-text"><small className="text-body-secondary">Дэн Вальдшмидт</small></p>
                  <button onclick={() => redirect()} className="btn btn-primary px-4 mx-auto mb-4">Читать</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div className="container-fluid pt-5">
        <div className="container pb-3">
          <div className="row">
            <div className="col-lg-3 col-md-6 pb-1">
              <div
                className="d-flex bg-light shadow-sm border-top rounded mb-4 p-3"
              >
                <div >
                  <div style={{height: '230px'}}>
                    <h4>Управление временем</h4>
                    <p className="m-0">
                      Управление временем — это организация и распределение времени для достижения поставленных целей и задач.
                    </p>
                  </div>
                  <button onclick={() => redirect1()} className="btn btn-primary px-4 mx-auto">Изучить</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 pb-1">
              <div
                className="d-flex bg-light shadow-sm border-top rounded mb-4 p-3"
              >
                <div >
                  <div style={{height: '230px'}}>
                    <h4>Ораторское искусство</h4>
                    <p className="m-0">
                      Ораторское искусство — искусство говорения перед аудиторией с целью убеждения и воздействия.
                    </p>
                  </div>
                  <button onclick={() => redirect2()} className="btn btn-primary px-4 mx-auto">Изучить</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 pb-1">
              <div
                className="d-flex bg-light shadow-sm border-top rounded mb-4 p-3"
              >
                <div >
                  <div style={{height: '230px'}}>
                    <h4>Техника Фейнмана</h4>
                    <p className="m-0">
                      Учись в 2 раза меньше, но в разы лучше и быстрее!
                    </p>
                  </div>
                  <button onclick={() => redirect3()} className="btn btn-primary px-4 mx-auto ">Изучить</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 pb-1">
              <div
                className="d-flex bg-light shadow-sm border-top rounded mb-4 p-3"
              >
                <div >
                  <div style={{height: '230px'}}>
                    <h4>Фокусирование внимания</h4>
                    <p className="m-0">
                      Фокусирование внимания — сосредотачивание ума на конкретной задаче для повышения эффективности и точности.
                    </p>
                  </div>
                  <button onClick={() => redirect4()} className="btn btn-primary px-4 mx-auto">Изучить</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}