import { ReactNode } from "react"
import "./ContactCard.css";

export default function ContactCard(): ReactNode {

    return (
        <div className="contact-card-content">
            <h4>Contact me here</h4>
            <p>
                For commissions, inquires, or other general
                communication, contact me here. Feel free to reach out
                on any of the social medias below as well.
            </p>
            <div className="contact-info">
                <div className="contact-item">
                    <div className="icon">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>Location</span>
                    </div>
                    <p>
                        Fort Collins, CO
                    </p>
                </div>
                <div className="contact-item">
                    <div className="icon">
                        <i className="fas fa-envelope"></i>
                        <span>Email</span>
                    </div>
                    <p>
                        shmormius@gmail.com
                    </p>
                </div>
                <div className="contact-item">
                    <div className="icon">
                        <i className="fas fa-user-graduate"></i>
                        <span>School</span>
                    </div>
                    <p>
                        Colorado State University
                    </p>
                </div>

                <div className="contact-item">
                    <div className="icon">
                        <i className="fas fa-globe-africa"></i>
                        <span>Languages</span>
                    </div>
                    <p>
                        English, Japanese
                    </p>
                </div>
            </div>
            <div className="contact-icons">
                <div className="contact-icon">
                    <a
                        href="https://www.instagram.com/bagofhostileroosters/"
                        target="_blank">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a
                        href="https://steamcommunity.com/profiles/76561198375240696/"
                        target="_blank">
                        <i className="fab fa-steam"></i>
                    </a>
                    <a href="https://github.com/Shmormius"
                        target="_blank">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.facebook.com/daemon.kerrigan.5"
                        target="_blank">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/daemon-kerrigan-83b89825a"
                        target="_blank">
                        <i className="fab fa-linkedin"></i>
                    </a>

                </div>
            </div>
        </div>
    )
}