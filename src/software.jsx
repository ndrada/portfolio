import "./software.css";
import ledworking from './assets/ledworking.gif'
import wifiprovisioning from './assets/wifiprovisioning.gif'
import { Link } from "react-router-dom";

function SoftwarePage() {
    return(
        <div className="software-page-container">
            <div className="home-logo">
                <Link to="/">
                    <img src="/agicon.svg" alt="Home" />
                </Link>
            </div>
            <div className="software-page-header">
                <h1>Software, hardware & IoT</h1>
            </div>
            <div className="software-page-body">
                <div className="software-page-body-content">
                    <div className="area">
                        <div className="area-title">
                            <h3>Game-Triggered Hardware Interactions</h3>
                        </div>
                        <div className="area-contents">
                            <p>Integrated an ESP32 microcontroller with Unity game engine to control LEDs. Project goal was to move on to heating wires, however it got scrapped before I could make it there.</p>
                            <p>Enabled game events (e.g: scoring a point, collecting an item, shooting a gun) to trigger lighting up a specific LED from the breadboard based on which action triggered it.</p>
                        </div>
                    </div>
                    <div className="area">
                        <div className="area-title">
                            <h3>Wireless Connectivity & Dynamic Configuration</h3>
                        </div>
                        <div className="area-contents">
                            <p>Designed and built a Wi-Fi provisioning system using ESP32 WifiManager, enabling seamless setup without hardcoded credentials. Pretty cool stuff, I'm not gonna lie.</p>
                            <p>Implemented Web-based controls for real-time communication between the game and external devices</p>
                        </div>
                    </div>
                    <div className="area">
                        <div className="area-title">
                            <h3>Custom Communication Protocol</h3>
                        </div>
                        <div className="area-contents">
                            <p>Developed a custom serial and HTTP-based protocol for efficient data exchange between Unity and ESP32.</p>
                            <p>Ennsured low-latency and reliable communication by setting up port-based and wifi fallback options.</p>
                        </div>
                    </div>
                    <div className="area">
                        <div className="area-title">
                            <h3>Scalable & Secure Architecture</h3>
                        </div>
                        <div className="area-contents">
                            <p>The system is built to be modular, allowing new hardware components (like motors, speakers, or sensors) to be easily added for gaming pr automation applications.</p>
                            <p>Explored secure authetication & OTA updates, allowing remote firmware upgrades.</p>
                        </div>
                    </div>
                    <div className="area">
                        <div className="area-title">
                            <h3>Technologies used</h3>
                        </div>
                        <div className="area-contents">
                            <h4>Software</h4>
                            <p>C# (Unity), C++ (ESP32 & Arduino firmware), JavaScript (Web UI for device configuration)</p>
                        </div>
                        <div className="area-contents">
                            <h4>Hardware</h4>
                            <p>ESP32-WROOM-32, Arduino Uno R4 Wifi, LEDs and lots of wires and resistors haha.</p>
                        </div>
                        <div className="area-contents">
                            <h4>Networking</h4>
                            <p>Wifi (ESP32 AP Mode & Station Mode), HTTP Requests, Serial Communication</p>
                        </div>
                    </div>
                </div>
                <div className="media">
                    <div className="media-content">
                        <img src={ledworking} alt="looping gif showing a greed led turning on when an item is picked up in a video game" className="gif-style" />
                    </div>
                    <div className="media-content">
                        <img src={wifiprovisioning} alt="looping gif showing wifi connection to hardware" className="gif-style" />
                    </div>
                    <div className="repo-container">
                        <h3>Github Repos</h3>
                        <div className="repos">
                            <a href="https://github.com/ndrada/Arduino-R4-Wifi">Arduino UNO R4</a>
                            <a href="https://github.com/ndrada/ESP32-Unity-Setup">ESP32 WROOM 32</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SoftwarePage;