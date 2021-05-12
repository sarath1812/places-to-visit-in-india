import {Grid} from '@material-ui/core';
import React from 'react'
import './App.css';
import Features from './Features';
import Header from './Header';
import MediaCard from './MediaCard';
import golkonda from './images/golkonda.jpg'
import jaipur from './images/jaipur.jfif'
import  kerala from './images/kerala.jfif'
import ladak from './images/ladak.jfif'
import shimla from './images/shimla.jpg'
import tajmahal from './images/tajmahal.jfif'
import tirupathi from './images/tirupathi.jpg'
import hum from './images/hum.jpg'
import puri from './images/puri.jpg'
import aaraku from './images/aaraku.jpg'
import charminar from './images/charminar.jpg'
import kolkata from './images/kokata.jpeg'
import kasi from './images/kasi.jpeg'
import mumbai from './images/mumbai.jpg'
import himalayas from './images/himalayas.jpeg'
import ranofkutch from './images/ranofkutch.jpg'
import Footer from './Footer';



function App() {
  return (
    <div>
       
        <Grid>
        <Header/>
        <Features/>
        <br/>
        <Grid container  className="grid"  xl={3}> 
        <MediaCard name="Golconda" img ={golkonda} 
        info="Golconda Fort, also known as Golkonda, is a fortified citadel and an early capital city of the Qutb Shahi dynasty, located in Hyderabad, Telangana, India. Because of the vicinity of diamond mines, especially Kollur Mine, Golconda flourished as a trade centre of large diamonds, known as the Golconda Diamonds."/>
        <br/>
        <br/>
        <MediaCard  name="Kerala"img ={kerala}
        info="Kerala, a state on India's tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline. It's known for its palm-lined beaches and backwaters, a network of canals. Inland are the Western Ghats, mountains whose slopes support tea, coffee and spice plantations as well as wildlife. National parks like Eravikulam and Periyar, plus Wayanad and other sanctuaries, are home to elephants, langur monkeys and tigers. "/>
        <br/>
        <MediaCard  name="Puri"img ={puri}
        info="Puri is a coastal city and a municipality in the state of Odisha in eastern India. It is the district headquarters of Puri district and is situated on the Bay of Bengal, 60 kilometres south of the state capital of Bhubaneswar. "/>
        <br/>
        <MediaCard  name="Aaraku"img ={aaraku} 
        info="Araku Valley is a hill station and valley region in the southeastern Indian state of Andhra Pradesh. It's surrounded by the thick forests of the Eastern Ghats mountain range. The Tribal Museum is dedicated to the area's numerous indigenous tribes, known for their traditional Dhimsa dance, and showcases traditional handicrafts. A miniature train runs through Padmapuram Gardens, with its sculptures and tree-top huts. "/>
        <br/>
        <MediaCard  name="Charminar"img ={charminar} 
        info="The Charminar constructed in 1591, is a monument and mosque located in Hyderabad, Telangana, India. The landmark has become known globally as a symbol of Hyderabad and is listed among the most recognized structures in India."/>
        <br/>
        <MediaCard  name="Ladak"img ={ladak}
        info="Ladakh is a region administered by India as a union territory. The region constitutes a part of the larger Kashmir region, which has been the subject of dispute between India, Pakistan, and China since 1947."/>
        <br/>
        <MediaCard  name="Shimla"img ={shimla}  
        info="Shimla is the capital of the northern Indian state of Himachal Pradesh, in the Himalayan foothills. Once the summer capital of British India, it remains the terminus of the narrow-gauge Kalka-Shimla Railway, completed in 1903. It’s also known for the handicraft shops that line The Mall, a pedestrian avenue, as well as the Lakkar Bazaar, a market specializing in wooden toys and crafts."/>
        <br/>
        <MediaCard  name="Tajmahal"img ={tajmahal}
        info="The Taj Mahal, originally the Rauza-i-munawwara is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself."/>
        <br/>
        <MediaCard  name="Tirupathi"img ={tirupathi}
        info="Tirupati is a city in the Indian state of Andhra Pradesh. Its Sri Venkateswara Temple sits atop one of the the 7 peaks of Tirumala Hills, attracting scores of Hindu pilgrims. Sri Venkateswara National Park, home to the temple, also contains the Sri Venkateswara Zoological Park with lions and primates. Nearby, next to a waterfall and cave believed to be sacred, Sri Kapileswara Swamy Temple is dedicated to Lord Shiva."/>
        <br/>
        <MediaCard name="Jaipur" img ={jaipur} 
        info="Jaipur is the capital of India’s Rajasthan state. It evokes the royal family that once ruled the region and that, in 1727, founded what is now called the Old City, or “Pink City” for its trademark building color. At the center of its stately street grid (notable in India) stands the opulent, colonnaded City Palace complex. With gardens, courtyards and museums, part of it is still a royal residence."/>
       
        <br/>
        <MediaCard name="Himalayas" img ={himalayas}  info="The Himalayas, or Himalaya; Sanskrit: IPA, himá and ā-laya, is a mountain range in South and East Asia separating the plains of the Indian subcontinent from the Tibetan Plateau. The range has many of Earth's highest peaks, including the highest, Mount Everest, at the border between Nepal and China."/>
        <br/>
        <MediaCard name="Rann of kutch" img ={ranofkutch}
        info="The Great Rann of Kutch is a salt marsh in the Thar Desert in the Kutch District of Gujarat, India. It is about 7500 km² in the area and is reputed to be one of the largest salt deserts in the world. This area has been inhabited by the Kutchi people." />
        <br/>
        <MediaCard name="Kolkata" img ={kolkata} 
        info="Kolkata (formerly Calcutta) is the capital of India's West Bengal state. Founded as an East India Company trading post, it was India's capital under the British Raj from 1773–1911. Today it’s known for its grand colonial architecture, art galleries and cultural festivals. It’s also home to Mother House, headquarters of the Missionaries of Charity, founded by Mother Teresa, whose tomb is on site. " />
        <br/>
        <MediaCard name="Varanasi" img ={kasi} 
        info="Varanasi is a city in the northern Indian state of Uttar Pradesh dating to the 11th century B.C. Regarded as the spiritual capital of India, the city draws Hindu pilgrims who bathe in the Ganges River’s sacred waters and perform funeral rites. Along the city's winding streets are some 2,000 temples, including Kashi Vishwanath, the “Golden Temple,” dedicated to the Hindu god Shiva." />
        <br/>
        <MediaCard name="Mumbai" img ={mumbai} 
        info="Mumbai (formerly called Bombay) is a densely populated city on India’s west coast. A financial center, it's India's largest city. On the Mumbai Harbour waterfront stands the iconic Gateway of India stone arch, built by the British Raj in 1924. Offshore, nearby Elephanta Island holds ancient cave temples dedicated to the Hindu god Shiva. The city's also famous as the heart of the Bollywood film industry. "/>
        <br/>
        <MediaCard name="Hampi" img ={hum} 
        info="Hampi is an ancient village in the south Indian state of Karnataka. It’s dotted with numerous ruined temple complexes from the Vijayanagara Empire. On the south bank of the River Tungabhadra is the 7th-century Hindu Virupaksha Temple, near the revived Hampi Bazaar. A carved stone chariot stands in front of the huge Vittala Temple site. Southeast of Hampi, Daroji Bear Sanctuary is home to the Indian sloth bear." />
        <br/>
        </Grid>
        <br/>
        <Footer/>
        </Grid>
                 
    </div>
  )
}

export default App
