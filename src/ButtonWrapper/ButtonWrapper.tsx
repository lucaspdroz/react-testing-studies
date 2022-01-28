import React from "react";

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>;

export const ButtonWrapper: React.FC<ButtonProps> =
    ({ title, ...props }) =>
        (<button {...props}>{title}</button>)