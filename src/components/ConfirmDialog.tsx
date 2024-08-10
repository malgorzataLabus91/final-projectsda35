import * as React from 'react';
import { useTranslation } from "react-i18next";

export interface ConfirmDialogProps{
    show: boolean;
    title: string;
    description: string;
    onConfirm: (event: React.MouseEvent) => void;
    onCancel: (event: React.MouseEvent) => void;
    //przekazanie funkcji strzalkowej z voidem
}

export function ConfirmDialog({ show, onConfirm, onCancel, title, description }: ConfirmDialogProps){
    const {t} = useTranslation();

    return (
        <>
        <div className={"modal" + (show ? " d-block" : " d-none")} tabIndex={-1} >
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
                <button type="button" onClick={onCancel}  className="btn-close" data-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <p>{description}</p>
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={onConfirm}>{t('yes')}</button>
                <button type="button" className="btn btn-secondary" onClick={onCancel} data-dismiss="modal">{t('cancel')}</button>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}