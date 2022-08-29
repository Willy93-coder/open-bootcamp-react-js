import React from "react";

const AsyncExample = () => {
    async function generateNumber() {
        return 1;
    }

    function obtainNumber() {
        generateNumber().then((response) => alert(`Response: ${response}`));
    }

    async function saveSessionStorage(key, value) {
        sessionStorage.setItem(key, value);

        return Promise.resolve(sessionStorage.getItem(key));
    }

    function showStorage() {
        saveSessionStorage("name", "Martin")
            .then((response) => {
                let value = response;
                alert(`Saved Name: ${value}`);
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`);
            })
            .finally(() => console.log("SUCCESS: Name saved and retreived"));
    }

    async function obtainMessage() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve("Hello world"), 2000);
        });

        let message = await promise;
        await alert(`Message received: ${message}`);
    }

    const returnError = async () => {
        await Promise.reject(new Error("Ooooops!"));
    };

    const consumeError = () => {
        returnError()
            .then((response) => alert(`Everything is OK: ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`))
            .finally(() => alert("Finally executed"));
    };

    const urlNotFound = async () => {
        try {
            let response = await fetch("https://invalidURL");
            alert(`Response: ${JSON.stringify(response)}`);
        } catch (error) {
            alert(
                `Something went wrong with your URL: ${error} (check your console)`
            );
        }
    };

    const multiplePromise = async () => {
        let results = await Promise.all([
            fetch("https://reqres.in/api/users"),
            fetch("htpps://reqres.in/api/users?page=2"),
        ]).catch((error) =>
            alert(
                `Something went wrong with your URL: ${error} (check your console)`
            )
        );
    };

    return (
        <div>
            <h1>Async promise examples</h1>
            <button onClick={obtainNumber}>Obtain number</button>
            <button onClick={showStorage}>Save Name and show</button>
            <button onClick={obtainMessage}>Send message in 2 seconds</button>
            <button onClick={consumeError}>Obtain Error</button>
            <button onClick={urlNotFound}>Request to Unknown URL </button>
            <button onClick={multiplePromise}>Multiple promise</button>
        </div>
    );
};

export default AsyncExample;
