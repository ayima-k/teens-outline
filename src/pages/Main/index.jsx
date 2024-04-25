import React from "react";
import Teens from '../../components/images/teens.png'
import Tsoomo from '../../components/images/цоомо.jpeg'
import Engforme from '../../components/images/engforme.jpg'
import Ayana from '../../components/images/ayana.png'
import Albert from '../../components/images/albert.jpg'

export const Main = () => {

  
  return (
    <>
      <div class="container-fluid bg-secondary px-0 px-md-5 mb-5">
        <div class="row align-items-center px-3">
          <div class="col-lg-6 text-center mt-mx">
            <h1 class="display-5 font-weight-bold text-white">
              Творите свое будущее!
            </h1>
            <p class="text-white mb-4">
              Данный сайт создан для учеников, которые хотят подготовиться к различным  общим и международным тестированиям, а так же для обычных пользователей, интересующихся темой саморазвития. Все предоставленные ресурсы находятся в свободном для всех доступе и сформированы специально для удобного и понятного использования.
            </p>
            <a href="#about" class="btn btn-red mt-1 py-3 px-5">Узнать подробнее...</a>
          </div>
          <div class="col-lg-6 text-center text-lg-right">
            <img id="teens2" class="img-fluid teensPhoto mt-5 mb-5" src={Teens} alt="" />
          </div>
        </div>
      </div>

      <div id="about" class="container-fluid py-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5">
              <img
                class="img-fluid rounded mb-5 mb-lg-0"
                src="https://i0.wp.com/www.myfamilyguide.com/wp-content/uploads/2019/01/10-most-popular-things-with-teens-1.jpg?fit=612%2C408&ssl=1"
                alt=""
              />
            </div>
            <div class="col-lg-7">
              <p class="section-title pr-5">
                <span class="pr-2">О нас</span>
              </p>
              <h1 class="mb-4">Teen's outline</h1>
              <div class="row pt-2 pb-4">
                <div class="col-6 col-md-8">
                  <ul class="list-inline m-0">
                    <li class="py-2 border-top border-bottom">
                      <i class="fa fa-check text-primary mr-3"></i>Подготовка к тестам
                    </li>
                    <li class="py-2 border-bottom">
                      <i class="fa fa-check text-primary mr-3"></i>Техники обучения
                    </li>
                    <li class="py-2 border-bottom">
                      <i class="fa fa-check text-primary mr-3"></i>Программы обмена
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid pt-5">
        <div class="text-center pb-2">
          <h1 class="mb-4">Тесты</h1>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-4 mb-5">
              <div class="card border-0 bg-light shadow-sm pb-2">
                <div class="card-body text-center" style={{height: '420px'}}>
                  <h4 class="card-title">ОРТ</h4>
                  <p class="card-text">
                    Общереспубликанское тестирование (ОРТ) - обязательный экзамен для абитуриентов, поступающих в высшие учебные заведения. ОРТ проводится в Кыргызстане с 2002 года по указу президента страны. Результаты Общереспубликанского тестирования являются обязательными для зачисления на все формы обучения в вузы независимо от форм собственности. Не требуются результаты ОРТ при зачислении в вузы культуры и искусства и на специальности физической культуры и спорта.
                  </p>
                </div>
                <div class="card-footer bg-transparent d-flex justify-content-center">
                  <iframe width="440" height="190" src="https://www.youtube.com/embed/WAPPEPPmNh0" title="ПРАВИЛА УЧАСТНИКА ОРТ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <a href="tests.html" class="btn btn-primary px-4 mx-auto mb-4">Подробнее про подготовку</a>
              </div>
            </div>
            <div class="col-lg-4 mb-5">
              <div class="card border-0 bg-light shadow-sm pb-2">
                <div class="card-body text-center" style={{height: '420px'}}>
                  <h4 class="card-title">TOEFL</h4>
                  <p class="card-text">
                    Структура экзамена
                    Классический TOEFL iBT состоит из 4 частей: чтение и ответы на вопросы, аудирование и ответы на вопросы, говорение и письменная часть. Продолжительность тестирования — 3 часа.
                    Для TOEFL PBT предусмотрены всего 3 части: чтение, аудирование и письменные ответы на вопросы. Продолжительность экзамена — 2 часа 50 минут.
                    Второе задание — это эссе. Нужно выразить свое мнение по заданной теме.
                    На оба задания отводится 50 минут.
                  </p>
                </div>
                <div class="card-footer bg-transparent d-flex justify-content-center">
                  <iframe width="300" height="190" src="https://www.youtube.com/embed/4PQu42sd4bI" title="Как сдать TOEFL в 2023 и не облажаться!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <a href="tests.html" class="btn btn-primary px-4 mx-auto mb-4">Подробнее про подготовку</a>
              </div>
            </div>
            <div class="col-lg-4 mb-5">
              <div class="card border-0 bg-light shadow-sm pb-2">
                <div class="card-body text-center" style={{height: '420px'}}>
                  <h4 class="card-title">IELTS</h4>
                  <p class="card-text">
                    IELTS (англ. International English Language Testing System) — международная система оценки знания английского языка.
                    Позволяет определить уровень и навыки владения английским у людей, для которых он не является родным[1].
                    IELTS — наиболее востребованный тест английского языка для учёбы и иммиграции в Великобританию, Канаду, Австралию и Новую Зеландию (конкурирующий тест TOEFL наиболее популярен в США).
                    1. Listening.
                    2. Reading.
                    3. Writing.
                    4. Speaking.
                  </p>
                </div>
                <div class="card-footer bg-transparent d-flex justify-content-center">
                  <iframe width="300" height="190" src="https://www.youtube.com/embed/4cOl9QnQLZE" title="Разбор структуры экзамена IELTS." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <a href="tests.html" class="btn btn-primary px-4 mx-auto mb-4">Подробнее про подготовку</a>
              </div>
            </div>
            <div class="col-lg-4 mb-5">
              <div class="card border-0 bg-light shadow-sm pb-2">
                <div class="card-body text-center" >
                  <h4 class="card-title">SAT</h4>
                  <p class="card-text">
                    SAT (Scholastic Assessment Test — Академический оценочный тест) — стандартизированный тест для оценки полученных во время учёбы в школе знаний. Экзамен SAT обязателен для поступления во многие колледжи или университеты США и Канады.
                    SAT разрабатывается и проводится неправительственной организацией College Board, которая существует с 1900 года. College Board — связующие звено между университетом и студентом, которое облегчает и систематизирует процесс поступления. На сайте организации есть вся необходимая информация о тесте: даты, места проведения, стоимость, пробные варианты, правила сдачи и полезные советы вплоть до того, что приносить с собой в тест-центр и за сколько минут приходить.
                  </p>
                </div>
                <div class="card-footer bg-transparent d-flex justify-content-center">
                  <iframe width="300" height="190" src="https://www.youtube.com/embed/FLEgFyING4o" title="Что такое тест SAT? Подготовка к SAT и сдача теста на максимальный бал / MBA Strategy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <a href="tests.html" class="btn btn-primary px-4 mx-auto mb-4">Подробнее про подготовку</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid pt-5">
        <div class="container">
          <div class="text-center pb-2">
            <h1 class="mb-4">Дополнительные ресурсы</h1>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-3 text-center team mb-5">
              <div
                class="position-relative overflow-hidden mb-4"
                style={{borderRadius: "100%"}}
              >
                <img class="img-fluid w-100" src={Tsoomo} alt="" />
                <div
                  class="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute"
                >
                  <a
                    class="btn btn-outline-light text-center mr-2 px-0"
                    style={{width: '38px', height: '38px'}}
                    href="https://www.youtube.com/@user-ot1xd4io5n"
                    ><i class="fab fa-youtube"></i
                  ></a>
                </div>
              </div>
              <h4>ЦООМО</h4>
              <i>Подготовка к ОРТ</i>
            </div>
            <div class="col-md-6 col-lg-3 text-center team mb-5">
              <div
                class="position-relative overflow-hidden mb-4"
                style={{borderRadius: '100%'}}
              >
                <img class="img-fluid w-100" src={Engforme} alt="" />
                <div
                  class="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute"
                >
                  <a
                    class="btn btn-outline-light text-center px-0"
                    style={{width: '38px', height: '38px'}}
                    href="https://www.youtube.com/@EngForMe"
                    ><i class="fab fa-youtube"></i
                  ></a>
                </div>
              </div>
              <h4>English for me</h4>
              <i>Подготовка к IELTS, TOEFL</i>
            </div>
            <div class="col-md-6 col-lg-3 text-center team mb-5">
              <div
                class="position-relative overflow-hidden mb-4"
                style={{borderRadius: "100%"}}
              >
                <img class="img-fluid w-100" src={Ayana} alt="" />
                <div
                  class="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute"
                >
                  <a
                    class="btn btn-outline-light text-center mr-2 px-0"
                    style={{width: '38px', height: '38px'}}
                    href="https://www.instagram.com/itsayanasspp/"
                    ><i class="fab fa-instagram"></i
                  ></a>
                </div>
              </div>
              <h4>Аяна</h4>
              <i>FLEX финалист</i>
            </div>
            <div class="col-md-6 col-lg-3 text-center team mb-5">
              <div
                class="position-relative overflow-hidden mb-4"
                style={{borderRadius: "100%"}}
              >
                <img class="img-fluid w-100" src={Albert} alt="" />
                <div
                  class="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute"
                >
                  <a
                    class="btn btn-outline-light text-center mr-2 px-0"
                    style={{width: '38px', height: '38px'}}
                    href="https://www.youtube.com/@albertt/videos"
                    ><i class="fab fa-youtube"></i
                  ></a>
                </div>
              </div>
              <h4>Алберт</h4>
              <i>Саморазвитие</i>
            </div>
          </div>
        </div>
      </div>

      <a href="#" class="btn btn-primary p-3 back-to-top"
        ><i class="fa fa-angle-double-up"></i
      ></a>
    </>
  )
}