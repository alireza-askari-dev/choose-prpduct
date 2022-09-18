import React, { useEffect, useState } from 'react';

// mrx : material ui
import { Grid, container, Typography, Box } from '@material-ui/core';

// mrx : files
import ResterIcon from "../../public/assets/Icons/reset-button.svg";
import ResterIconRed from "../../public/assets/Icons/reset-button-red.svg";
import CheckIcon from '../../public/assets/Icons/checkIconOrange.svg';

export default function Input({
    lable = 'text',
    type = 'text',
    placeholder = '',
    min,
    max,
    setValue,
    value,
    onChange,
    schema,
    disabled,
    Succes,
    SuccesMessage,
}) {
    const [ColorTheme, setColorTheme] = useState("InputText");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        GetInputClassName();
    }, [value])

    const GetInputClassName = () => {
        if (max ? value?.length > max : false) {
            setColorTheme("InputText Error_input");
            setErrorMessage(`تعداد کاراکتر مجاز ${max} می باشد.`);
            setError(true);
        } else if (parseInt(value?.length)) {
            setColorTheme("InputText True_input");
            setError(false);
        } else {
            setColorTheme("InputText");
            setError(false);
        }
    }

    const handleInputChange = ({ target: input }) => {
        vaildateValue(input.value);
        setValue(input.value);
    };

    const vaildateValue = (value) => {
        if (type !== "email") {
            if (schema) {
                const { error } = schema?.validate(value?.trim());
                if (error) setError(error?.message);
                else setError(null);
            }
        } else {
            const { error: e } = schema?.validate(value?.trim());
            if (e) setError(e?.message);
            else setError(null);
        }
    };

    const resetText = () => {
        if (type == 'number') {
            setValue(0);
        } else {
            setValue("");
        }
    };

    const ResetBtnSt = () => {
        if (error) {
            return <img src={ResterIconRed.src} />
        } else {
            return <img src={ResterIcon.src} />
        }
    }

    return (
        <Grid
            item
            container
            direction='column'
            className='mainInput'
        >
            <lable className="InputTextlable">{lable}</lable>
            <input
                disabled={disabled}
                value={value === 0 ? "" : value}
                className={`${ColorTheme} ${type === 'number' && ' p-number'}`}
                type={type}
                placeholder={placeholder}
                onChange={(e) => { handleInputChange(e); onChange ? onChange() : "" }}
            />

            {
                error && !disabled ? (
                    <><span className="InputErrorMessage">{errorMessage}</span></>
                ) : (
                    <></>
                )
            }

            {
                Succes ? (
                    <><span className="InputSuccessMessage">
                        <img style={{
                            position: "relative",
                            top: "3px"
                        }} src={CheckIcon.src} />
                        {SuccesMessage}</span></>
                ) : (
                    <></>
                )
            }
        </Grid>
    )
}
