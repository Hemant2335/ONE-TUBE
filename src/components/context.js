import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import {fetchapidata} from "./api";

export const Context = createContext();

export const AppContext = (props) =>{
    const [loading, setloading] = useState(false)
    const [Search, setSearch] = useState([])
    const [Categories, setCategories] = useState("New")
    const [Title, setTitle] = useState("Recommended")

    useEffect(()=>{
        fetchselectedcategory(Categories);
    },[Categories])

    const fetchselectedcategory = (query) =>{
        setloading(true);
        fetchapidata(`search/?q=${query}`).then(({contents})=>{
            console.log(contents)
            setSearch(contents);
        })
        setloading(false);
    }

    return(
        <Context.Provider value={{Categories , setCategories  , setSearch , Search , loading , setloading , Title , setTitle}}>
            {props.children}
        </Context.Provider>
    )
}