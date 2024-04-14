
import './card.css';

export default function Card ({ image, title, text }) {
    return (
        <div class="col-sm-6 col-lg-3 mt-4">
            <div className="card p-4 h-100">
                <div className="card-block">
                    <img src={image} width={75} className='d-block m-auto pb-4'/>
                    <h4 class="card-title text-center">{title}</h4>
                    <p class="card-text py-1 roboto-light text-center">{text}</p>
                </div>
            </div>
        </div>
    );
}