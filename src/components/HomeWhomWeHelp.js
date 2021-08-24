import React, {useState, useEffect} from "react";
import Decoration from "../assets/Decoration.svg";
import HomeWhomWeHelpList from "./HomeWhomWeHelpList";
import Pagination from "./Pagination";



const HomeWhomWeHelp = () => {

    const [ collection, setCollection ] = useState ({
        "id": 0,
        "title": "",
        "list": []
    });
    const [ allData, setAllData] = useState([]);
    const [ currentPage, setCurrentPage] = useState(1);
    const [ itemsPerPage, setItemsPerPage] = useState(3);

    //pobieranie danych
    const API = "http://localhost:3000";

    useEffect(()=> {
        fetch(`${API}/db`)
            .then(response => {
                console.log("response")
                console.log(response)
                return response
            })
            .then(response => response.json())
            .then(db => {
                console.log("Received Data from server:")
                console.log(db)
                setAllData(db);

                setCollection(db['foundations'])

            } )

            .catch(error => {
                console.log("error")
                console.log(error);
            });
    },[]);

    console.log(collection);

    // ustawienie zdarzenia na kliknięcie na buttony
    const handleClick = e => {
        setCollection(allData[e.target.id])

    }

    // logika paginacji
    //
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = collection.list.slice(indexOfFirstItem, indexOfLastItem);


    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (

        <div className="container">
            <section className="help" id="section3">
                <div className="help__container">
                    <h1 className="help__header">
                        Komu pomagamy?
                    </h1>
                    <img src={Decoration} alt="" id="decoration" className="help__img"/>
                    <div className="help__buttons-container">
                        <p className="help__buttons-button" id='foundations' onClick={handleClick}>Fundacjom</p>
                        <p className="help__buttons-button" id='organizations' onClick={handleClick}>Organizacjom <br/>pozarządowym</p>
                        <p className="help__buttons-button" id='locals' onClick={handleClick}>Lokalnym <br/>zbiórkom</p>
                    </div>
                </div>
                <HomeWhomWeHelpList currentItems={currentItems} collectionTitle={collection.title} />
                <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={collection.list.length}
                    paginate={paginate}/>
            </section>
        </div>

    )
}



export default HomeWhomWeHelp;
