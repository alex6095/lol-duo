import React, { useEffect } from 'react';
import { Input } from 'antd';
//import { API_URL, API_KEY } from '../../Config';

//imoprt 오류
const API_URL = 'https://kr.api.riotgames.com/';

const API_KEY = 'RGAPI-62585a9e-4645-45fa-9e6c-9e72d2fcde2e';


const { Search } = Input;
let SummonerName = "";
const onSearch = value => {SummonerName = value};

function SearchPage() {

    useEffect(() => {
        const endpoint = `${API_URL}lol/summoner/v4/summoners/by-name/${SummonerName}?api_key=${API_KEY}`;
        console.log(endpoint);
        fetch(endpoint, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'include', // include, *same-origin, omit
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
                "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
                "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
                "Origin": "https://developer.riotgames.com",
                "X-Riot-Token": "RGAPI-62585a9e-4645-45fa-9e6c-9e72d2fcde2e"
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
        })
        .then(response => response.json())
        .then(response => console.log(response))
        
    }, [])

    return (
        <div style={{ width: '45%', margin: '3rem auto' }}>
            <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
            />
        </div>
    )
}

export default SearchPage
