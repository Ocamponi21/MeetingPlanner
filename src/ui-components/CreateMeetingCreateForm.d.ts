/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CreateMeetingCreateFormInputValues = {
    name?: string;
    location?: string;
    date?: string;
};
export declare type CreateMeetingCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateMeetingCreateFormOverridesProps = {
    CreateMeetingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateMeetingCreateFormProps = React.PropsWithChildren<{
    overrides?: CreateMeetingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CreateMeetingCreateFormInputValues) => CreateMeetingCreateFormInputValues;
    onSuccess?: (fields: CreateMeetingCreateFormInputValues) => void;
    onError?: (fields: CreateMeetingCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CreateMeetingCreateFormInputValues) => CreateMeetingCreateFormInputValues;
    onValidate?: CreateMeetingCreateFormValidationValues;
} & React.CSSProperties>;
export default function CreateMeetingCreateForm(props: CreateMeetingCreateFormProps): React.ReactElement;
