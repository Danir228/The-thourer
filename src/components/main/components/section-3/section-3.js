import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';
import SectionBlock from './components/sectionBlock';

import './section-3.css';
import block1 from './components/images/block1.svg';
import block2 from './components/images/block2.svg';
import block3 from './components/images/block3.svg';
import block4 from './components/images/block4.svg';
import block5 from './components/images/block5.svg';
import block6 from './components/images/block6.svg';

function SectionThird() {

    return (
        <>
            <Row>
                <Col>
                    <h1 className="section-3_title">Преимущества <span className="textupdate">The Tourer</span></h1>
                </Col>
            </Row>
            <Row className="section-3_item-1">
                <Col xs={12} sm={6} md={4} lg={4} xl={4} className="mb-3">
                <SectionBlock
                    image={block1}
                    title={'Доступно каждому'}
                    text={`Не требуется никакого особого оборудования или программного обеспечения. Все, что вам нужно – <span class="textupdate">мобильный телефон</span>`}/>
                </Col>
                <Col xs={12} sm={6} md={4} lg={4} xl={4} className="mb-3">
                    <SectionBlock
                    image={block2}
                    title={'Эффект присутствия'}
                    text={`Предоставляет потенциальным клиентам возможность <span class="textupdate">побывать в помещении через экран</span> гаджета`}/>
                </Col>
                <Col xs={12} sm={6} md={4} lg={4} xl={4} className="mb-3">
                    <SectionBlock
                    image={block3}
                    title={'Экономия времени'}
                    text={`Не тратьте свои <span class="textupdate">силы</span> и <span class="textupdate">время</span> на дорогу и показ объекта, чтобы помочь клиенту получить <span class="textupdate">полное представление</span> о помещении`}/>
                </Col>
                <Col xs={12} sm={6} md={4} lg={4} xl={4} className="mb-3">
                    <SectionBlock
                    image={block4}
                    title={'Скорость создания'}
                    text={`Получите готовый виртуальный тур <span class="textupdate">в течение часа</span> после старта съемки`}/>
                </Col>
                <Col xs={12} sm={6} md={4} lg={4} xl={4} className="mb-3">
                    <SectionBlock
                    image={block5}
                    title={'Уникальное предложение'}
                    text={`Привлекает внимание клиента, <span class="textupdate">выделяя объявление</span> из общей массы`}/>
                </Col>
                <Col xs={12} sm={6} md={4} lg={4} xl={4} className="mb-3">
                    <SectionBlock
                    image={block6}
                    title={'Простое использование'}
                    text={`Делитесь созданными турами с помощью <span class="textupdate">прямой ссылки</span> или интеграции <span class="textupdate">кода нашего плеера</span> в сайты и приложения`}/>
                </Col>
            </Row>
        </>
    )
}

export default SectionThird;