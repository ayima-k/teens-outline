import React from "react";
import { Link } from "react-router-dom";

export const Tests = () => {
  return (
    <>
      <div className="container-fluid bg-secondary mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{minHeight: '400px'}}
        >
          <h3 className="display-4 font-weight-bold text-white">Тесты</h3>
          <div className="d-inline-flex text-white">
            <p className="m-0"><Link to='/' className="text-white" style={{textDecoration: 'underline'}}>Главная</Link></p>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5">
        <div className="text-center pb-2">
          <h1 className="mb-4">Тесты</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5">
              <div className="card border-0 bg-light shadow-sm pb-2">
                <div className="card-body text-center" style={{height: '420px'}}>
                  <h4 className="card-title">ОРТ</h4>
                  <p className="card-text">
                    Общереспубликанское тестирование (ОРТ) - обязательный экзамен для абитуриентов, поступающих в высшие учебные заведения. ОРТ проводится в Кыргызстане с 2002 года по указу президента страны. Результаты Общереспубликанского тестирования являются обязательными для зачисления на все формы обучения в вузы независимо от форм собственности. Не требуются результаты ОРТ при зачислении в вузы культуры и искусства и на специальности физической культуры и спорта.
                  </p>
                </div>
                <div className="card-footer bg-transparent d-flex justify-content-center">
                  <iframe width="440" height="190" src="https://www.youtube.com/embed/WAPPEPPmNh0" title="ПРАВИЛА УЧАСТНИКА ОРТ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <a href="tests.html" className="btn btn-primary px-4 mx-auto mb-4">Подробнее про подготовку</a>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="card border-0 bg-light shadow-sm pb-2">
                <div className="card-body text-center" style={{height: '420px'}}>
                  <h4 className="card-title">TOEFL</h4>
                  <p className="card-text">
                    Структура экзамена
                    Классический TOEFL iBT состоит из 4 частей: чтение и ответы на вопросы, аудирование и ответы на вопросы, говорение и письменная часть. Продолжительность тестирования — 3 часа.
                    Для TOEFL PBT предусмотрены всего 3 части: чтение, аудирование и письменные ответы на вопросы. Продолжительность экзамена — 2 часа 50 минут.
                    Второе задание — это эссе. Нужно выразить свое мнение по заданной теме.
                    На оба задания отводится 50 минут.
                  </p>
                </div>
                <div className="card-footer bg-transparent d-flex justify-content-center">
                  <iframe width="300" height="190" src="https://www.youtube.com/embed/4PQu42sd4bI" title="Как сдать TOEFL в 2023 и не облажаться!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <a href="tests.html" className="btn btn-primary px-4 mx-auto mb-4">Подробнее про подготовку</a>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="card border-0 bg-light shadow-sm pb-2">
                <div className="card-body text-center" style={{height: '420px'}}>
                  <h4 className="card-title">IELTS</h4>
                  <p className="card-text">
                    IELTS (англ. International English Language Testing System) — международная система оценки знания английского языка.
                    Позволяет определить уровень и навыки владения английским у людей, для которых он не является родным[1].
                    IELTS — наиболее востребованный тест английского языка для учёбы и иммиграции в Великобританию, Канаду, Австралию и Новую Зеландию (конкурирующий тест TOEFL наиболее популярен в США).
                    1. Listening.
                    2. Reading.
                    3. Writing.
                    4. Speaking.
                  </p>
                </div>
                <div className="card-footer bg-transparent d-flex justify-content-center">
                  <iframe width="300" height="190" src="https://www.youtube.com/embed/4cOl9QnQLZE" title="Разбор структуры экзамена IELTS." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <a href="tests.html" className="btn btn-primary px-4 mx-auto mb-4">Подробнее про подготовку</a>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="card border-0 bg-light shadow-sm pb-2">
                <div className="card-body text-center" >
                  <h4 className="card-title">SAT</h4>
                  <p className="card-text">
                    SAT (Scholastic Assessment Test — Академический оценочный тест) — стандартизированный тест для оценки полученных во время учёбы в школе знаний. Экзамен SAT обязателен для поступления во многие колледжи или университеты США и Канады.
                    SAT разрабатывается и проводится неправительственной организацией College Board, которая существует с 1900 года. College Board — связующие звено между университетом и студентом, которое облегчает и систематизирует процесс поступления. На сайте организации есть вся необходимая информация о тесте: даты, места проведения, стоимость, пробные варианты, правила сдачи и полезные советы вплоть до того, что приносить с собой в тест-центр и за сколько минут приходить.
                  </p>
                </div>
                <div className="card-footer bg-transparent d-flex justify-content-center">
                  <iframe width="300" height="190" src="https://www.youtube.com/embed/FLEgFyING4o" title="Что такое тест SAT? Подготовка к SAT и сдача теста на максимальный бал / MBA Strategy" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <a href="tests.html" className="btn btn-primary px-4 mx-auto mb-4">Подробнее про подготовку</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}