import LabelSection from '../../Sections/LabelSection/LabelSection';
import Card from '../Card/card';
import './services.css';


import Logo from "../../../images/logo.png";

export default function Services () {

    return (
        <section className="services mt-5 container-lg">
            <LabelSection label="Nossos Serviços"/>

            <div className='row justify-content-center'>
                <Card image={Logo} title={'Imersão e Ideação'} text={'Desperte a criatividade e descubra o potencial do seu produto com apoio de especialistas em uma jornada imersiva e transformadora.'}/>
                <Card image={Logo} title={'Consultoria de Tecnologia'} text={'Otimize seus resultados com a alocação de squads de desenvolvimento especializadas, no modelo squad as a service.'}/>
                <Card image={Logo} title={'Criação de software'} text={'Conduza sua empresa para a transformação digital com nossa consultoria especializada. Nós te ajudamos a desenvolver seu app ou sistema web, com as melhores decisões de arquitetura de software.'}/>
                <Card image={Logo} title={'Recrutamento e Seleção'} text={'Desbloqueamos o potencial coletivo do seu time de tecnologia ao simplificar a contratação de profissionais de tecnologia com excelência e agilidade.'}/>
            </div>
        </section>
    );
}