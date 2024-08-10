import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const resources = {

    en: {
        translation: {
            "employees": "Employees",
            "add": "Add",
            "addEmployee": "Add Employee",
            "firstname": "FirstName",
            "lastname": "Lastname",
            "birthdate": "Birthdate",
            "phonenumber": "Phonenumber",
            "address": "Address",
            "city": "City",
            "postalcode": "Postal Code",
            "status": "Status",
            "salary": "Salary",
            "save": "Save",
            "edit Employee": "Edit Employee",
            "detail Page": "Detail Page",
            "edit": "Edit",
            "delete": "Delete",
            "confirmation":"Confirmation",
            "questionToDelete": "Are you sure to delete this Employee?",
            "yes": "Yes",
            "cancel": "Cancel",
            "search phase": "Search phase...",
            "status_HIRED" : "Hired",
            "status_FIRED" : "Fired",
            "status_ON_LEAVE": "On Leave",
            "back": "Back",


        }
    },

    pl: {
        translation: {
            "employees": "Pracownicy",
            "add": "Dodaj",
            "addEmployee": "Dodaj Pracownika",
            "firstname": "Imie",
            "lastname": "Nazwisko",
            "birthdate": "Data Urodzenia",
            "phonenumber": "Numer telefonu",
            "address": "Adres Zamieszkania",
            "city": "Miasto",
            "postalcode": "Kod pocztowy",
            "status": "Status",
            "salary": "Pensja",
            "save": "Zapisz",
            "edit Employee": "Edycja Pracownika",
            "detail Page": "Detale Pracownika",
            "edit": "Zmien",
            "delete": "Usun",
            "confirmation":"Zatwierdz",
            "questionToDelete": "Jestes pewny ze chcesz usunac pracownika?",
            "yes": "Tak",
            "cancel": "Cofnij",
            "search phase": "Wyszukiwana fraza...",
            "status_HIRED" : "Zatrudniony",
            "status_FIRED" : "Zwolniony",
            "status_ON_LEAVE": "Na wakacjach",
            "back": "Cofnij"

        }
    }


}

i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en"
});

export default i18n;