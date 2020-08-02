import React from 'react'
import NumberFormat from 'react-number-format';

interface NumberFormatCustomProps {
    inputRef: (instance: NumberFormat | null) => void;
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}

const NumberFormatCustom = (props: NumberFormatCustomProps) => {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            allowNegative={false}
            decimalScale={0}
            getInputRef={inputRef}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
        />
    );
}

const NumberFormatDecimalCustom = (props: NumberFormatCustomProps) => {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            allowNegative={false}
            getInputRef={inputRef}
            decimalScale={1}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
        />
    );
}

const NumberFormatThreeDecimalCustom = (props: NumberFormatCustomProps) => {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            allowNegative={false}
            getInputRef={inputRef}
            decimalScale={3}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
        />
    );
}

export {
    NumberFormatCustom,
    NumberFormatDecimalCustom,
    NumberFormatThreeDecimalCustom
}