import React from 'react';
import 'bootstrap';
import discourse from '../../../assets/notepad.png'
import etherscan from '../../../assets/etherscan.png';
import { useState, useEffect, Component } from 'react';
// import {Link} from 'react-router-dom'
import axios, { Axios } from 'axios';


export const ProposalForm = ({}) => {

    const createProposalURL = '/proposal'
    const categoriesURL = '/api/v1/dropdown/categories';
    const statusesURL = '/api/v1/dropdown/statuses';
    const responsiblesURL = '/api/v1/dropdown/responsibles';

    const [data, setData] = useState([
        {
            title: '', 
            category: '',
            status: 'Draft',
            cost: '',
            author: '',
            responsible: '',
            proposalBody: [{
                bodyVersion: '',
                bodyAuthor: '',
                bodyText: ''
            }]
        }
    ])
    const [dropDown, setDropdown] = useState('all')
    const [category, setCategory] = useState([])
    const [status, setStatus] = useState([])
    const [responsible, setResponsible] = useState([])


    useEffect(() => {
        axios.get(categoriesURL)
            .then(response => {
                setCategory(response.data)
            })

    }, [])
    useEffect(() => {

        axios.get(statusesURL)
        .then(response => {
            setStatus(response.data)
        })

    }, [])
    useEffect(() => {

        axios.get(responsiblesURL)
        .then(response => {
            setResponsible(response.data)
        })

    }, [])


    
    function handle(e) {
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)

    }

    console.log("JSON DATA:")
    console.log(data)


    
        return (
            <div className='col leftPanel container'>
            <div className='row'>
                    <h1 style={{fontFamily: 'Quantico', color: 'white', fontSize: '20px', fontWeight: 'bold'}}> Header</h1>
                    <p style={{fontFamily: 'Quantico', color: 'white', fontSize: '16px', marginBottom:'2.2rem'}}>
                        Select the appropriate Category and Party responsible for delivery.
                        The Council will update appropriately after submission is necessary.
                    </p>
                </div>
                <div className='row'>
                    <div className='container form' style={{background: 'rgba(0, 0, 0, 0.7)', border: '1px solid #FFFFFF', 
                            borderRadius: '3px'}}>
                        <div className='col' >
                            <ul style={{fontFamily: 'Quantico', color: 'white', fontSize: '18px', lineHeight: '45px',
                                    listStyleType: 'none', fontWeight: 'bold'}}>
                                <li>
                                    Title:
                                </li>
                                <li>
                                    Author:
                                </li>
                                <li>
                                    Category:
                                </li>
                                <li style={{lineHeight: '30px'}}>
                                    Estimated Cost:
                                </li>
                                <li>
                                    Discourse:
                        
                                </li>
                            </ul>
                        </div>
                        <div className='col' style={{padding: '1.5rem 0 1rem 1rem'}}>
                            <form onSubmit={(e) => SubmitEvent(e)}>
                                <input onChange={(e) => handle(e)} id='title'value={data.title} style={{background: 'rgba(37, 60, 120, 0.7)', 
                                            cursor: 'pointer', border: '1px solid #FFFFFF', borderRadius: '5px', fontFamily: 'Quantico', color: 'white', 
                                            fontSize: '18px', width: '8rem', outline: 'none', paddingLeft: '10px', marginBottom: '5px'}}
                                        name='title'
                                        placeholder='Proposal Title'
                                        type="title"
                                />
                            </form>
                            <h1 style={{fontFamily: 'Quantico', color: 'white', fontSize: '20px', fontWeight: '900'}}>0x07...b9BE
                            <img href='/' src={etherscan} style={{width: '10%', paddingLeft: '5px', cursor:'pointer'}}/></h1>
                            <select onChange={(e) => handle(e)} id='category' value={data.category}  style={{background: 'rgba(37, 60, 120, 0.7)', textAlign: 'left',
                                                                cursor: 'pointer', border: '1px solid #FFFFFF', borderRadius: '5px',
                                                                fontFamily: 'Quantico', color: 'white', padding: '0',
                                                                fontSize: '16px', width:'9rem', marginBottom: '1rem'}}>
                                                                <option>Select Category</option>
                                {Object.values(category).map((categories) => <option >{categories}</option>)}
                            </select>
                            <form>
                                <input onChange={(e) => handle(e)} id='cost'value={data.cost} style={{background: 'transparent', 
                                                cursor: 'pointer', border: 'none', borderRadius: '5px', fontFamily: 'Quantico', color: 'white', 
                                                fontSize: '18px', width: '9rem', outline: 'none', margin: '10px 0 30px 0'}}
                                            name='cost'
                                            placeholder='ETH'
                                            type='cost'
                                />

                            </form>

                            <a href='/' style={{fontFamily: 'Quantico', color: 'white', fontSize: '16px', fontWeight: '900', textDecoration:"none"}}>Pending Discourse</a>
    
                        </div>
                        <div className='col' >
                            <ul style={{fontFamily: 'Quantico', color: 'white', fontSize: '18px', lineHeight: '45px',
                                        listStyleType: 'none', fontWeight: 'bold', marginTop:'7rem', marginRight: '2rem'}}>
                                    <li>
                                        Status:
                                    </li>
                                    <li>
                                        Responsible:
                                    </li>
                                </ul>
                        </div>
                        <div className='col' style={{paddingTop: '7.5rem', paddingRight: '1.5rem'}}>
                        <select  style={{background: 'rgba(37, 60, 120, 0.7)', textAlign: 'left',
                                                                cursor: 'pointer', border: '1px solid #FFFFFF', borderRadius: '5px',
                                                                fontFamily: 'Quantico', color: 'white', padding: '0',
                                                                fontSize: '16px', marginBottom: '1rem', width:'9rem'}}>
                                {Object.values(status).map((statuses) => <option >{statuses}</option>)}
                            </select>
                            <select onChange={(e) => handle(e)} id='responsible'value={data.responsible} style={{background: 'rgba(37, 60, 120, 0.7)', textAlign: 'left',
                                                                cursor: 'pointer', border: '1px solid #FFFFFF', borderRadius: '5px',
                                                                fontFamily: 'Quantico', color: 'white', padding: '0',
                                                                fontSize: '16px', width:'9rem'}}>
                                                                    <option>Select Owner</option>
                                {Object.values(responsible).map((responsibles) => <option >{responsibles}</option>)}
                            </select>
                        </div>
                    </div>
                </div>
                <div className='row feedback'>
                    <h1 style={{fontFamily: 'Quantico', color: 'white', fontSize: '18px', fontWeight: '900'}}>Council Feedback:</h1>
                    <div className='row' style={{background: 'rgba(0, 0, 0, 0.7)', border: '1px solid #FFFFFF', 
                            borderRadius: '3px', padding: '0 2rem', height: '200px', marginBottom: '2rem'}}>
                                <p style={{fontFamily: 'Quantico', color: 'white', fontSize: '18px', lineHeight: '30px'}}>
                                    Pending Council Feedback.
                                    </p>
                    </div>
                </div>
    
            </div>
    
        );

}

