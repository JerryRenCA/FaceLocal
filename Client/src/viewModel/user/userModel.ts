// NOTE: View model for all user profile & collection operation
// ================Description=================
// T_userInfoRegister is the type for all operation of user profile
// T_fieldContent_? specfic T_fieldContent for name,email,password,repassword...
//
import {
  T_fieldBase,
  T_fieldContent,
} from "../../components/shared/fieldContent/FieldContent";
import {
  validateUserInfo_email,
  validateUserInfo_name,
  validateUserInfo_password,
  validateUserInfo_rePassword,
} from "./userValidate";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

// NOTE: Base type for all user views, including register, login, profile update, password change
export type T_userInfoRegister = {
  name: string;
  email: string;
  password: string;
  oldPassword: string;
  rePassword: string;
};
export const default_userInfoRegister: T_userInfoRegister = {
  name: "",
  email: "",
  password: "",
  oldPassword:'',
  rePassword: "",
};

// NOTE: fieldName for text input of name
export const fieldName: T_fieldContent = {
  fieldname: "name",
  fieldTitle:'name',
  readonly:false,
  valSet:'',
  fieldInfo: "- Name will be displayed on your profile.",
  fieldErr: ["- Name length between 6 to 20."],
  fieldVisibleSettable: false,
  icon: PersonIcon,
  updateField: <T extends T_fieldBase>(prev: T, newVal: string): T => {
    return { ...prev, name: newVal };
  },
  validateField: validateUserInfo_name,
};

// NOTE: FieldEmail for text input of email
export const fieldEmail: T_fieldContent = {
  fieldname: "email",
  fieldTitle:'email',
  readonly:false,
  valSet:'',
  fieldInfo: "- Email will be used for login.",
  fieldErr: ["- Email address is invalid."],
  fieldVisibleSettable: false,
  icon: EmailIcon,
  updateField: <T extends T_fieldBase>(prev: T, newVal: string): T => {
    return { ...prev, email: newVal };
  },
  validateField: validateUserInfo_email,
};

// NOTE: fieldPassword for text input of password
export const fieldPassword: T_fieldContent = {
  fieldname: "password",
  fieldTitle:'password',
  readonly:false,
  valSet:'',
  fieldInfo: "",
  fieldErr: [],
  fieldVisibleSettable: true,
  icon: LockIcon,
  updateField: <T extends T_fieldBase>(prev: T, newVal: string): T => {
    return { ...prev, password: newVal };
  },
  validateField: validateUserInfo_password,
};

export const fieldOldPassword: T_fieldContent = {
  fieldname: "oldPassword",
  fieldTitle:'Old Password',
  readonly:false,
  valSet:'',
  fieldInfo: "",
  fieldErr: [],
  fieldVisibleSettable: true,
  icon: LockIcon,
  updateField: <T extends T_fieldBase>(prev: T, newVal: string): T => {
    return { ...prev, oldPassword: newVal };
  },
  validateField: validateUserInfo_password,
};

export const fieldRePassword: T_fieldContent = {
  fieldname: "rePassword",
  fieldTitle:'Comfirm Password',
  readonly:false,
  valSet:'',
  fieldInfo: "",
  fieldErr: [],
  fieldVisibleSettable: true,
  icon: LockIcon,
  updateField: <T extends T_fieldBase>(prev: T, newVal: string): T => {
    return { ...prev, rePassword: newVal };
  },
  validateField: () => true,
};

// NOTE: UserFieldsRegister is the viewModel for register form
export const userFieldsRegister: T_fieldContent[] = [
  fieldName,
  fieldEmail,
  fieldPassword,
  fieldRePassword,
];
export const validateUserInfo = (userInfo: T_userInfoRegister): boolean => {
  if (!userFieldsRegister[0].validateField(userInfo.name)) return false;
  if (!userFieldsRegister[1].validateField(userInfo.email)) return false;
  if (!userFieldsRegister[2].validateField(userInfo.password)) return false;
  if (!validateUserInfo_rePassword(userInfo.password, userInfo.rePassword))
    return false;
  return true;
};

// NOTE: userFieldsLogin is the viewModel for login form
export const userFieldsLogin: T_fieldContent[] = [fieldEmail, fieldPassword];

// NOTE: userFieldsPasswordChange is the viewModel for changepassword form
export const userFieldsPasswordChange: T_fieldContent[] = [
  {...fieldEmail,readonly:true,fieldInfo:''},
  fieldOldPassword,
  {...fieldPassword,fieldTitle:'New Password'},
  fieldRePassword,
];

// NOTE: validate userInfo for view->PasswordChange
export const validateUserInfoForPasswordChange = (userInfo: T_userInfoRegister): boolean => {
  // if (!userFieldsPasswordChange[0].validateField(userInfo.name)) return false;
  if (!userFieldsPasswordChange[1].validateField(userInfo.oldPassword)) return false;
  if (!userFieldsPasswordChange[2].validateField(userInfo.password)) return false;
  if (!validateUserInfo_rePassword(userInfo.password, userInfo.rePassword))
    return false;
  return true;
};