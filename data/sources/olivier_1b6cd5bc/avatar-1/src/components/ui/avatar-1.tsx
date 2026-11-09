import * as React from 'react';
import { Avatar } from '@base-ui-components/react/avatar';

export default function ExampleAvatar() {
  return (
    <div style={{ display: 'flex', gap: 20 }}>
      <Avatar.Root className="inline-flex size-12 items-center justify-center overflow-hidden rounded-full bg-gray-100 align-middle text-base font-medium text-black select-none">
        <Avatar.Image
          src="https://cdn.21st.dev/assets/mirror/ad/adfa33eea333b2ca8227b64fc1555b8993a79f63fed7941677169821a9fefdba.jpg"
          width="48"
          height="48"
          className="size-full object-cover"
        />
        <Avatar.Fallback className="flex size-full items-center justify-center text-base">
          LT
        </Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root className="inline-flex size-12 items-center justify-center overflow-hidden rounded-full bg-gray-100 align-middle text-base font-medium text-black select-none">
        LT
      </Avatar.Root>
    </div>
  );
}
