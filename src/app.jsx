import LcEvents from './components/mainLcharEvents/LcEvents'
import PEvents from './components/PieEvents/PEvents'
import './app.css';
import ShowTableEvents from './components/EventsTable/showTableEvents';

const App = () => {
    return (
        <div className="dashboard">
            <div className="data-card">
                <h2>Grafico de Lineas</h2>
                <p>En la siguiente gráfica podemos visualizar una gráfica de líneas.</p>
                <p>Del lado del eje <span>X</span> están los <span>días (por fechas)</span> y del lado del eje <span>Y</span> los eventos <span>(Abrir, Cerrar)</span></p>
                <LcEvents />
            </div>

            <div className="data-card">
                <h2>Grafico de Pastel</h2>
                <p>En la siguiente gráfica podemos visualizar una gráfica de pastel.</p>
                <p>La dinámica de la gráfica consiste en poder denotar cuál evento se ha generado con más frecuencia.</p>
                <PEvents />
            </div>
            <div className="data-card-description">
                <h1>Proyecto de cerradura electronica con modulo ESP8266</h1>
                <p>El proyecto es un desarrollo de un dispositivo IoT que es capaz de registrar los eventos que vayan surgiendo (abrir, cerrar).<br />
                    Del curso de <span>Arquitecutura de computadoras II</span> impartido por <span> Ing. Cesar Lazaro Martinez.</span>.<br />
                    Estos eventos son trasladados a la nube(servidor) y posteriormente <span>son procesados para verlos datos graficamente.</span></p>
                <p>Los encargados y diseñadores de este proyecto IoT son los siguientes:</p>

                <h3>Edwar Alejandro Castellanos Portillo.</h3>
                <h3>Josue Alberto Guevara Lopez.</h3>
                <h3>Stiven Oswaldo Ramos Hernandez.</h3>
                <h3>Jorge Alfonso Garcia Lopez.</h3>

            </div>
            <div className="data-card-table">
            <h1>Eventos</h1>
                <ShowTableEvents />
            </div>
        </div>
    )
}

export default App;
