/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Participant } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ParticipantUpdateFormInputValues = {
    nam?: string;
    email?: string;
    AdminSub?: string;
};
export declare type ParticipantUpdateFormValidationValues = {
    nam?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    AdminSub?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ParticipantUpdateFormOverridesProps = {
    ParticipantUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nam?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    AdminSub?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ParticipantUpdateFormProps = React.PropsWithChildren<{
    overrides?: ParticipantUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    participant?: Participant;
    onSubmit?: (fields: ParticipantUpdateFormInputValues) => ParticipantUpdateFormInputValues;
    onSuccess?: (fields: ParticipantUpdateFormInputValues) => void;
    onError?: (fields: ParticipantUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ParticipantUpdateFormInputValues) => ParticipantUpdateFormInputValues;
    onValidate?: ParticipantUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ParticipantUpdateForm(props: ParticipantUpdateFormProps): React.ReactElement;
