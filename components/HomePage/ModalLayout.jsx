import FormWrapper from "./FormWrapper";

const ModalLayout = ({providers, signup, code, forgotpassword, showModal}) => {
  return (
    <>
          {!code && !signup && <FormWrapper providers={providers} defaultForm={'login'} code={code} showModal={showModal}/>}
          {forgotpassword && <FormWrapper defaultForm={'forgot-password'} showModal={showModal}/>}
          {code && <FormWrapper defaultForm={'forgot-password'} code={code} showModal={showModal}/>}
          {signup && <FormWrapper defaultForm={'signup'} code={code} showModal={showModal}/>}
    </>


  );
};

export default ModalLayout;
