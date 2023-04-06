/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Host } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HostUpdateFormInputValues = {
    fullName?: string;
    email?: string;
};
export declare type HostUpdateFormValidationValues = {
    fullName?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HostUpdateFormOverridesProps = {
    HostUpdateFormGrid?: FormProps<GridProps>;
    fullName?: FormProps<TextFieldProps>;
    email?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HostUpdateFormProps = React.PropsWithChildren<{
    overrides?: HostUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    host?: Host;
    onSubmit?: (fields: HostUpdateFormInputValues) => HostUpdateFormInputValues;
    onSuccess?: (fields: HostUpdateFormInputValues) => void;
    onError?: (fields: HostUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: HostUpdateFormInputValues) => HostUpdateFormInputValues;
    onValidate?: HostUpdateFormValidationValues;
} & React.CSSProperties>;
export default function HostUpdateForm(props: HostUpdateFormProps): React.ReactElement;
