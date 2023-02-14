import validatorjs from "validator";
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
  fieldTitle:'OLd Password',
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
export const userFieldsLogin: T_fieldContent[] = [fieldEmail, fieldPassword];

export type T_fieldsChangePassowrd={
    name:string,

}
export const userFieldsPasswordChange: T_fieldContent[] = [
  {...fieldEmail,readonly:true,fieldInfo:''},
  fieldOldPassword,
  {...fieldPassword,fieldTitle:'New Password'},
  fieldRePassword,
];
