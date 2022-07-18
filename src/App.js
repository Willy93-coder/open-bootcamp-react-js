import logo from "./logo.svg";
import "./App.css";
// import Greeting from "./components/pure/greeting";
// import GreetingF from "./components/pure/greetingF";
// import TaskList from "./components/container/task_list";
import ComponenteA from "./components/container/componente_a";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {/* Componente propio Greeting jsx */}
                {/* <Greeting name="Willy" /> */}
                {/* <GreetingF name="Willy" /> */}
                {/* Componente de listado de tareas */}
                {/* <TaskList /> */}
                {/* Ejercicio 1 renderizado componente Contacto */}
                <ComponenteA />
            </header>
        </div>
    );
}

export default App;
