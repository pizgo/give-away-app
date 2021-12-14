import React, {useState, useEffect} from "react";
import Decoration from "../../assets/Decoration.svg";
import HomeWhomWeHelpList from "./HomeWhomWeHelpList";
import HomePagination from "./HomePagination";
import db from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";


const HomeWhomWeHelp = () => {

    const [ chosenReceiver, setChosenReceiver ] = useState ({
        "id": 0,
        "title": "",
        "list": []
    });
    const [ allData, setAllData] = useState([]);
    const [ currentPage, setCurrentPage] = useState(1);
    const [ itemsPerPage, setItemsPerPage] = useState(3);

    // pobieranie danych
    async function readData (){
        const querySnapshot =  await getDocs(collection(db, "receivers"));
        let receivers = {};
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            receivers [doc.id] = doc.data()
        });
        console.log(receivers)
        setAllData(receivers);
        setChosenReceiver(receivers ['foundations'])
    }
    useEffect(()=> {
        readData();

    },[]);


    const handleClick = e => {
        console.log(e.target.id)
        console.log(allData)
        setChosenReceiver(allData[e.target.id])
        setCurrentPage(1)
    }

    // pagination's logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = chosenReceiver.list.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="container">
            <section className="help" id="section3">
                <div className="help__container">
                    <p className="help__title">
                        Komu pomagamy?
                    </p>
                    <img src={Decoration} alt="" id="decoration" className="help__img"/>
                    <div className="help__buttons-container">
                        <p className="help__buttons-button" id='foundations' onClick={handleClick}>Fundacjom</p>
                        <p className="help__buttons-button" id='organizations' onClick={handleClick}>Organizacjom <br/>pozarządowym</p>
                        <p className="help__buttons-button" id='local' onClick={handleClick}>Lokalnym <br/>zbiórkom</p>
                    </div>
                </div>
                <HomeWhomWeHelpList currentItems={currentItems} chosenReceiverTitle={chosenReceiver.title} />
                <HomePagination
                    itemsPerPage={itemsPerPage}
                    totalItems={chosenReceiver.list.length}
                    paginate={paginate}/>
            </section>
        </div>

    )
}

export default HomeWhomWeHelp;
