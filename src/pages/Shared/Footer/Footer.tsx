import FooterItems from "../../../components/Footer/FooterItems";
import FooterService from "../../../components/Footer/FooterService";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="text-[#E6E6E6]">
      <FooterService />
      <FooterItems />
      <img
        className="mx-auto"
        src="https://pbs.com.bd/images/payment_method/ssl_payment_icon_mobile.png"
        alt=""
      />
    </div>
  );
}
