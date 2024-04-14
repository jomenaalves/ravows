
import './apresentation.css';

import Logo from "../../../images/logo.png";

export default function Apresentation () {
    return (
        <section className="apresentation container-lg">
            <div className='row'>
                <div className='col-lg-6'>
                    <div className='my-5 mx-2 title'>
                        <div className='badge bg-warning lh-base m-0 rounded-5 text-dark'>SOFTWARE HOUSE</div>
                        <div className='fs-1 mt-1'>
                            <span className='roboto-thin'>
                                Dê inicio em seus projeto com a 
                            </span>
                            &nbsp;
                            <span className='text-bg-warning px-2 roboto-black'>RAVOWS</span>
                        </div>
                        <p className='roboto-light'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500
                        </p>
                        <button type="button" class="btn btn-warning mt-1 px-3 py-2">
                            <span className='me-2 roboto-medium'>Visualizar cases de sucesso</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"/></svg>
                        </button>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='card-form p-5 my-lg-5 mx-2 rounded'>
                        <img src={Logo} width={55} className='m-lg-auto d-block pb-3'/>
                        <p className='text-lg-center h3'>
                            <span className=''>
                                Entre em contato com os nossos especialistas
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="#F7A600" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="#F7A600" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M8 3C8.5 3 10.5 7.5 10.5 8C10.5 9 9 10 8.5 11C8 12 9 13 10 14C10.3943 14.3943 12 16 13 15.5C14 15 15 13.5 16 13.5C16.5 13.5 21 15.5 21 16C21 18 19.5 19.5 18 20C16.5 20.5 15.5 20.5 13.5 20C11.5 19.5 10 19 7.5 16.5C5 14 4.5 12.5 4 10.5C3.5 8.5 3.5 7.5 4 6C4.5 4.5 6 3 8 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/><animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.15s" values="0;0.85"/><animateTransform attributeName="transform" begin="0.6s;lineMdPhoneCallTwotoneLoop0.begin+2.6s" dur="0.5s" type="rotate" values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12"/></path><path stroke-dasharray="4" stroke-dashoffset="4" d="M14 7.04404C14.6608 7.34734 15.2571 7.76718 15.7624 8.27723M16.956 10C16.6606 9.35636 16.2546 8.77401 15.7624 8.27723" opacity="0"><set id="lineMdPhoneCallTwotoneLoop0" attributeName="opacity" begin="0.7s;lineMdPhoneCallTwotoneLoop0.begin+2.7s" to="1"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s;lineMdPhoneCallTwotoneLoop0.begin+2.7s" dur="0.2s" values="4;8"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s;lineMdPhoneCallTwotoneLoop0.begin+3.3s" dur="0.3s" values="0;4"/><set attributeName="opacity" begin="1.6s;lineMdPhoneCallTwotoneLoop0.begin+3.6s" to="0"/></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M20.748 9C20.3874 7.59926 19.6571 6.347 18.6672 5.3535M15 3.25203C16.4105 3.61507 17.6704 4.3531 18.6672 5.3535" opacity="0"><set attributeName="opacity" begin="1s;lineMdPhoneCallTwotoneLoop0.begin+3s" to="1"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="1s;lineMdPhoneCallTwotoneLoop0.begin+3s" dur="0.2s" values="10;20"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s;lineMdPhoneCallTwotoneLoop0.begin+3.5s" dur="0.3s" values="0;10"/><set attributeName="opacity" begin="1.8s;lineMdPhoneCallTwotoneLoop0.begin+3.8s" to="0"/></path></g></svg>    
                        </p>

                        <div className='row align-items-end'>
                            <div className='col-sm-4 col-lg-12'>
                                <div class="mt-2">
                                    <label className="form-label">Seu nome</label>
                                    <input type="password" className="form-control bg-dark text-white p-2" aria-describedby="nome"/>
                                </div>
                            </div>
                            <div className='col-sm-4 col-lg-12'>
                                <div className="mt-2">
                                    <label className="form-label">Seu melhor e-mail</label>
                                    <input type="email" className="form-control bg-dark text-white p-2" aria-describedby="email " />
                                </div>
                            </div>
                            <div className='col-sm-4 col-lg-12'>
                                <div className="mt-3">
                                    <button type="button" class="btn btn-warning mt-1 px-3 py-2 w-100">
                                        <span className='me-2 roboto-medium'>Enviar</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 28 28"><path fill="currentColor" d="M3.79 2.625c-.963-.46-2.021.42-1.746 1.451l2.016 7.533a1 1 0 0 0 .824.732l9.884 1.412c.286.04.286.454 0 .495l-9.883 1.411a1 1 0 0 0-.824.732l-2.017 7.537c-.275 1.03.783 1.91 1.746 1.451L25.288 15.13c.949-.452.949-1.804 0-2.257z"/></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <p className='p-0 my-3 text-warning text-lg-center text-white-50'>
                            Responderemos em até 24 horas
                        </p>
                    </div>

                </div>
            </div>
        </section>
    ); 
}