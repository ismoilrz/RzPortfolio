//////////// ASIDE DATA IMG /////////////
import asideLogo1 from "../assets/email.svg";
import asideLogo2 from "../assets/phone.svg";
import asideLogo3 from "../assets/calendar.svg";
import asideLogo4 from "../assets/location.svg";
//-----------------------------------------------

/////////////// Aside socials IMG ///////////////
import telegram from "../assets/telegram.svg";
import gitHub from "../assets/github.svg";
import instagram from "../assets/instagram.svg";

//pathes
const telegramPath = "http://t.me/Ismoilrz"
const gitHubPath = "https://github.com/ismoilrz"
const instagramPath = "https://www.instagram.com/ismoil.rz?igsh=MWxseG0zanVkbWNrcw=="



export const AsideData = [
    {
        id: 1,
        logo: asideLogo1,
        title: "EMAIL",
        txt: "ismoilrz26@gmail.com",
    },
    {
        id: 2,
        logo: asideLogo2,
        title: "PHONE",
        txt: "+998 (94) 853 67-47",
    },
    {
        id: 3,
        logo: asideLogo3,
        title: "BIRTHDAY",
        txt: "July 03, 2006",
    },
    {
        id: 4,
        logo: asideLogo4,
        title: "LOCATION",
        txt: "Uzbekistan, Khorezm",
    },
]

export const AsideSocials = [
    {
        id: 1,
        logo: telegram,
        link: telegramPath,
    },
    {
        id: 2,
        logo: gitHub,
        link: gitHubPath,
    },
    {
        id: 3,
        logo: instagram,
        link: instagramPath,
    },
]