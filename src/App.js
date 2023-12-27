import React,{useState,useEffect} from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import useStyles from './styles.js';
import Newscards from "./components/newscards/newscards";

const alankey ='0c75f38e9ec9b791460df28ad4178eca2e956eca572e1d8b807a3e2338fdd0dc/stage';
const App=()=>{
    const [newsArticles, setnewsArticles]=useState([]);
    const [activeArticle,setActiveArticle]= useState(-1);
    const classes= useStyles();

    useEffect(()=>{
        alanBtn({
            key: alankey,
            onCommand: ({ command, articles })=>{
                if(command ==='newHeadlines'){
                    setnewsArticles(articles);
                    setActiveArticle(-1);
                }
                else if(command === 'highlight'){
                    setActiveArticle((prevActiveArticle)=> prevActiveArticle+1);
                }
            }
        })
    },[])
    return (
        <div>
            <div className={classes.logoContainer}>
                <img src="https://voicebot.ai/wp-content/uploads/2019/10/alan.jpg" className={classes.alanLogo} alt="logo"/>
            </div>
            <Newscards articles={newsArticles} activeArticle={activeArticle}/>
        </div>
    );
}

export default App;