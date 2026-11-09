'use client';

import React from 'react';
import { Shader, Blob, CursorRipples, FilmGrain, SolidColor, Swirl, WaveDistortion } from 'shaders/react';

// First texture shader provided by the user (Mercury collection)
export function Shader0() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none rounded-[16px] overflow-hidden">
      <Shader className="w-full h-full" style={{ width: '100%', height: '100%', display: 'block' }}>
        <SolidColor color="#0f0f0f" />
        <Swirl blend={45} colorA="#30c9ff" colorB="#040733" colorSpace="oklab" detail={3.5} speed={0.6} />
        <Blob
          blendMode="linearDodge"
          center={{
            type: 'mouse-position',
            reach: 0.55,
            originX: 0.5,
            originY: 0.5,
            momentum: 0.3,
            smoothing: 0.3,
          }}
          colorA="#ff8373"
          colorB="#ffa042"
          deformation={0.9}
          size={0.15}
          softness={0.7}
        />
        <WaveDistortion angle={23} edges="mirror" frequency={5.1} speed={2.5} strength={0.15} visible={true} />
        <CursorRipples chromaticSplit={2} decay={5} intensity={20} radius={0.7} visible={true} />
        <FilmGrain strength={0.075} visible={true} />
      </Shader>
    </div>
  );
}

// Map of shaders for the 9 cards. You can send the code for each card one by one!
export function Shader1() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none rounded-[16px] overflow-hidden">
      <Shader className="w-full h-full" style={{ width: '100%', height: '100%', display: 'block' }}>
        <SolidColor color="#0f0f0f" />
        <Swirl blend={45} colorA="#ff7a1a" colorB="#170308" colorSpace="oklab" detail={3.5} speed={0.7} />
        <Blob
          blendMode="linearDodge"
          center={{
            type: 'mouse-position',
            reach: 0.55,
            originX: 0.5,
            originY: 0.5,
            momentum: 0.3,
            smoothing: 0.3,
          }}
          colorA="#ffd633"
          colorB="#ffb614"
          deformation={0.9}
          size={0.15}
          softness={0.7}
        />
        <WaveDistortion angle={23} edges="mirror" frequency={5.1} speed={2.5} strength={0.15} visible={true} />
        <CursorRipples chromaticSplit={2} decay={5} intensity={20} radius={0.7} visible={true} />
        <FilmGrain strength={0.075} visible={true} />
      </Shader>
    </div>
  );
}

// Third texture shader provided by the user
export function Shader2() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none rounded-[16px] overflow-hidden">
      <Shader className="w-full h-full" style={{ width: '100%', height: '100%', display: 'block' }}>
        <SolidColor color="#0f0f0f" />
        <Swirl blend={45} colorA="#ccf2ff" colorB="#191921" colorSpace="oklab" detail={3.5} speed={0.6} />
        <Blob
          blendMode="linearDodge"
          center={{
            type: 'mouse-position',
            reach: 0.55,
            originX: 0.5,
            originY: 0.5,
            momentum: 0.3,
            smoothing: 0.3,
          }}
          colorA="#4e587891"
          colorB="#3b4b6b"
          deformation={0.9}
          size={0.15}
          softness={0.7}
        />
        <WaveDistortion angle={23} edges="mirror" frequency={5.1} speed={2.5} strength={0.15} visible={true} />
        <CursorRipples chromaticSplit={2} decay={5} intensity={20} radius={0.7} visible={true} />
        <FilmGrain strength={0.075} visible={true} />
      </Shader>
    </div>
  );
}

// Fourth texture shader provided by the user
export function Shader3() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none rounded-[16px] overflow-hidden">
      <Shader className="w-full h-full" style={{ width: '100%', height: '100%', display: 'block' }}>
        <SolidColor color="#0f0f0f" />
        <Swirl blend={45} colorA="#ff2bd6" colorB="#1a0533" colorSpace="oklab" detail={3.5} speed={0.75} />
        <Blob
          blendMode="linearDodge"
          center={{
            type: 'mouse-position',
            reach: 0.55,
            originX: 0.5,
            originY: 0.5,
            momentum: 0.3,
            smoothing: 0.3,
          }}
          colorA="#00ffe1"
          colorB="#3effa8"
          deformation={0.9}
          size={0.15}
          softness={0.7}
        />
        <WaveDistortion angle={23} edges="mirror" frequency={5.1} speed={2.5} strength={0.15} visible={true} />
        <CursorRipples chromaticSplit={2} decay={5} intensity={20} radius={0.7} visible={true} />
        <FilmGrain strength={0.075} visible={true} />
      </Shader>
    </div>
  );
}

// Fifth texture shader provided by the user
export function Shader4() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none rounded-[16px] overflow-hidden">
      <Shader className="w-full h-full" style={{ width: '100%', height: '100%', display: 'block' }}>
        <SolidColor color="#0f0f0f" />
        <Swirl blend={45} colorA="#a78bfa" colorB="#1e1b4b" colorSpace="oklab" detail={3.5} speed={0.5} />
        <Blob
          blendMode="screen"
          center={{
            type: 'mouse-position',
            reach: 0.55,
            originX: 0.5,
            originY: 0.5,
            momentum: 0.3,
            smoothing: 0.3,
          }}
          colorA="#f0abfc"
          colorB="#c084fc"
          deformation={0.9}
          size={0.15}
          softness={0.7}
        />
        <WaveDistortion angle={23} edges="mirror" frequency={5.1} speed={2.5} strength={0.15} visible={true} />
        <CursorRipples chromaticSplit={2} decay={5} intensity={20} radius={0.7} visible={true} />
        <FilmGrain strength={0.075} visible={true} />
      </Shader>
    </div>
  );
}

// Sixth texture shader provided by the user
export function Shader5() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none rounded-[16px] overflow-hidden">
      <Shader className="w-full h-full" style={{ width: '100%', height: '100%', display: 'block' }}>
        <SolidColor color="#ffffff" />
        <Swirl blend={45} colorA="#f0cce5" colorB="#ff4ffb" colorSpace="oklab" detail={3.5} speed={0.6} />
        <Blob
          blendMode="linearDodge"
          center={{
            type: 'mouse-position',
            reach: 0.55,
            originX: 0.5,
            originY: 0.5,
            momentum: 0.3,
            smoothing: 0.3,
          }}
          colorA="#ff9b8f"
          colorB="#ffd1a3"
          deformation={0.9}
          size={0.15}
          softness={0.7}
        />
        <WaveDistortion angle={23} edges="mirror" frequency={5.1} speed={2.5} strength={0.15} visible={true} />
        <CursorRipples chromaticSplit={2} decay={5} intensity={20} radius={0.7} visible={true} />
        <FilmGrain strength={0.075} visible={true} />
      </Shader>
    </div>
  );
}

// Seventh texture shader provided by the user
export function Shader6() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none rounded-[16px] overflow-hidden">
      <Shader className="w-full h-full" style={{ width: '100%', height: '100%', display: 'block' }}>
        <SolidColor color="#0f0f0f" />
        <Swirl blend={45} colorA="#0a140e" colorB="#12d32f" colorSpace="oklab" detail={3.5} speed={0.6} />
        <Blob
          blendMode="linearDodge"
          center={{
            type: 'mouse-position',
            reach: 0.55,
            originX: 0.5,
            originY: 0.5,
            momentum: 0.3,
            smoothing: 0.3,
          }}
          colorA="#61f533"
          colorB="#46eb65"
          deformation={0.9}
          size={0.15}
          softness={0.7}
        />
        <WaveDistortion angle={23} edges="mirror" frequency={5.1} speed={2.5} strength={0.15} visible={true} />
        <CursorRipples chromaticSplit={2} decay={5} intensity={20} radius={0.7} visible={true} />
        <FilmGrain strength={0.075} visible={true} />
      </Shader>
    </div>
  );
}

// Eighth texture shader provided by the user
export function Shader7() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none rounded-[16px] overflow-hidden">
      <Shader className="w-full h-full" style={{ width: '100%', height: '100%', display: 'block' }}>
        <SolidColor color="#0f0f0f" />
        <Swirl blend={45} colorA="#cbf723" colorB="#dd6526" colorSpace="oklab" detail={3.5} speed={0.6} />
        <Blob
          blendMode="linearDodge"
          center={{
            type: 'mouse-position',
            reach: 0.55,
            originX: 0.5,
            originY: 0.5,
            momentum: 0.3,
            smoothing: 0.3,
          }}
          colorA="#ed7551"
          colorB="#a75235"
          deformation={0.9}
          size={0.15}
          softness={0.7}
        />
        <WaveDistortion angle={23} edges="mirror" frequency={5.1} speed={2.5} strength={0.15} visible={true} />
        <CursorRipples chromaticSplit={2} decay={5} intensity={20} radius={0.7} visible={true} />
        <FilmGrain strength={0.075} visible={true} />
      </Shader>
    </div>
  );
}

// Ninth texture shader provided by the user
export function Shader8() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none rounded-[16px] overflow-hidden">
      <Shader className="w-full h-full" style={{ width: '100%', height: '100%', display: 'block' }}>
        <SolidColor color="#ffffff" />
        <Swirl blend={45} colorA="#c2d7ff" colorB="#abbaff" colorSpace="oklab" detail={3.5} speed={0.6} />
        <Blob
          blendMode="linearDodge"
          center={{
            type: 'mouse-position',
            reach: 0.55,
            originX: 0.5,
            originY: 0.5,
            momentum: 0.3,
            smoothing: 0.3,
          }}
          colorA="#ff9b8f"
          colorB="#ffd1a3"
          deformation={0.9}
          size={0.15}
          softness={0.7}
        />
        <WaveDistortion angle={23} edges="mirror" frequency={5.1} speed={2.5} strength={0.15} visible={true} />
        <CursorRipples chromaticSplit={2} decay={5} intensity={20} radius={0.7} visible={true} />
        <FilmGrain strength={0.075} visible={true} />
      </Shader>
    </div>
  );
}

export const SHADERS_MAP: (React.ComponentType | null)[] = [
  Shader0, // Card 1 (i = 0)
  Shader1, // Card 2 (i = 1)
  Shader2, // Card 3 (i = 2)
  Shader3, // Card 4 (i = 3)
  Shader4, // Card 5 (i = 4)
  Shader5, // Card 6 (i = 5)
  Shader6, // Card 7 (i = 6)
  Shader7, // Card 8 (i = 7)
  Shader8, // Card 9 (i = 8)
];
