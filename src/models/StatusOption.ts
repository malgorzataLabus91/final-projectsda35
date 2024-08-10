import { EmployeeStatus } from "./Employee";
import { useTranslation } from "react-i18next";

export interface StatusOption { 
    label: string, 
    value: EmployeeStatus 
}


export const STATUS_OPTIONS: EmployeeStatus[] = [
    
     'HIRED', 'ON_LEAVE', 'FIRED'
    
]

//custom hook - in this method we returned function!
export const useTranslateStatus = (): {
    translateStatus: (s: EmployeeStatus) => string
} => {
    const { t } = useTranslation();

    const translateStatus = (s: EmployeeStatus) => t('status_' + s);

    return { translateStatus };
}