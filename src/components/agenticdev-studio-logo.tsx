import Image from "next/image";
import netm8Logo from "./ui/netm8_logo_horizontal_allpurple.png";

const AgenticDevStudioLogo = ({ alt = "NetM8", ...rest }) => {
  return <Image src={netm8Logo} alt={alt} {...rest} />;
};

export default AgenticDevStudioLogo;
