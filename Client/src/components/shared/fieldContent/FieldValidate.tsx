import validatorjs from "validator";

//ValidatePassword
export const ValidatePassword = ({ passwordVal }: { passwordVal: string }) => {
    const fieldErr = [
      " At least 8 characters",
      " 1 uppercase",
      " 1 lowercase",
      " 1 symbol",
      " 1 number",
    ];
    const upperCaseRegex = /^[A-Z]$/;
    const lowerCaseRegex = /^[a-z]$/;
    const symbolRegex = /^[-#!$@£%^&*()_+|~=`{}\[\]:";'<>?,.\/ ]$/;
    const numberRegex = /^[0-9]$/;
    const regRzlt = [false, false, false, false];
    Array.from(passwordVal).forEach((char) => {
      regRzlt[0] ||= upperCaseRegex.test(char);
      regRzlt[1] ||= lowerCaseRegex.test(char);
      regRzlt[2] ||= symbolRegex.test(char);
      regRzlt[3] ||= numberRegex.test(char);
    });
    const checkVal = [validatorjs.isLength(passwordVal, { min: 8 }), ...regRzlt];
    return (
      <div>
        {fieldErr.map((err, id) => {
          const color=checkVal[id] ? " text-green-600":"text-red-600"
          const marker=checkVal[id] ?'✓':'✘'
          return <div key={id}><div className={color}>{marker} {err}</div> </div>;
        })}
      </div>
    );
  };
  
  //ValidateRePassword
export  const ValidateRePassword = ({ passwordVal,rePasswordVal }: { passwordVal: string,rePasswordVal:string }) => {
    const fieldErr=["- Passwords do NOT match"]
    const rzlt = [passwordVal===rePasswordVal];
    return (
      <div>
        {fieldErr.map((err, id) => {
          const color=rzlt[id] ? " text-green-600":"text-red-600"
          const marker=rzlt[id] ?'✓':'✘'
          return <div key={id}><div className={color}>{marker} {err}</div> </div>;
        })}
      </div>
    );
  };

  export const validateUserInfo_name = (name: string) => {
    return validatorjs.isLength(name, { max: 20, min: 6 });
  };
  export const validateUserInfo_email = (email: string) => {
    return validatorjs.isEmail(email);
  };
  export const validateUserInfo_password = (password: string) => {
    return validatorjs.isStrongPassword(password);
  };
  export const validateUserInfo_rePassword = (
    password: string,
    rePassword: string
  ) => {
    return password === rePassword;
  };