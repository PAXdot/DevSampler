// MIT · BuildWithMe-UI contributors. Original implementation.
'use client';
import { useAnimation, type AnimationProps } from './buildwithme-border-trace-button-utils/use-animation';
import './buildwithme-border-trace-button-utils/base.css';
import './buildwithme-border-trace-button-utils/border-trace-button.css';

export default function BorderTraceButton({
  paused = false,
  label = 'Explore the possibilities',
  onClick,
}: AnimationProps & { label?: string; onClick?: () => void }) {
  const { ref, active } = useAnimation(paused);
  return (
    <div ref={ref} className="bw-demo" data-active={active}>
      <button type="button" className="bw-button bw-trace" onClick={onClick}>
        <span>{label}</span>
      </button>
    </div>
  );
}
