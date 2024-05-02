import { useState } from "react";
import './App.css'
import fetchDataAction from './actions';
import appStore from "./component";

function App() {
    const [dataList, setDataList] = useState([]);
    const [removeButtonVisible, setRemoveButtonVisible] = useState(false);

    appStore.subscribe(() => {
        const newDataList = appStore.getState().data.data;
        setDataList(newDataList);
        console.log(newDataList);
    });

    const fetchData = () => {
        appStore.dispatch(fetchDataAction());
        setRemoveButtonVisible(true);
    };

    const removeData = () => {
        setRemoveButtonVisible(false);
        setDataList([]);
    };

    return (
        <div className="main">
            <div className="btn-container">
                <button className="btn" onClick={fetchData}>Fetch data</button>
                {removeButtonVisible && (
                    <button className="btn" onClick={removeData}>Remove data</button>
                )}
            </div>
            <div className="output">
                {dataList.map((item) => (
                    <div className="box" key={item.id}>
                        <li className="name">{item.name}</li>
                        <li>{item.email}</li>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
