import React from "react";
import { Link } from "react-router-dom";
import Flex1 from '../../components/images/flex.jpg'
import Flex2 from '../../components/images/flex2.jpg'

export const Flex = () => {
  return (
    <>
      <div class="container-fluid bg-secondary mb-5">
        <div
          class="d-flex flex-column align-items-center justify-content-center"
          style={{minHeight: '400px'}}
        >
          <h3 class="display-4 font-weight-bold text-white">Flex</h3>
          <div class="d-inline-flex text-white">
            <p class="m-0"><Link to='/' class="text-white" style={{textDecoration: 'underline'}}>Главная</Link></p>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="d-flex" style={{justifyContent: 'space-between', flexWrap: 'wrap'}}>
          <img class="flex-img" style={{width: '48%', height: '350px', objectFit: 'cover', border: '1px solid gray', padding: '20px', borderRadius: '15px'}} src={Flex1} alt="" />
          <img class="flex-img" style={{width: '48%', height: '350px', objectFit: 'cover', border: '1px solid gray', padding: '20px', borderRadius: '15px'}} src={Flex2} alt="" />
        </div>
        <div class="card mt-3">
          <div class="card-body">
            <p style={{fontSize: '20px'}}>
              <span style={{fontWeight: 'bold', fontSize: '25px'}}>Программа обмена «Будущие лидеры» (FLEX)</span> – это программа культурного обмена Бюро по Делам образования и культуры при Государственном Департаменте США, которая администрируется в Кыргызской Республике Представительством «Американские Советы по международному образованию: АСПРЯЛ/АКСЕЛС» (АКСЕЛС) при поддержке Министерства образования и науки Кыргызской Республики. Программа предоставляет старшеклассникам по всей Кыргызской Республике шанс обучения в американской школе и проживания в американской семье на один академический год.

              Основная цель программы FLEX – улучшение взаимного понимания, развитие и укрепление долгосрочных отношений между гражданами Соединенных Штатов и другими народами и странами. Государственный Департамент США поддерживает обмен старшеклассниками из более чем 50 стран через программу FLEX и другие программы на один академический год. Начиная с создания программы в 1993 году, в программе FLEX приняли участие более 24,000 старшеклассников.
              <span style={{fontWeight: 'bold'}}>Tуры:</span>
              1 тур — три вопроса по которым необходимо написать три эссе; 2 тур — грамматический тест, состоящий из 12 вопросов; 3 тур — самый продолжительный тур, который состоит из написание трех эссе, анкетирования, интервью и углубленного грамматического теста по английскому языку.
            </p>
          </div>
        </div>
        <div class="mt-4 d-flex justify-content-around mt-lg-4" style={{flexWrap: 'wrap', gap: '20px'}}>
          <iframe width="500" height="300" src="https://www.youtube.com/embed/U3IYYOR9IL8" title="Q&amp;A про программу FLEX🇺🇸🇰🇿| ответы от финалистки flex" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="500" height="300" src="https://www.youtube.com/embed/LqYj7DCrg_U" title="Как 100% пройти 1 тур программы FLEX | Полезные советы | Все о 1 туре" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </>
  )
}