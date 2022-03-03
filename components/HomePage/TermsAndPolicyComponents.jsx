import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import PrivacyPolicyArticle from "./PrivacyPolicyArticle";
import TermsOfUseArticle from "./TermOfUseArticle";

const TermsAndPolicyComponents = (props) => {
  const router = useRouter();

  const { terms, policy } = router.query;
  const [article, setArticle] = useState("terms");

  useEffect(() => {
    if (terms) setArticle("terms");

    if (policy) setArticle("policy");
  }, [terms, policy]);

  return (
    <>
      <div className="w-11/12 h-full m-auto flex flex-col items-center mt-10">
        <div className="w-full flex text-center">
          <div
            onClick={() => {
              router.push("?terms=true", undefined, { shallow: true });
            }}
            className={`w-1/2 ${
              article == "terms"
                ? " border-skBlue text-skBlue"
                : " border-skBlueInactive text-skBlueInactive"
            } font-semibold border-b-2 pb-4 cursor-pointer`}
          >
            <span>Terms Of Use</span>
          </div>
          <div
            onClick={() => {
                router.push("?policy=true", undefined, { shallow: true });
            }}
            className={`w-1/2  ${
              article == "policy"
                ? " border-skBlue text-skBlue"
                : " border-skBlueInactive text-skBlueInactive"
            } font-semibold border-b-2 pb-4 cursor-pointer`}
          >
            <span>Privacy Policy</span>
          </div>
        </div>
        <div className="overflow-y-scroll h-96">
          {article == "terms" && <TermsOfUseArticle />}
          {article == "policy" && <PrivacyPolicyArticle />}
        </div>
      </div>
    </>
  );
};

export default TermsAndPolicyComponents;
