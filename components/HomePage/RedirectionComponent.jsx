import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

const RedirectionComponent = () => {
  const router = useRouter();
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

    if (counter == 0)
      router.push(
        "https://drive.google.com/drive/folders/1JAKiumWmxsYbFoz5p97DtG9y3mzUDYxy"
      );
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <>
      <label className="w-full p-2 mt-10 text-left font-bold lg:text-4xl md:text-4xl 1080p:text-4xl sm:text-2xl xs:text-2xl text-gray-700">
        Verification Success
      </label>
      <h1 className="px-2">{`You will now be redirected to Google Drive APK Folder in ${counter}`}</h1>
    </>
  );
};

export default RedirectionComponent;
