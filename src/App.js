import "./App.css";
// import LoginFormik from "./components/pure/forms/loginFormik";
// import RegisterFormik from "./components/pure/forms/registerFormik";
// import ContainerCuadrado from "./components/container/container_cuadrado";
// import ContactList from "./components/container/contact_list";
import TaskList from "./components/container/task_list";

function App() {
    return (
        <div className="App">
            {/* <ContactList /> */}
            <TaskList />
            {/* <ContainerCuadrado /> */}
            {/* Ejemplo de uso de formik y yup */}
            {/* <LoginFormik /> */}
            {/* <RegisterFormik /> */}
        </div>
    );
}

export default App;
