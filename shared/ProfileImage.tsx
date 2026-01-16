import Image from "next/image";
import { memo } from "react";

const ProfileImage = memo(() => (
  <Image
    src="https://i.ibb.co.com/67fpNVMH/profile.jpg"
    alt="Profile"
    width={40}
    height={40}
    className="rounded-full object-cover cursor-pointer object-center"
  />
));

export default ProfileImage;
