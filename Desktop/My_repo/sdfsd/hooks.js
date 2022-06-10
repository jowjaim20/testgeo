import { useEffect, useState } from 'react';

export default (props) => {
    const { keys, defaultRequiredErrMsg } = props;
    const [form, setForm] = useState({});
    const [errors, setErr] = useState({});

    useEffect(() => {
        initForm();
    }, [])

    const initForm = (form = null) => {
        const f = {};
        keys.forEach((key) => {
            f[key.key] = (form && form[key.key]) ? form[key.key] : key.default || '';
        });
        setForm(f);
    }

    const resetForm = () => {
        setForm({});
        initForm();
    }

    const formIsValid = () => {
        let isValid = true;
        const errors = {};

        keys.filter((key) => {
            // TODO: MOVE THE VALIDATION TO THE FILED LEVEL
            if (key.key == "email") {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                let checkEmail = re.test(String(form[key.key]).toLowerCase());

                if (!checkEmail) {
                    isValid = false;
                    errors[key.key] = `Email is incorrect`;
                }
            }
        })

        // keys.filter((key) => {
        //     if (key.key == "phone") {
        //         let phone = String(form[key.key]).length > 10
        //         // const re = /^\d+$/;
        //         // let checkPhone = re.test(String(form[key.key]).toLowerCase());

        //         if (!phone) {
        //             isValid = false;
        //             errors[key.key] = `Phone number is invalid`;
        //         }
        //     }
        // })

        keys.filter((key) => {
            if (key.key == "url") {
                const re = /((https?:\/\/)|(www.))[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/;
                let checkUrl = re.test(String(form[key.key]).toLowerCase());

                if (!checkUrl) {
                    isValid = false;
                    errors[key.key] = `Url is invalid`;
                }
            }
        })



        keys.filter((key) => {
            if (key.key == "name") {
                const re = /^[^0-9!-_=+:`"@#$%^&*()?><|/\/~`"]+$/;
                let checkName = re.test(String(form[key.key]).toLowerCase());

                if (!checkName) {
                    isValid = false;
                    errors[key.key] = `Only letters are allowed`;
                }
            }
        })

        keys.filter((key) => {
            if (key.key == "lastname") {
                const re = /^[^0-9!-_=+:`"@#$%^&*()?><|/\/~`"]+$/;
                let checklastName = re.test(String(form[key.key]).toLowerCase());

                if (!checklastName) {
                    isValid = false;
                    errors[key.key] = `Only letters are allowed`;
                }
            }
        })

        keys.filter((key) => (key.required)).forEach((key) => {
            if (key.required && !form[key.key]) {
                isValid = false;
                errors[key.key] = (key.errMsgs && key.errMsgs.required) || (defaultRequiredErrMsg && defaultRequiredErrMsg(key)) || `${key.key} is required`;
            }

            console.log('errors:', errors);
            setErr({ ...errors });
        })

        return isValid;
    }


    const updateForm = (key, value) => {
        setForm({ ...form, [key]: value });

        if (errors[key]) {
            setErr({ ...errors, [key]: null });
        }
    }


    return {
        formIsValid,
        updateForm,
        setErr,
        initForm,
        form,
        errors,
        resetForm,
    };
}
