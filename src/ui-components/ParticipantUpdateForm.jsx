/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Participant } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ParticipantUpdateForm(props) {
  const {
    id: idProp,
    participant: participantModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    nam: "",
    email: "",
    AdminSub: "",
  };
  const [nam, setNam] = React.useState(initialValues.nam);
  const [email, setEmail] = React.useState(initialValues.email);
  const [AdminSub, setAdminSub] = React.useState(initialValues.AdminSub);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = participantRecord
      ? { ...initialValues, ...participantRecord }
      : initialValues;
    setNam(cleanValues.nam);
    setEmail(cleanValues.email);
    setAdminSub(cleanValues.AdminSub);
    setErrors({});
  };
  const [participantRecord, setParticipantRecord] =
    React.useState(participantModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Participant, idProp)
        : participantModelProp;
      setParticipantRecord(record);
    };
    queryData();
  }, [idProp, participantModelProp]);
  React.useEffect(resetStateValues, [participantRecord]);
  const validations = {
    nam: [{ type: "Required" }],
    email: [{ type: "Email" }],
    AdminSub: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          nam,
          email,
          AdminSub,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Participant.copyOf(participantRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ParticipantUpdateForm")}
      {...rest}
    >
      <TextField
        label="Nam"
        isRequired={true}
        isReadOnly={false}
        value={nam}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nam: value,
              email,
              AdminSub,
            };
            const result = onChange(modelFields);
            value = result?.nam ?? value;
          }
          if (errors.nam?.hasError) {
            runValidationTasks("nam", value);
          }
          setNam(value);
        }}
        onBlur={() => runValidationTasks("nam", nam)}
        errorMessage={errors.nam?.errorMessage}
        hasError={errors.nam?.hasError}
        {...getOverrideProps(overrides, "nam")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nam,
              email: value,
              AdminSub,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Admin sub"
        isRequired={false}
        isReadOnly={false}
        value={AdminSub}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nam,
              email,
              AdminSub: value,
            };
            const result = onChange(modelFields);
            value = result?.AdminSub ?? value;
          }
          if (errors.AdminSub?.hasError) {
            runValidationTasks("AdminSub", value);
          }
          setAdminSub(value);
        }}
        onBlur={() => runValidationTasks("AdminSub", AdminSub)}
        errorMessage={errors.AdminSub?.errorMessage}
        hasError={errors.AdminSub?.hasError}
        {...getOverrideProps(overrides, "AdminSub")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || participantModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || participantModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
