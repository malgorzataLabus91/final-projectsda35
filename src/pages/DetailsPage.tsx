import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Employee } from "../models/Employee";
import { useEffect, useState } from "react";
import { getEmployee, deleteEmployees } from "../services/API";
import { ConfirmDialog } from "../components/ConfirmDialog";
import { useTranslation } from "react-i18next";
import { useTranslateStatus } from "../models/StatusOption";

export function DetailsPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState<Employee>(location.state)
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    useEffect(() => {
        console.log(data, id);
        if (!data && id) {
            getEmployee(id).then(employee => {
                setData(employee);
            });
        } 
    }, [data, id]);

    const { translateStatus } = useTranslateStatus();
    const handleEditClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        event.preventDefault();

        navigate('/edit/'+data.id, { state: data });
    }

    const handleConfirmDeleteDialog = (event: React.MouseEvent): void => {
        event.preventDefault();
        deleteEmployees(id as string).then(response => {
            if (response){
                console.log('Employee has been deleted');
                navigate('/');
            
            }
        })
    }

    const handleDeleteClick = (event: React.MouseEvent): void => {
        event.preventDefault();

        setShowDeleteConfirm(true);
    }

    const handleCancel = (): void => {
        setShowDeleteConfirm(false);
    }

    const {t} = useTranslation();

    return (
        <>
        <ConfirmDialog show={showDeleteConfirm} onConfirm={handleConfirmDeleteDialog} onCancel= {handleCancel} title={t('confirmation')} description={t('questionToDelete')}></ConfirmDialog>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                <h1 className="pt-4 pb-4 flex-md-fill">{t('detail Page')}</h1>
                <div className="d-flex mb-5 mb-md-0 column-gap-2 justify-content-md-end">
                <button onClick={handleEditClick} className=" flex-fill flex-md-grow-0btn btn-warning">{t('edit')}</button>
                <button onClick={handleDeleteClick} className=" flex-fill flex-md-grow-0 btn btn-danger" data-toggle="modal" type="button" data-target="#myModal">{t('delete')}</button>
                </div>
                
            </div>
     
            { data ? 
                <section>
                <div className="row mb-3 row-gap-3">
                    <div className="col-12 col-md-4">
                    <label htmlFor="firstname" className="form-label">{t('firstname')}</label>
                    <input className="form-control" type="text" id="firstname" value={data.firstname} readOnly />
                </div>
                <div className="col-12 col-md-4">
                    <label htmlFor="lastname" className="form-label">{t('lastname')}</label>
                    <input className="form-control" type="text" id="lastname" value={data.lastname} readOnly />
                </div>
                <div className="col-12 col-md-4">
                    <label htmlFor="birthdate" className="form-label">{t('birthdate')}</label>
                    <input className="form-control" type="text" id="birthdate" value={data.birthdate ? data.birthdate.toDateString() : ''} readOnly />
                </div>
            </div>
            <div className="row mb-3 row-gap-3">
                <div className="col-12">
                <label htmlFor="phonenumber" className="form-label">{t('phonenumber')}</label>
                <input className="form-control" type="text" id="phonenumber" value={data.phonenumber || ''} readOnly />
                </div>
            </div>
            <div className="row mb-3 row-gap-3">
                <div className="col-12 col-md-4">
                    <label htmlFor="address" className="form-label">{t('address')}</label>
                    <input type="text" className="form-control" id="address" value={data.address} readOnly />
                </div>
                <div className="col-12 col-md-4">
                    <label htmlFor="city" className="form-label">{t('city')}</label>
                    <input type="text" className="form-control" id="city" value={data.city} readOnly />
                </div>
                <div className="col-12 col-md-4">
                    <label htmlFor="postalcode" className="form-label">{t('postalcode')}</label>
                    <input type="text" className="form-control" id="postalcode" value={data.postalcode} readOnly />
                </div>
            </div>
            <div className="row mb-3 row-gap-3">
            <div className="col-12 col-md-4">
                    <label htmlFor="id" className="form-label">ID</label>
                    <input type="text" className="form-control" id="id" value={data.id} readOnly />
                </div>
                <div className="col-12 col-md-4">
                    <label htmlFor="status" className="form-label">{t('status')}</label>
                    <input type="text" className="form-control" id="status" value={translateStatus(data.status)} readOnly />
                </div>
                <div className="col-12 col-md-4">
                    <label htmlFor="salary" className="form-label">{t('salary')}</label>
                    <input type="text" className="form-control" id="salary" value={data.salary} readOnly />
                </div>
            </div>
                </section> : ''

            }

        </>
    )
}