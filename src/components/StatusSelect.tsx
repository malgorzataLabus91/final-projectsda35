
import { STATUS_OPTIONS, useTranslateStatus } from "../models/StatusOption";
import { useState } from "react";
import { EmployeeStatus } from "../models/Employee";

export interface StatusSelectProps {
    name: string;
    defaultValue?: string;
    onChange?: (status: EmployeeStatus) => void;
}

export function StatusSelect({name, onChange, defaultValue }:StatusSelectProps) {
    const {translateStatus} = useTranslateStatus();
    const [statusOptions] = useState(STATUS_OPTIONS);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) : void =>{
        event.preventDefault();
        const status = event.target.value as EmployeeStatus;
        // jezeli istnieje funkcja to ja wykonaj 
       if(onChange){
        onChange(status);
       } 
    }

    return (
        <select onChange={handleChange} defaultValue={defaultValue} className="form-control" name={name}>
        {statusOptions.map((statusCode) => (<option key={statusCode} value={statusCode}>{translateStatus(statusCode)}</option>))}
    </select>
    )
}