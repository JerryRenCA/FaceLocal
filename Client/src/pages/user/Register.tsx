import React, { useEffect, useRef, useState } from "react";
import tw from "tailwind-styled-components";
import PersonIcon from "@mui/icons-material/Person";
import Navbar from "../../components/navbar/Navbar";
import validatorjs from "validator";
// import * as validate from 'validate-typescript'
//Style Components
const Container = tw.div`mt-4`;
const Wrapper = tw.div`mx-auto w-[45rem] border-2 rounded-lg px-6 pt-12`;

//Module
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <div className="text-3xl">Register</div>
        <Field />
      </Wrapper>
    </Container>
  );
};
export default Register;

//Another Module Component
const FieldTag = tw.div`border-[1px] h-13 rounded-lg flex items-center`;
const InputTag = tw.input`grow outline-none`;
//Module
const Field = () => {
  const [data, setData] = useState("");
  //   const schema={data:validate.Email()}
  const [err, setErr] = useState(false);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
    
  };
  const lblRef = useRef<HTMLLabelElement>(null);
  useEffect(() => {
    if (lblRef.current) {
      lblRef.current.style.position = data ? "relative" : "absolute";
      lblRef.current.style.fontSize = data ? "0.75rem" : "1rem";
    }
    setErr(!validatorjs.isEmail(data));
  }, [data]);
  return (
    <div className="my-4 ">
      <FieldTag>
        <PersonIcon className="align-middle px-1" fontSize="large" />
        <div className="block">
          <div className="flex flex-col" aria-required>
            <label
              className="text-base duration-200"
              htmlFor="email"
              ref={lblRef}
            >
              Email
            </label>
            <InputTag id="email" onChange={handleInput} />
          </div>
        </div>
      </FieldTag>
      {err && (
        <div className="text-sm pl-1 pt-1 text-red-600 ">
          Please input email address
        </div>
      )}
    </div>
  );
};
