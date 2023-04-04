/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CreateMeeting } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CreateMeetingUpdateFormInputValues = {
    name?: string;
    location?: string;
    date?: string;
};
export declare type CreateMeetingUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateMeetingUpdateFormOverridesProps = {
    CreateMeetingUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateMeetingUpdateFormProps = React.PropsWithChildren<{
    overrides?: CreateMeetingUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    createMeeting?: CreateMeeting;
    onSubmit?: (fields: CreateMeetingUpdateFormInputValues) => CreateMeetingUpdateFormInputValues;
    onSuccess?: (fields: CreateMeetingUpdateFormInputValues) => void;
    onError?: (fields: CreateMeetingUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CreateMeetingUpdateFormInputValues) => CreateMeetingUpdateFormInputValues;
    onValidate?: CreateMeetingUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CreateMeetingUpdateForm(props: CreateMeetingUpdateFormProps): React.ReactElement;
