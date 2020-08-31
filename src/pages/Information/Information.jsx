import React from 'react';
import { Collapse } from 'antd';

import './Information.css';
const { Panel } = Collapse;

function callback(key) {
    console.log(key);
}

const Information = () => (
    <>
        <Collapse onChange={callback} accordion>
            <Panel header="Профилактика" key="1">
                <p>
                        Чтобы защитить себя и окружающих, 
                        пользуйтесь проверенной информацией о болезни и принимайте необходимые меры профилактики. 
                        Следуйте рекомендациям местных органов здравоохранения.
                </p>
                <hr className="hr-circle" />
                <p>
                    <h4 className="p-header">
                            Для предупреждения распространения COVID-19:
                    </h4>
                    <ul>
                        <li>
                                Соблюдайте правила гигиены рук. 
                                Часто мойте руки водой с мылом или обрабатывайте их спиртосодержащим антисептиком для рук.
                        </li>
                        <li>
                                Держитесь на безопасном расстоянии от чихающих или кашляющих людей.
                        </li>
                        <li>
                                Носите маску, когда находитесь в окружении других людей.
                        </li>
                        <li>
                                Не прикасайтесь руками к глазам, рту или носу.
                        </li>
                        <li>
                                При кашле или чихании прикрывайте рот и нос локтевым сгибом или платком.
                        </li>
                        <li>
                                Если вы чувствуете недомогание, оставайтесь дома.
                        </li>
                        <li>
                                В случае повышения температуры, 
                                появления кашля и одышки обратитесь за медицинской помощью.
                        </li>
                    </ul>
                </p>
                <p>
                        Чем раньше вы обратитесь за помощью, 
                        тем быстрее вас направят к нужному врачу. 
                        Так вы защитите себя и предотвратите распространение вирусов и других инфекций.
                </p>
                <p>
                    <h4 className="p-header">
                            Маски
                    </h4>
                        Надев маску, вы поможете предотвратить передачу вируса от себя другим людям. 
                        Одних только масок недостаточно для защиты от вируса COVID-19. 
                        Помимо использования масок также следует соблюдать безопасную дистанцию и 
                        правила гигиены рук. Следуйте рекомендациям местных органов здравоохранения.
                </p>
            </Panel>
            <Panel header="Симптомы" key="2">
                <p>
                        Коронавирусная инфекция COVID-19 воздействует на различные группы людей в разной степени. 
                        У большинства инфицированных болезнь протекает в легкой или средней форме тяжести, 
                        и им не требуется госпитализация.
                </p>
                <hr className="hr-circle" />
                <p>
                    <h4 className="p-header">
                            Часто наблюдаемые симптомы:
                    </h4>
                    <ul>
                        <li>
                                Повышение температуры тела
                        </li>
                        <li>
                                Сухой кашель
                        </li>
                        <li>
                                Утомляемость
                        </li>
                    </ul>
                </p>

                <p>
                    <h4 className="p-header">У некоторых инфицированных могут также наблюдаться:</h4>
                    <ul>
                        <li>
                                Различные болевые ощущения
                        </li>
                        <li>
                                Боль в горле
                        </li>
                        <li>
                                Диарея
                        </li>
                        <li>
                                Конъюнктивит
                        </li>
                        <li>
                                Головная боль
                        </li>
                        <li>
                                Потеря обоняния и вкусовых ощущений
                        </li>
                        <li>
                                Сыпь на коже или депигментация ногтей на руках и ногах
                        </li>
                    </ul>
                </p>

            </Panel>
            <Panel header="Диагностика" key="3">
                <p>
                    Если чувствуете себя плохо, оставайтесь дома. Если у вас повышенная температура, 
                    кашель и затруднение дыхания, обратитесь к врачу. 
                    Следуйте рекомендациям местных органов здравоохранения.
                </p>
            </Panel>
            <Panel header="Лечение" key="4">
                <Collapse accordion>
                    <Panel header="Самостоятельное лечение" key="1">
                        <p>
                        Если вы чувствуете, что заболели, отдыхайте, 
                        ‎пейте много жидкости и хорошо питайтесь. 
                        ‎Оставайтесь в отдельной от других членов ‎семьи комнате и по возможности 
                        пользуйтесь ‎отдельным туалетом. Поверхности, к ‎которым вы часто прикасаетесь, 
                        следует ‎регулярно мыть и дезинфицировать. ‎
                        </p>
                        <p>Находясь дома, придерживайтесь здорового ‎образа жизни. 
                            Рекомендуется правильно ‎питаться, соблюдать правильный режим сна, ‎
                            сохранять двигательную активность и ‎использовать телефон или сеть 
                            Интернет для ‎общения с друзьями и близкими. 
                            В трудные ‎периоды дети нуждаются в особой любви и ‎внимании со стороны взрослых. 
                            Старайтесь ‎по возможности придерживаться одного и ‎того же распорядка дня. ‎</p>
                        <p>
                        В условиях кризиса грусть, стресс, ‎растерянность – нормальные эмоции. 
                        ‎Помочь в такой ситуации может ‎доверительное общение с близкими и ‎друзьями. 
                        Если вы чувствуете, что не ‎справляетесь с ситуацией, обратитесь за ‎помощью 
                        к медицинскому или социальному ‎работнику. ‎
                        </p>
                    </Panel>
                    <Panel header="Медицинское обследование" key="2">
                        <p>
                        Если у вас легкие симптомы и нет ‎сопутствующих заболеваний, 
                        ‎самоизолируйтесь дома и свяжитесь с врачом ‎или позвоните по горячей линии COVID-19.
                        </p>
                        <p>
                        В случае повышения температуры, появления ‎кашля и одышки обратитесь за медицинской ‎помощью. 
                        Вызовите врача по телефону.‎
                        </p>
                    </Panel>
                </Collapse>
            </Panel>
        </Collapse>,
    </>
);

export default Information;
