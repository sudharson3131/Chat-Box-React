

import search from "../assets/images/search.png"
import ChatList from "./chatlist";

import men1 from "../assets/images/men1.jpg"
import men2 from "../assets/images/men2.jpg"
import men3 from "../assets/images/men3.jpg"
import man1 from "../assets/images/man1.jpg"
import man2 from "../assets/images/man2.jpg"
import man3 from "../assets/images/man3.jpg"

// var arr = ["Jessica Koel","Komeial Bolger","Tamara Suiale","Sam Nielson","Caroline Nexon","Patrick Koeler"]
// var desc = ["Hey,Joel,Iam here to help me out please",
//     "I will send document as soon as Posibble",
//     "Are you going to Buisness next week",
//     "I suggest to start new business soon..",
//     "We need to start new Research center",
//     "May be yes"
// ]
// var image = [men1,men2,men3,man1,man2,man3]
// var time = ["11:26","12:26","8:26","7:16","9:26","3:26"]




var chatList = [    

    {
        name: "Jessica Koel",
        desc: "Hey,Joel,Iam here to help me out please",
        image: men1,
        time: "11:26"
    },

    {
        name: "Komeial Bolger",
        desc: "I will send document as soon as Posibble",
        image: men2,
        time: "12:26"
    },

    {
        name: "Tamara Suiale",
        desc: "Are you going to Buisness next week",
        image: men3,
        time: "8:26"
    },
    {
        name: "Sam Nielson",
        desc: "I suggest to start new business soon..",
        image: man1,
        time: "7:16"
    },
    {
        name: "Caroline Nexon",
        desc: "We need to start new Research center",
        image: man2,
        time: "9:26"
    },
    {
        name: "Patrick Koeler",
        desc: "May be yes",
        image: man3,
        time: "3:26"
    }
]   












function ChatBox(){
    return(
        <div className="container">
            <div className="searchBox">
                <input type="text" placeholder="Search..." className="searchInput"/>
                <img src={search} alt="search" className="searchIcon"/>
            </div>
            <div className="container2">
             {
                chatList.map(function(item){
                    return <ChatList myname={item.name} desc={item.desc} image={item.image} time={item.time}></ChatList>
                })
            }
            </div>
        </div>
    )
}

export default ChatBox