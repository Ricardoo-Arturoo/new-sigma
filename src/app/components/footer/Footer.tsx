import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

export const Footer = () => {
    return (
        <div className="bg-gray-200 font-normal">
            <footer className="bg-gray-900 text-white flex py-2 mt-15">
                <span className="ml-10 text-[13px]">© 2023 Sigma Domus C.A - J304985185</span>
                <div className="mr-4 ml-auto flex gap-6">
                    <a href="https://www.youtube.com/user/SigmaDentalVzla1"><FaYoutube /></a>
                    <a href="https://twitter.com/Sigma_Dental"><FaTwitter /></a>
                    <a href="https://www.instagram.com/sigmadental"><FaInstagram /></a>
                    <a href="https://www.facebook.com/SigmaDentalVE"><FaFacebookSquare /></a>
                </div>
            </footer>
        </div>
    )
}
