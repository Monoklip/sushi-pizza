import { SetStateAction, useEffect, useState } from "react";
import "./display-shared.scss";
import DisplaySharedItem from "./DisplaySharedItem/DisplaySharedItem";

const DisplayShared = () => {
    const [url, setUrl] = useState("http://localhost:3000/shared");
    const [data, setData] = useState([]);

    const [name, setName] = useState<string>("");
    const [info, setInfo] = useState<string>("");
    const [image, setImage] = useState<string>("");

    const [nameValue, setNameValue] = useState<string>("");
    const [infoValue, setInfoValue] = useState<string>("");
    const [imageValue, setImageValue] = useState<string>("");

    const nameHandleChange = (event: {target: { value: SetStateAction<string> };}) => {
        setName(event.target.value);
        setNameValue(event.target.value);
    };

    const infoHandleChange = (event: {target: { value: SetStateAction<string> };}) => {
        setInfo(event.target.value);
        setInfoValue(event.target.value);
    };

    const imageHandleChange = (event: {target: { value: SetStateAction<string> };}) => {
        setImage(event.target.value);
        setImageValue(event.target.value);
    };

    const createBtn = async () => {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                name: name,
                info: info,
                image: image,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        setName("");
        setNameValue("");
        setInfo("");
        setInfoValue("");
        setImage("");
        setImageValue("");
    };

    const getShared = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
    };

    useEffect(() => {
        getShared();
    }, [data]);

    return (
        <div className="display-shared">
            <div className="display-shared-get">
                <h1>Додати</h1>
                <p>Введіть назву:</p>
                <input
                    type="text"
                    onChange={nameHandleChange}
                    value={nameValue}
                />
                <p>Введіть інформацію:</p>
                <textarea
                    onChange={infoHandleChange}
                    value={infoValue}
                ></textarea>
                <p>Введіть фото (URL):</p>
                <input
                    type="text"
                    onChange={imageHandleChange}
                    value={imageValue}
                />
                <button onClick={createBtn}>Додати</button>
            </div>
            <div className="display-shared-delete">
                {data.map(
                    (elem: {
                        name: string;
                        info: string;
                        image: string;
                        id: number;
                    }) => {
                        return <DisplaySharedItem key={elem.id} elem={elem} />;
                    }
                )}
            </div>
        </div>
    );
};

export default DisplayShared;
