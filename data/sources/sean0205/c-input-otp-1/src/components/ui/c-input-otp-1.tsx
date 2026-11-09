import { Field, FieldLabel } from "@/components/ui/c-input-otp-1-utils/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function Pattern({ defaultValue }: { defaultValue?: string }) {
  return (
    <div className="flex items-center justify-center">
      <Field>
        <FieldLabel htmlFor="simple-otp">Simple OTP</FieldLabel>
        <InputOTP id="simple-otp" maxLength={6} defaultValue={defaultValue}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </Field>
    </div>
  );
}
export default Pattern;
