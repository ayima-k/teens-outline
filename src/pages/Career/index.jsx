import React from "react";
import { Link } from "react-router-dom";
import CareerImg from '../../components/images/career-img.jpg'

export const Career = () => {
  return (
    <>
      <div class="container-fluid bg-secondary mb-5">
        <div
          class="d-flex flex-column align-items-center justify-content-center"
          style={{minHeight: '400px'}}
        >
          <h3 class="display-4 font-weight-bold text-white">Профориентация</h3>
          <div class="d-inline-flex text-white">
            <p class="m-0"><Link to='/' class="text-white" style={{textDecoration: 'underline'}}>Главная</Link></p>
          </div>
        </div>
      </div>

      <div class="container-fluid py-5">
        <div class="container">
          <div class="row align-items-center flex-wrap-wrap justify-content-center">
            <div class="col-lg-4 d-flex" style={{flexDirection: 'column', alignItems: 'center'}}>
              <h1 style={{fontSize: 'xx-large'}}>
                Сделай осознанный выбор!
              </h1>
              <img
                class="img-fluid rounded mb-0 mb-lg-0"
                style={{width: '400px', height: '340px', objectFit: 'cover'}}
                src="https://www.s-vfu.ru/universitet/rukovodstvo-i-struktura/instituty/grf/%D0%BF%D1%80%D0%BE%D1%84%D0%BE%D1%80%D0%B8%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F.png.crdownload"
                alt=""
              />
              <div class="career-video d-flex justify-content-center">
                <iframe class="career-yout" src="https://www.youtube.com/embed/I2ngJShaCac" title="Как определиться с выбором профессии подроcтку | Кем стать, куда поступать после 9 и 11 класса" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </div>
            <div class="col-lg-6">
              <p class="section-title pr-5">
                <span class="pr-2">Узнайте какая профессия подходит именно для вас</span>
              </p>
              <h1 style={{fontSize: 'larger', fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}} class="mb-4">Выбор правильной профессии — важный этап в жизни каждого человека. Вот пошаговая инструкция по выбору профессии:</h1>
              <p>
                1)Самоанализ:                  

                Оцените свои интересы, увлечения, ценности и навыки. Рассмотрите, что вам нравится делать в свободное время и что приносит удовлетворение.                                                                  <p></p>
                2)Оценка навыков и способностей:
                Определите ваши сильные стороны, умения и способности. Рассмотрите, где вы достигаете лучших результатов и чувствуете себя уверенно.
                <p></p>
                3)Изучение рынка труда:
                
                Исследуйте текущее состояние рынка труда. Определите востребованные профессии, требования к квалификации и перспективы развития.
                <p></p>         
                4)Образование и подготовка:
                
                Рассмотрите образовательные программы, связанные с интересующими вас областями. Определите, какие курсы, учебные заведения и сертификации могут помочь вам достичь целей.
                <p></p>
                5)Опыт и стажировки:
                
                Получите практический опыт в выбранной области. Стажировки и практика помогут вам лучше понять, соответствует ли профессия вашим ожиданиям.
                <p></p>
                6)Консультации с профессионалами:
                
                Общайтесь с людьми, работающими в выбранной области. Задавайте вопросы о их опыте, вызовах и достижениях. Это может предоставить ценную информацию.
                <p></p>
                7)Оценка финансовых аспектов:
                
                Рассмотрите финансовые аспекты выбранной профессии, такие как уровень заработной платы, перспективы роста и стабильность.
                Адаптация к будущему:
                
                Учтите тенденции развития отрасли. Иногда необходимо выбирать профессии, которые будут востребованы в будущем, а не только сегодня.
                <p></p>
                8)Принятие решения:
                
                Сводите все полученные данные воедино и примите обоснованное решение. Выберите профессию, которая соответствует вашим интересам, навыкам и обеспечивает личное удовлетворение.
                <p></p>
                9)Постоянное развитие:
                
                Профессиональный рост требует постоянного обучения и развития. Будьте готовы обновлять свои навыки и следить за изменениями в области труда.
                Эти шаги могут помочь вам принять информированное решение при выборе профессии, которая соответствует вашим целям и обстоятельствам.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1 style={{textAlign: 'center', margin: '0'}}>Проверь себя!</h1>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px'}} class="py-3 px-sm-3 px-md-5">
        <div class="link-ease-in-out proiti-test" style={{width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>  
          <p style={{fontSize: 'larger'}}> 
          Профориентационные тесты – это вид психологической диагностики. Они имеют узкую направленность на выявление склонностей к профессиональной деятельности исходя из ценностей и мотивов личности. Эпоха «бума тестирования» с целью профпригодности приходится на середину 40-х годов ХХ века.
          Тест определит, к каким предметам ученик имеет склонность и какие направления подготовки ему стоит рассматривать для поступления. Выбрать профессию. Если вы не можете выбрать из большого количества вариантов профессий или, наоборот, их нет вовсе, тест поможет понять, какие виды работы подходят именно вам</p>
          <button class="btn btn-red btn-test" style={{width: '40%'}}>
            <a 
            style={{fontSize: 'large', color: '#fff'}}
            target="_blank" href="https://testometrika.com/business/test-to-determine-career/">Пройти тест!</a>
          </button>
        </div>
        <div>  
          <img class="img-fluid" style={{width: '500px', borderRadius: '20px', objectFit: 'cover'}} src={CareerImg} alt="" />
        </div> 
      </div>  
    </>
  )
}