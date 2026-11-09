"use client";
import * as React from "react";

export type State = { open?: boolean; active?: number; query?: string; notice?: string; selected?: string; reveal?: number; previous?: number; blend?: number; expanded?: number; highlighted?: boolean };
export type Props = { title?: string; state?: State; onStateChange?: (state: State) => void; onAction?: (action: string) => void; seeking?: boolean; disabled?: boolean; showContext?: boolean; };

function useValue(initial: State, controlled: State | undefined, notify: Props["onStateChange"]) {
  const [local, setLocal] = React.useState(initial);
  const value = controlled ?? local;
  const set = (patch: Partial<State>) => { const next = { ...value, ...patch }; setLocal(next); notify?.(next); };
  return [value, set] as const;
}

export default function FavoriteToggle({title='Favorite',state,onStateChange,onAction,seeking=false,disabled=false,showContext=false}:Props){
  const [v,set]=useValue({active:0},state,onStateChange);
  const selected=v.active===1, amount=v.reveal??(selected?1:0);
  const [bouncing, setBouncing] = React.useState(false);
  
  const handleClick = () => {
    const nextSelected = !selected;
    set({active: nextSelected ? 1 : 0});
    onAction?.(nextSelected ? 'favorite' : 'unfavorite');
    
    if (nextSelected && !seeking) {
      setBouncing(true);
      setTimeout(() => setBouncing(false), 300);
    }
  };
  
  return (
    <div className={`w-full relative text-center text-sm text-foreground ${seeking ? '[&_*]:!transition-none [&_*]:!animate-none' : ''}`} data-seek={seeking}>
      <div className={`flex flex-col items-center justify-center ${showContext ? 'min-h-[220px] py-5 gap-7' : ''}`}>
        
        {showContext && (
          <p className="text-[9px] font-semibold tracking-[0.17em] uppercase text-muted-foreground m-0">A small vote of confidence</p>
        )}
        
        <button 
          type="button" 
          className={`h-12 inline-flex items-center justify-center gap-3 border rounded-xl bg-background px-4 font-medium text-[13px] relative whitespace-nowrap transition-all duration-200 hover:bg-muted/50 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${selected ? 'border-foreground' : 'border-border'}`} 
          disabled={disabled} 
          aria-pressed={selected} 
          aria-label={(selected?'Remove from favorites':'Add to favorites')+', '+(selected?25:24)+' favorites'} 
          onClick={handleClick}
        >
          <span 
            className="w-5 h-5 relative flex items-center justify-center" 
            style={seeking ? {transform:`scale(${1+(v.blend||0)*.15})`} : (bouncing ? {transform: 'scale(1.15)', transition: 'transform 0.15s ease'} : {transition: 'transform 0.15s ease'})}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.45" strokeLinejoin="round" fill={selected?'currentColor':'none'} aria-hidden="true" className="transition-all duration-200">
              <path d="m12 3 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3.1-5.8 3.1 1.1-6.5L2.6 9.8l6.5-.9Z"/>
            </svg>
          </span>
          
          <span>{title}</span>
          
          <span className="h-[18px] overflow-hidden w-6 text-center ml-0.5 pl-3 border-l border-border box-content font-mono text-[11px] leading-[18px] text-muted-foreground" aria-hidden="true">
            <span className="block transition-transform duration-200 ease-out" style={{transform:`translateY(${-amount*18}px)`}}>
              <b className="block font-inherit h-[18px] font-normal">24</b>
              <b className="block font-inherit h-[18px] font-normal">25</b>
            </span>
          </span>
        </button>

        {showContext && (
          <p className="text-[11px] leading-relaxed text-muted-foreground max-w-[280px] min-h-[37px] m-0" role="status">
            {selected ? 'Added to your favorites. Good taste, quietly noted.' : 'For the things worth keeping close.'}
          </p>
        )}
      </div>
    </div>
  )
}
