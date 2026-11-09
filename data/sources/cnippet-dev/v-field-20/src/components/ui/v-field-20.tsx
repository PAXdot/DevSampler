import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/v-field-20-utils/field";
import {
  OTPField,
  OTPFieldInput,
  OTPFieldSeparator,
} from "@/components/ui/v-field-20-utils/otp-field";

export default function Particle() {
  return (
    <Field>
      <FieldLabel>Verification code</FieldLabel>
      <OTPField length={6}>
        <OTPFieldInput />
        <OTPFieldInput />
        <OTPFieldInput />
        <OTPFieldSeparator />
        <OTPFieldInput />
        <OTPFieldInput />
        <OTPFieldInput />
      </OTPField>
      <FieldDescription>
        Enter the 6-digit code sent to your phone.
      </FieldDescription>
      <FieldError>Invalid verification code. Please try again.</FieldError>
    </Field>
  );
}
