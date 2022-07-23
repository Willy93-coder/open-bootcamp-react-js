import logo from "./logo.svg";
import "./App.css";
// import Clock from "./components/pure/classComponent";
// import GreetingStyled from "./components/pure/greetingStyled";
import FunctionComponent from "./components/pure/functionComponent";
// import Greeting from "./components/pure/greeting";
// import GreetingF from "./components/pure/greetingF";
// import TaskList from "./components/container/task_list";
// import ComponenteA from "./components/container/componente_a";
// import Ejemplo1 from "./hooks/Ejemplo1";

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
                {/* <ComponenteA /> */}
                {/* <Ejemplo1></Ejemplo1> */}
                {/* <GreetingStyled name="Willy" /> */}
                {/* Componente clase ejercicio 2*/}
                {/* <Clock /> */}
                {/* Componente funcional ejercicio 2*/}
                <FunctionComponent />
            </header>
        </div>
    );
}

export default App;
